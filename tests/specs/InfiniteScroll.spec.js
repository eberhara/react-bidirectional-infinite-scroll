/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import InfiniteScroll from '../../src';

describe('<InfiniteScroll />', () => {
    it('should render with no props', () => {
        const wrapper = shallow(<InfiniteScroll>foo</InfiniteScroll>);
        wrapper.instance().props.onReachBottom();
        wrapper.instance().props.onReachTop();
        wrapper.instance().props.onReachRight();
        wrapper.instance().props.onReachLeft();
        wrapper.instance().componentDidMount();
        wrapper.instance().componentDidUpdate({});
        expect(wrapper.text()).to.equal('foo');
    });

    it('should call setScrollPosition on mount and update', () => {
        const wrapper = shallow(
            <InfiniteScroll
                position={50}
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().setScrollPosition = sinon.stub();
        wrapper.instance().componentDidMount();
        wrapper.instance().componentDidUpdate({});
        expect(wrapper.instance().setScrollPosition.calledTwice).to.equal(true);
    });

    it('should render vertical with initial scroll position', () => {
        const wrapper = shallow(
            <InfiniteScroll
                position={50}
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                scrollTop: 0,
            },
        };
        wrapper.instance().setScrollPosition();
        expect(wrapper.instance().refs.scroller.scrollTop).to.equal(50);
    });

    it('should render horizontal with initial scroll position', () => {
        const wrapper = shallow(
            <InfiniteScroll
                horizontal
                position={50}
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                scrollLeft: 0,
            },
        };
        wrapper.instance().setScrollPosition();
        expect(wrapper.instance().refs.scroller.scrollLeft).to.equal(50);
    });

    it('should render a vertical scroll and reach bottom', () => {
        const onReachBottom = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll onReachBottom={onReachBottom}>foo</InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 100,
                    offsetHeight: 100,
                    offsetLeft: 0,
                    offsetWidth: 100,
                },
                scrollTop: 100,
                offsetTop: 0,
                scrollLeft: 0,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachBottom.calledOnce).to.equal(true);
    });

    it('should render a vertical scroll and reach top', () => {
        const onReachTop = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll onReachTop={onReachTop}>foo</InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 100,
                    offsetHeight: 100,
                    offsetLeft: 0,
                    offsetWidth: 100,
                },
                scrollTop: 0,
                offsetTop: 0,
                scrollLeft: 0,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachTop.calledOnce).to.equal(true);
    });

    it('should render a vertical scroll and not callback when top/bottom are not reached', () => {
        const onReachTop = sinon.stub();
        const onReachBottom = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll
                onReachTop={onReachTop}
                onReachBottom={onReachBottom}
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 100,
                    offsetHeight: 100,
                    offsetLeft: 0,
                    offsetWidth: 100,
                },
                scrollTop: 10,
                offsetTop: 0,
                scrollLeft: 0,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachTop.calledOnce).to.equal(false);
        expect(onReachBottom.calledOnce).to.equal(false);
    });

    it('should render a horizontal scroll and reach right', () => {
        const onReachRight = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll onReachRight={onReachRight} horizontal>foo</InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 0,
                    offsetHeight: 100,
                    offsetLeft: 100,
                    offsetWidth: 100,
                },
                scrollTop: 0,
                offsetTop: 0,
                scrollLeft: 100,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachRight.calledOnce).to.equal(true);
    });

    it('should render a horizontal scroll and reach left', () => {
        const onReachLeft = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll onReachLeft={onReachLeft} horizontal>foo</InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 0,
                    offsetHeight: 100,
                    offsetLeft: 100,
                    offsetWidth: 100,
                },
                scrollTop: 0,
                offsetTop: 0,
                scrollLeft: 0,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachLeft.calledOnce).to.equal(true);
    });

    it('should render a horizontal scroll and not callback when left/right are not reached', () => {
        const onReachLeft = sinon.stub();
        const onReachRight = sinon.stub();
        const wrapper = shallow(
            <InfiniteScroll
                onReachLeft={onReachLeft}
                onReachRight={onReachRight}
                horizontal
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 0,
                    offsetHeight: 100,
                    offsetLeft: 100,
                    offsetWidth: 100,
                },
                scrollTop: 0,
                offsetTop: 0,
                scrollLeft: 10,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onReachLeft.calledOnce).to.equal(false);
        expect(onReachRight.calledOnce).to.equal(false);
    });

    it('should render vertical fire onScrollDown', () => {
        const wrapper = shallow(
            <InfiniteScroll
                onScrollDown={onScrollDown}
            >
                foo
            </InfiniteScroll>
        );
        wrapper.instance().refs = {
            scroller: {
                firstChild: {
                    offsetTop: 0,
                    offsetLeft: 0,
                },
                lastChild: {
                    offsetTop: 100,
                    offsetHeight: 100,
                    offsetLeft: 0,
                    offsetWidth: 100,
                },
                scrollTop: 10,
                offsetTop: 0,
                scrollLeft: 10,
                offsetLeft: 0,
                offsetHeight: 100,
                offsetWidth: 100,
            },
        };
        wrapper.instance().handleScroll();
        expect(onScrollDown.calledOnce).to.equal(true);
        // expect(onScrollRight.calledOnce).to.equal(true);
    });
});
