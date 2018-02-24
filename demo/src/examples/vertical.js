import React, { Component } from 'react'
import InfiniteScroll from '../../../src'

export default class VerticalExample extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState({
      items: [].concat(this.getItems())
    })
  }

  getItems() {
    const itemsLength = this.state.items.length
    const frequency = 0.3
    const red = Math.round(Math.sin(frequency * itemsLength + 0) * 127 + 128)
    const green = Math.round(Math.sin(frequency * itemsLength + 2) * 127 + 128)
    const blue = Math.round(Math.sin(frequency * itemsLength + 4) * 127 + 128)

    return (
      <div
        key={+new Date()}
        style={{
            height: '300px',
            padding: '10px',
            marginBottom: '10px',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
            background: `rgba(${red}, ${green}, ${blue}, 1)`
        }}>
        Example {new Date().toLocaleString()}
      </div>
    )
  }

  handleScrollUp = () => {
    const items = [].concat(this.getItems()).concat(this.state.items)
    setTimeout(() => { this.setState({ items }) }, 500)
  }

  handleScrollDown = () => {
    const items = this.state.items.concat(this.getItems())
    setTimeout(() => { this.setState({ items }) }, 500)
  }

  handleOnScroll = (position, previousPosition) => {
    const diffScroll = position - previousPosition
    const direction = diffScroll > 0
      ? 'down'
      : 'up'

    console.log(`Scroll ${direction} to ${position}`)
  }

  render() {
    return (
      <div
        style={{
          height: '200px',
          width: '300px',
          WebkitOverflowScrolling: 'touch'
        }}>
        <InfiniteScroll
          onReachBottom={this.handleScrollDown}
          onReachTop={this.handleScrollUp}
          onScroll={this.handleOnScroll}
          position={50}>
          {this.state.items}
        </InfiniteScroll>
      </div>
    )
  }
}
