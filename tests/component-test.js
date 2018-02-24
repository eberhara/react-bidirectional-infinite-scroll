import React from 'react'
import { expect } from 'chai'

import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import InfiniteScroll from '../src'

describe('<InfiniteScroll />', () => {
  before(() => {
    configure({ adapter: new Adapter() })
  })

  it('should render with no props', () => {
    const wrapper = mount(<InfiniteScroll>foo</InfiniteScroll>)
    expect(wrapper.prop('onReachTop')(true)).to.equal(true)
    expect(wrapper.prop('onReachBottom')(true)).to.equal(true)
    expect(wrapper.prop('onReachLeft')(true)).to.equal(true)
    expect(wrapper.prop('onReachRight')(true)).to.equal(true)
    expect(wrapper.prop('onScroll')(true)).to.equal(true)
    expect(wrapper.text()).to.equal('foo')
    expect(wrapper.instance().prevScroll).to.equal(0)
  })

  it('should set scroller ref', () => {
    const wrapper = mount(<InfiniteScroll>foo</InfiniteScroll>)
    wrapper.instance().handleScrollerRef('my-ref')
    expect(wrapper.instance().scroller).to.equal('my-ref')
  })

  describe('when scroll is vertical', () => {
    it('should render scroll with specified position', () => {
      const wrapper = mount(<InfiniteScroll position={100}>foo</InfiniteScroll>)
      expect(wrapper.instance().prevScroll).to.equal(100)
    })

    it('should update specified position based on prop update', () => {
      const wrapper = mount(<InfiniteScroll position={100}>foo</InfiniteScroll>)
      wrapper.setProps({ position: 50 })
      expect(wrapper.instance().prevScroll).to.equal(50)
    })

    describe('when bottom is reached', () => {
      it('should call onReachBottom callback', () => {
        const onReachBottom = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachBottom={onReachBottom}>foo</InfiniteScroll>)
        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 100,
            offsetHeight: 100,
            offsetLeft: 0,
            offsetWidth: 100
          },
          scrollTop: 100,
          offsetTop: 0,
          scrollLeft: 0,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }

        wrapper.instance().handleScroll()
        expect(onReachBottom.calledOnce).to.equal(true)
      })
    })

    describe('when top is reached', () => {
      it('should call onReachTop callback', () => {
        const onReachTop = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachTop={onReachTop}>foo</InfiniteScroll>)
        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 100,
            offsetHeight: 100,
            offsetLeft: 0,
            offsetWidth: 100
          },
          scrollTop: 0,
          offsetTop: 0,
          scrollLeft: 0,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }

        wrapper.instance().handleScroll()
        expect(onReachTop.calledOnce).to.equal(true)
      })
    })

    describe('when neither top or bottom are reached', () => {
      it('should not call onReachTop nor onReachBottom callbacks', () => {
        const onReachTop = sinon.stub()
        const onReachBottom = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachTop={onReachTop} onReachBottom={onReachBottom}>foo</InfiniteScroll>)
        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 100,
            offsetHeight: 100,
            offsetLeft: 0,
            offsetWidth: 100
          },
          scrollTop: 10,
          offsetTop: 0,
          scrollLeft: 0,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }

        wrapper.instance().handleScroll()
        expect(onReachTop.calledOnce).to.equal(false)
        expect(onReachBottom.calledOnce).to.equal(false)
      })
    })
  })

  describe('when scroll is horizontal', () => {
    it('should render horizontal scroll with specified position', () => {
      const wrapper = mount(<InfiniteScroll horizontal position={100}>foo</InfiniteScroll>)
      expect(wrapper.instance().prevScroll).to.equal(100)
    })

    it('should update specified position based on prop update', () => {
      const wrapper = mount(<InfiniteScroll horizontal position={100}>foo</InfiniteScroll>)
      wrapper.setProps({ position: 50 })
      expect(wrapper.instance().prevScroll).to.equal(50)
    })

    describe('when left is reached', () => {
      it('should call onReachLeft callback', () => {
        const onReachLeft = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachLeft={onReachLeft} horizontal>foo</InfiniteScroll>)

        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 0,
            offsetHeight: 100,
            offsetLeft: 100,
            offsetWidth: 100
          },
          scrollTop: 0,
          offsetTop: 0,
          scrollLeft: 0,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }

        wrapper.instance().handleScroll()
        expect(onReachLeft.calledOnce).to.equal(true)
      })
    })

    describe('when right is reached', () => {
      it('should call onReachRight callback', () => {
        const onReachRight = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachRight={onReachRight} horizontal>foo</InfiniteScroll>)

        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 0,
            offsetHeight: 100,
            offsetLeft: 100,
            offsetWidth: 100
          },
          scrollTop: 0,
          offsetTop: 0,
          scrollLeft: 100,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }
        wrapper.instance().handleScroll()
        expect(onReachRight.calledOnce).to.equal(true)
      })
    })

    describe('when neither left or right are reached', () => {
      it('should not call onReachLeft nor onReachRight callbacks', () => {
        const onReachLeft = sinon.stub()
        const onReachRight = sinon.stub()
        const wrapper = shallow(<InfiniteScroll onReachLeft={onReachLeft} onReachRight={onReachRight}horizontal>foo</InfiniteScroll>)

        wrapper.instance().scroller = {
          firstChild: {
            offsetTop: 0,
            offsetLeft: 0
          },
          lastChild: {
            offsetTop: 0,
            offsetHeight: 100,
            offsetLeft: 100,
            offsetWidth: 100
          },
          scrollTop: 0,
          offsetTop: 0,
          scrollLeft: 10,
          offsetLeft: 0,
          offsetHeight: 100,
          offsetWidth: 100
        }

        wrapper.instance().handleScroll()
        expect(onReachLeft.calledOnce).to.equal(false)
        expect(onReachRight.calledOnce).to.equal(false)
      })
    })
  })
})
