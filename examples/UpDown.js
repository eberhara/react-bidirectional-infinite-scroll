import React from 'react';
import InfiniteScroll from './src'

export default class UpDownExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.getItems = this.getItems.bind(this);
        this.handleScrollDown = this.handleScrollDown.bind(this);
        this.handleScrollUp = this.handleScrollUp.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.handleOnScrollUp = this.handleOnScrollUp.bind(this);
        this.handleOnScrollDown = this.handleOnScrollDown.bind(this);
    }

    componentWillMount() {
        this.setState({
            items: [].concat(this.getItems()),
        });
    }

    getItems() {
        const itemsLength = this.state.items.length;
        const frequency = 0.3;
        const red = Math.round(Math.sin(frequency * itemsLength + 0) * 127 + 128);
        const green = Math.round(Math.sin(frequency * itemsLength + 2) * 127 + 128);
        const blue = Math.round(Math.sin(frequency * itemsLength + 4) * 127 + 128);

        return (
            <div
                key={+new Date()}
                style={{
                    height: '300px',
                    padding: '10px',
                    marginBottom: '10px',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                    background: `rgba(${red}, ${green}, ${blue}, 1)`,
                }}
            >
                Example {+new Date()}
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

    handleOnScroll(position) {
        // console.log('Scroll to ', position);
    }

    handleOnScrollUp(position) {
        console.log('Scroll up to ', position);
    }

    handleOnScrollDown(position) {
        console.log('Scroll down to ', position);
    }

    render() {
        return (
            <div style={{ height: '200px', width: '300px' }}>
                <InfiniteScroll
                    onReachBottom={this.handleScrollDown}
                    onReachTop={this.handleScrollUp}
                    onScroll={this.handleOnScroll}
                    onScrollUp={this.handleOnScrollUp}
                    onScrollDown={this.handleOnScrollDown}
                    position={50}
                >
                    {this.state.items}
                </InfiniteScroll>
            </div>
        );
    }
}


