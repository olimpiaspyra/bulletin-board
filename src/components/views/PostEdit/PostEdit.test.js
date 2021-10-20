/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import { PostEditComponent } from './PostEdit';

describe('Component PostEdit', () => {
  it('should render without crashing', () => {
    const testPost = {
      id: 'test',
      title: 'test',
    };
    const component = shallow(<PostEditComponent post={testPost}/>);
    expect(component).toBeTruthy();
  });
});
