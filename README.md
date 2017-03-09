# react-bidirectional-infinite-scroll

[![build status](https://travis-ci.org/eberhara/react-bidirectional-infinite-scroll.svg?branch=master)](https://travis-ci.org/eberhara/react-bidirectional-infinite-scroll)
[![Coverage Status](https://coveralls.io/repos/eberhara/react-bidirectional-infinite-scroll/badge.svg)](https://coveralls.io/r/eberhara/react-bidirectional-infinite-scroll)
[![NPM version](http://img.shields.io/npm/v/react-bidirectional-infinite-scroll.svg)](https://www.npmjs.org/package/react-bidirectional-infinite-scroll)

**Bidirectional infinite scroll written using react**

This is a react library that handles infinite scrolling in two directions at the same time: UP/DOWN or LEFT/RIGHT.

See it working at [eberhara.github.io/react-bidirectional-infinite-scroll](https://eberhara.github.io/react-bidirectional-infinite-scroll).


## Installation

```bash
npm i --save react-bidirectional-infinite-scroll
```

## Usage

```javascript
import InfiniteScroll from 'react-bidirectional-infinite-scroll';

...

render() {
	return (
		/// Vertical infinite scroll
		<InfiniteScroll onReachBottom={f => f} onReachTop={f => f} >
			// ... here goes your infinite list
		</InfiniteScroll>

		/// Horizontal infinite scroll
		<InfiniteScroll onReachLeft={f => f} onReachRight={f => f} horizontal>
        	// ... here goes your infinite list
		</InfiniteScroll>
	);
}
```

Please take a look at [examples folder](./examples) for a more complete example.


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
