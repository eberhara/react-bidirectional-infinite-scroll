import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InfiniteScroll from '../../src';

class InfiniteScrollExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [].concat(this.getItems()),
        };
        this.getItems = this.getItems.bind(this);
        this.handleScrollDown = this.handleScrollDown.bind(this);
        this.handleScrollUp = this.handleScrollUp.bind(this);
    }

    getItems() {
        return (
            <div key={+new Date()}>
                <div style={{ height: '300px' }}>
                    Example {+new Date()}
                </div>
            </div>
        );
    }

    handleScrollDown() {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(this.getItems()),
            });
        }, 500);
    }

    handleScrollUp() {
        setTimeout(() => {
            this.setState({
                items: [].concat(this.getItems()).concat(this.state.items),
            });
        }, 500);
    }

    render() {
        return (
            <div style={{ height: '200px' }}>
                <InfiniteScroll
                    onReachBottom={this.handleScrollDown}
                    onReachTop={this.handleScrollUp}
                >
                    {this.state.items}
                </InfiniteScroll>
            </div>
        );
    }
}

storiesOf(' > InfiniteScroll', module)
    .add('test', () => <InfiniteScrollExample />);
