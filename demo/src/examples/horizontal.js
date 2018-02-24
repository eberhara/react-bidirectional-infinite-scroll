import React, { Component } from 'react'
import InfiniteScroll from '../../../src'

export default class HorizontalExample extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState({
      items: [].concat(this.getItems())
    })
  }

  getItems = () => {
    const itemsLength = this.state.items.length
    const frequency = 0.3
    const red = Math.round(Math.sin(frequency * itemsLength + 0) * 127 + 128)
    const green = Math.round(Math.sin(frequency * itemsLength + 2) * 127 + 128)
    const blue = Math.round(Math.sin(frequency * itemsLength + 4) * 127 + 128)

    return (
      <div
        key={+new Date()}
        style={{
          width: '300px',
          height: '160px',
          padding: '10px',
          marginRight: '10px',
          display: 'inline-block',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
          background: `rgba(${red}, ${green}, ${blue}, 1)`
        }}>
          Example {new Date().toLocaleString()}
      </div>
    )
  }

  handleScrollLeft = () => {
    const items = [].concat(this.getItems()).concat(this.state.items)
    setTimeout(() => { this.setState({ items }) }, 500)
  }

  handleScrollRight = () => {
    const items = this.state.items.concat(this.getItems())
    setTimeout(() => { this.setState({ items }) }, 500)
  }

  handleOnScroll = (position, previousPosition) => {
    const diffScroll = position - previousPosition
    const direction = diffScroll > 0
      ? 'right'
      : 'left'

    console.log(`Scroll ${direction} to ${position}`)
  }

  render() {
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          WebkitOverflowScrolling: 'touch'
        }}>
        <InfiniteScroll
          onReachLeft={this.handleScrollLeft}
          onReachRight={this.handleScrollRight}
          onScroll={this.handleOnScroll}
          position={10}
          horizontal>
          {this.state.items}
        </InfiniteScroll>
      </div>
    )
  }
}
