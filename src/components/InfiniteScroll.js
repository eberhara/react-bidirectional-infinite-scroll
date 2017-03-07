import React, { PropTypes } from 'react';

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const { firstChild, lastChild, scrollTop, offsetTop, offsetHeight } = this.refs.scroller;
        const top = firstChild.offsetTop;
        const bottom = lastChild.offsetTop + lastChild.offsetHeight;
        const scrollUp = scrollTop + offsetTop;
        const scrollDown = scrollUp + offsetHeight;

        if (scrollDown >= bottom) {
            this.props.onReachBottom();
        } else if (scrollUp <= top) {
            this.props.onReachTop();
        }
    }

    render() {
        return (
            <div
                ref="scroller"
                style={{ overflow: 'auto', height: '100%' }}
                onScroll={this.handleScroll}
            >
                {this.props.children}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.node.isRequired,
    onReachBottom: PropTypes.func,
    onReachTop: PropTypes.func,
};

InfiniteScroll.defaultProps = {
    onReachBottom: f => f,
    onReachTop: f => f,
};

export default InfiniteScroll;
