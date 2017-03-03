import React, { PropTypes } from 'react';

class InfiniteScroll extends React.Component {
    componentDidMount() {
        console.log('Work in progress');
    }

    render() {
        return (
            <div>
                Work in progress
            </div>
        );
    }
}

InfiniteScroll.defaultProps = {
    foo: 'bar',
};

InfiniteScroll.propTypes = {
    foo: PropTypes.string,
};

export default InfiniteScroll;
