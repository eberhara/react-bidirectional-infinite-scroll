import React from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.lastScrollTop = 0
        this.lastScrollLeft = 0
    }

    componentDidMount() {
        const {
            position,
        } = this.props;

        if (!!position) {
            this.setScrollPosition();
        }
    }

    componentDidUpdate(prevProps) {
        const {
            position,
        } = this.props;

        if (!!position && position !== prevProps.position) {
            this.setScrollPosition();
        }
    }

    setScrollPosition() {
        const {
            position,
            horizontal,
        } = this.props;

        if (horizontal) {
            this.refs.scroller.scrollLeft = position;
        } else {
            this.refs.scroller.scrollTop = position;
        }
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

        const {
            horizontal,
            onScroll,
            onScrollUp,
            onScrollDown,
            onScrollLeft,
            onScrollRight,
            onReachRight,
            onReachLeft,
            onReachTop,
            onReachBottom,
        } = this.props;

        const top = firstChild.offsetTop;
        const left = firstChild.offsetLeft;
        const bottom = lastChild.offsetTop + lastChild.offsetHeight;
        const right = lastChild.offsetLeft + lastChild.offsetWidth;
        const scrolledUp = scrollTop + offsetTop;
        const scrolledLeft = scrollLeft + offsetLeft;
        const scrolledDown = scrolledUp + offsetHeight;
        const scrolledRight = scrolledLeft + offsetWidth;
        let scrolledTo = 0;

        if (horizontal) {
            if (scrolledRight >= right) {
                onReachRight();
            } else if (scrolledLeft <= left) {
                onReachLeft();
            }
            scrolledTo = scrollLeft;
        } else {
            if (scrolledDown >= bottom) {
                onReachBottom();
            } else if (scrolledUp <= top) {
                onReachTop();
            }
            scrolledTo = scrollTop;
        }

        if (scrollTop < this.lastScrollTop) {
            onScrollUp(scrollTop)
        } else if (scrollTop > this.lastScrollTop) {
            onScrollDown(scrollTop)
        }

        if (scrollLeft < this.lastScrollLeft) {
            onScrollLeft(scrollLeft)
        } else if (scrollLeft > this.lastScrollLeft) {
            onScrollRight(scrollLeft)
        }

        this.lastScrollTop = scrollTop
        this.lastScrollLeft = scrollLeft

        onScroll(scrolledTo);
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
                    height: 'inherit',
                    width: 'inherit',
                    WebkitOverflowScrolling: 'inherit',
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
    onScroll: PropTypes.func,
    onScrollUp: PropTypes.func,
    onScrollDown: PropTypes.func,
    onScrollLeft: PropTypes.func,
    onScrollRight: PropTypes.func,
    position: PropTypes.number,
};

InfiniteScroll.defaultProps = {
    onReachBottom: f => f,
    onReachTop: f => f,
    onReachLeft: f => f,
    onReachRight: f => f,
    onScroll: f => f,
    onScrollUp: f => f,
    onScrollDown: f => f,
    onScrollLeft: f => f,
    onScrollRight: f => f,
    position: 0,
};

export default InfiniteScroll;
