/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

describe('Component Post', () => {
  it('should render without crashing', () => {
    const testPost = {
      id: 'test',
      title: 'test',
    };
    const component = shallow(<PostComponent post={testPost}/>);
    expect(component).toBeTruthy();
  });
});
