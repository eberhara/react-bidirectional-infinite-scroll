import React from 'react'
import { configure } from '@storybook/react'

function loadStories() {
  require('./stories/infinite-scroll.js')
}

configure(loadStories, module)
