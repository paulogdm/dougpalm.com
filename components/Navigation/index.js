import React from 'react';
import Router from 'next/router';
import showdown from 'showdown';
import content from '../../content/navigation.md';
import { pagesMatch, blogMatch } from '../../lib/routing';
import styles from './styles';

const converter = new showdown.Converter();

const Navigation = () => (
  <div className="root">
    <style jsx>{styles}</style>
    <div className="inner">
      <img src="/static/img/P9030648.jpg" alt="header" />
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
        className="content"
        onClick={e => {
          e.preventDefault();
          const asUrl = e.target.getAttribute('href');

          if (!asUrl) {
            return;
          }

          const pagesParams = pagesMatch(asUrl);
          const blogParams = blogMatch(asUrl);
          let url = asUrl;

          if (pagesParams) {
            url = { pathname: '/pages', query: pagesParams };
          } else if (blogParams) {
            url = { pathname: '/blog', query: blogParams };
          }

          Router.push(url, asUrl);
        }}
      />
    </div>
  </div>
);

export default Navigation;
