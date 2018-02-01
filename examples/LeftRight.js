import React from 'react';
import InfiniteScroll from '../src'

export default class LeftRightExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.getItems = this.getItems.bind(this);
        this.handleScrollLeft = this.handleScrollLeft.bind(this);
        this.handleScrollRight = this.handleScrollRight.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.handleOnScrollLeft = this.handleOnScrollLeft.bind(this);
        this.handleOnScrollRight = this.handleOnScrollRight.bind(this);
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
                    width: '300px',
                    height: '160px',
                    padding: '10px',
                    marginRight: '10px',
                    display: 'inline-block',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                    background: `rgba(${red}, ${green}, ${blue}, 1)`,
                }}
            >
                Example {+new Date()}
            </div>
        );
    }

    handleScrollLeft() {
        setTimeout(() => {
            this.setState({
                items: [].concat(this.getItems()).concat(this.state.items),
            });
        }, 500);
    }

    handleScrollRight() {
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(this.getItems()),
            });
        }, 500);
    }

    handleOnScroll(position) {
        // console.log('Scroll to ', position);
    }

    handleOnScrollLeft(position) {
        console.log('Scroll left to ', position);
    }

    handleOnScrollRight(position) {
        console.log('Scroll right to ', position);
    }

    render() {
        return (
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                <InfiniteScroll
                    onReachLeft={this.handleScrollLeft}
                    onReachRight={this.handleScrollRight}
                    onScroll={this.handleOnScroll}
                    onScrollLeft={this.handleOnScrollLeft}
                    onScrollRight={this.handleOnScrollRight}
                    position={10}
                    horizontal
                >
                    {this.state.items}
                </InfiniteScroll>
            </div>
        );
    }
}
