import React, { PropTypes } from 'react';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
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
    position: PropTypes.number,
};

InfiniteScroll.defaultProps = {
    onReachBottom: f => f,
    onReachTop: f => f,
    onReachLeft: f => f,
    onReachRight: f => f,
    onScroll: f => f,
    position: 0,
};

export default InfiniteScroll;
