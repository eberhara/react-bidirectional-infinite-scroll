import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UpDown from '../../examples/UpDown';
import LeftRight from '../../examples/LeftRight';

storiesOf(' > InfiniteScroll', module)
    .add('Up / Down', () => <UpDown />)
    .add('Left / Right', () => <LeftRight />);
