/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InfiniteScroll from '../../src';

describe('<InfiniteScroll />', () => {
    it('should render', () => {
        const wrapper = shallow(<InfiniteScroll />);
        expect(wrapper).to.be.ok;
    });
});
