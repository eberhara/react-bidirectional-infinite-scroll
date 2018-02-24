import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    horizontal: PropTypes.bool,
    onReachBottom: PropTypes.func,
    onReachTop: PropTypes.func,
    onReachLeft: PropTypes.func,
    onReachRight: PropTypes.func,
    onScroll: PropTypes.func,
    position: PropTypes.number
  }

  static defaultProps = {
    horizontal: false,
    onReachBottom: (f) => f,
    onReachTop: (f) => f,
    onReachLeft: (f) => f,
    onReachRight: (f) => f,
    onScroll: (f) => f,
    position: 0
  }

  prevScroll = 0

  componentDidMount() {
    const { position } = this.props

    if (position) {
      this.setScrollPosition(position)
    }
  }

  componentDidUpdate(prevProps) {
    const { position } = this.props

    if (position !== prevProps.position) {
      this.setScrollPosition(position)
    }
  }

  handleScrollerRef = (reference) => { this.scroller = reference }

  setScrollPosition(position = 0) {
    if (this.props.horizontal) {
      this.scroller.scrollLeft = position
    } else {
      this.scroller.scrollTop = position
    }

    this.prevScroll = position
  }

  handleHorizontalScroll = () => {
    const {
      firstChild,
      lastChild,
      scrollLeft,
      offsetLeft,
      offsetWidth
    } = this.scroller

    const {
      onReachRight,
      onReachLeft
    } = this.props

    const leftEdge = firstChild.offsetLeft
    const rightEdge = lastChild.offsetLeft + lastChild.offsetWidth
    const scrolledLeft = scrollLeft + offsetLeft
    const scrolledRight = scrolledLeft + offsetWidth

    if (scrolledRight >= rightEdge) {
      onReachRight()
    } else if (scrolledLeft <= leftEdge) {
      onReachLeft()
    }
  }

  handleVerticalScroll = () => {
    const {
      firstChild,
      lastChild,
      scrollTop,
      offsetTop,
      offsetHeight
    } = this.scroller

    const {
      onReachTop,
      onReachBottom
    } = this.props

    const topEdge = firstChild.offsetTop
    const bottomEdge = lastChild.offsetTop + lastChild.offsetHeight
    const scrolledUp = scrollTop + offsetTop
    const scrolledDown = scrolledUp + offsetHeight

    if (scrolledDown >= bottomEdge) {
      onReachBottom()
    } else if (scrolledUp <= topEdge) {
      onReachTop()
    }
  }

  handleScroll = () => {
    const {
      horizontal,
      onScroll
    } = this.props

    let scrolledTo = 0

    if (horizontal) {
      this.handleHorizontalScroll()
      scrolledTo = this.scroller.scrollLeft
    } else {
      this.handleVerticalScroll()
      scrolledTo = this.scroller.scrollTop
    }

    onScroll(scrolledTo, this.prevScroll)
    this.prevScroll = scrolledTo
  }

  render() {
    const {
      children,
      horizontal
    } = this.props

    const whiteSpace = horizontal
      ? 'nowrap'
      : 'normal'

    return (
      <div
        ref={this.handleScrollerRef}
        style={{
          overflow: 'auto',
          height: 'inherit',
          width: 'inherit',
          WebkitOverflowScrolling: 'inherit',
          whiteSpace
        }}
        onScroll={this.handleScroll}>
        {children}
      </div>
    )
  }
}
