import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InfiniteScroll from '../../../src';

storiesOf(' > InfiniteScroll', module)
    .add('test', () => (
        <InfiniteScroll />
    ));
