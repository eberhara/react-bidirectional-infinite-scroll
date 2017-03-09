/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import InfiniteScroll from '../../src';

describe('<InfiniteScroll />', () => {
    it('should render with no props', () => {
        const wrapper = shallow(<InfiniteScroll>foo</InfiniteScroll>);
        expect(wrapper.text()).to.equal('foo');
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
});
