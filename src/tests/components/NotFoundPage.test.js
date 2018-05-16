import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test("should NotFoundPage render correctly.", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NotFoundPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});