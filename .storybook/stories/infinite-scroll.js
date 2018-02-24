import React from 'react'
import { storiesOf } from '@storybook/react'
import Vertical from '../../demo/src/examples/vertical'
import Horizontal from '../../demo/src/examples/horizontal'

storiesOf(' > InfiniteScroll', module)
    .add('Vertical', () => <Vertical />)
    .add('Horizontal', () => <Horizontal />)
