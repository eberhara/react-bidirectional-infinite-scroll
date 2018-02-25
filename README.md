# react-bidirectional-infinite-scroll

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

**Bidirectional infinite scroll written using react**

[build-badge]: https://img.shields.io/travis/eberhara/react-bidirectional-infinite-scroll/master.png?style=flat-square
[build]: https://travis-ci.org/eberhara/react-bidirectional-infinite-scroll

[npm-badge]: https://img.shields.io/npm/v/react-bidirectional-infinite-scroll.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-bidirectional-infinite-scroll

[coveralls-badge]: https://img.shields.io/coveralls/eberhara/react-bidirectional-infinite-scroll/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/eberhara/react-bidirectional-infinite-scroll

This is a react library that handles infinite scrolling in two directions at the same time: UP/DOWN or LEFT/RIGHT.

See it working at [eberhara.github.io/react-bidirectional-infinite-scroll/](https://eberhara.github.io/react-bidirectional-infinite-scroll/).


## Installation

```bash
npm i --save react-bidirectional-infinite-scroll
```

## Usage

```jsx
import InfiniteScroll from 'react-bidirectional-infinite-scroll'

...

render() {
  return (
    // Vertical infinite scroll
    <InfiniteScroll onReachBottom={f => f} onReachTop={f => f} >
      // ... here goes your infinite list
    </InfiniteScroll>

    // Horizontal infinite scroll
    <InfiniteScroll onReachLeft={f => f} onReachRight={f => f} horizontal>
      // ... here goes your infinite list
    </InfiniteScroll>
  )
}
```


## More examples

```jsx
import InfiniteScroll from 'react-bidirectional-infinite-scroll'

...

handleHorizontalScroll = (position, previousPosition) => {
  const diffScroll = position - previousPosition
  const direction = diffScroll > 0
    ? 'right'
    : 'left'

  console.log(`Scroll ${direction} to ${position}`)
}

handleVerticalScroll = (position, previousPosition) => {
  const diffScroll = position - previousPosition
  const direction = diffScroll > 0
    ? 'down'
    : 'up'

  console.log(`Scroll ${direction} to ${position}`)
}

render() {
  return (
    // Vertical scroll verifying scroll direction
    <InfiniteScroll onScroll={this.handleVerticalScroll}>
      // ... here goes your infinite list
    </InfiniteScroll>

    // Horizontal scroll verifying scroll direction
    <InfiniteScroll onScroll={this.handleHorizontalScroll} horizontal>
      // ... here goes your infinite list
    </InfiniteScroll>

    // Scroll overwriting scroll position (px)
    <InfiniteScroll position={100}>
      // ... here goes your infinite list
    </InfiniteScroll>
  )
}
```

Take a look at [examples folder](./demo/src/examples) for a complete example.

## Contributing

Check [CONTRIBUTING](./CONTRIBUTING.md) for guidance.

## License

MIT License

Copyright (c) 2017 Andre Eberhardt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
