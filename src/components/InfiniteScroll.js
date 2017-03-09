import React, { PropTypes } from 'react';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const {
            firstChild,
            lastChild,
            scrollTop,
            scrollLeft,
            offsetTop,
            offsetLeft,
            offsetHeight,
            offsetWidth,
        } = this.refs.scroller;

        const top = firstChild.offsetTop;
        const left = firstChild.offsetLeft;
        const bottom = lastChild.offsetTop + lastChild.offsetHeight;
        const right = lastChild.offsetLeft + lastChild.offsetWidth;
        const scrolledUp = scrollTop + offsetTop;
        const scrolledLeft = scrollLeft + offsetLeft;
        const scrolledDown = scrolledUp + offsetHeight;
        const scrolledRight = scrolledLeft + offsetWidth;

        if (this.props.horizontal) {
            if (scrolledRight >= right) {
                this.props.onReachRight();
            } else if (scrolledLeft <= left) {
                this.props.onReachLeft();
            }
        } else {
            if (scrolledDown >= bottom) {
                this.props.onReachBottom();
            } else if (scrolledUp <= top) {
                this.props.onReachTop();
            }
        }
    }

    render() {
        const whiteSpace = this.props.horizontal
            ? 'nowrap'
            : 'normal';

        return (
            <div
                ref="scroller"
                style={{
                    overflow: 'auto',
                    height: '100%',
                    width: '100%',
                    whiteSpace,
                }}
                onScroll={this.handleScroll}
            >
                {this.props.children}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.node.isRequired,
    horizontal: PropTypes.bool,
    onReachBottom: PropTypes.func,
    onReachTop: PropTypes.func,
    onReachLeft: PropTypes.func,
    onReachRight: PropTypes.func,
};

InfiniteScroll.defaultProps = {
    onReachBottom: f => f,
    onReachTop: f => f,
    onReachLeft: f => f,
    onReachRight: f => f,
};

export default InfiniteScroll;
