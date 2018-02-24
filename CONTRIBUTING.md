## Prerequisites

[Node.js](http://nodejs.org/) >= v8 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

- `npm run storybook` will run storybook stories at [http://localhost:9001](http://localhost:9001).

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## Storybook Publishing

- `npm run storybook:build` followed by `npm run storybook:publish`
