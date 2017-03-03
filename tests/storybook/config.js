import { configure } from '@kadira/storybook';

function loadStories() {
	/* eslint-disable global-require */
    require('./stories/InfiniteScroll.js');
    /* eslint-enable global-require */
}

configure(loadStories, module);
