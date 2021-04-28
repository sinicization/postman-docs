import React from 'react';
import renderer from 'react-test-renderer';
import ContextualLinks from './ContextualLinks';

describe('ContextualLinks', () => {
  it('renders correctly', () => {
    const testLinks = [
      {
        type: 'section',
        name: '先决条件',
      },
      {
        type: 'link',
        name: '下载并安装',
        url: 'https://www.postman.com/downloads/',
      },
      {
        type: 'subtitle',
        name: '相关博客文章',

      },
      {
        type: 'link',
        name: 'home',
        url: '/',
      },
    ];

    const tree = renderer
      .create(<ContextualLinks links={testLinks} />)
      .toJSON();
    expect(tree.children[0].props.className).toBe('contextual-links__section');
    expect(tree.children[1].props.className).toBe('contextual-links__link');
    expect(tree).toMatchSnapshot();
  });
});
