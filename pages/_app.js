import React from 'react';
import NextApp, { Container } from 'next/app';
import css from 'styled-jsx/css';
import Page from '../components/Page';
import { fontFamilies, fontWeights, fontSizes, colors } from '../lib/styling';

const styles = css.global`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
  body {
    font-family: ${fontFamilies.normal};
    font-weight: ${fontWeights.normal};
    font-size: ${fontSizes.a4}px;
    color: ${colors.text};
  }
`;

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx>{styles}</style>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default App;