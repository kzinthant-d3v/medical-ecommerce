import { Component, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../utils/globalStyle';
import { theme } from '../../utils/theme';
import Head from 'next/head';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="A recipe discovery app powered by Next.js."
    />
    <meta name="author" content="kyawzinthant" />
    <meta name="keyword" content="myanmar, medicine, shop, popular" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="https://myanmarmedical.com" />
    <meta property="og:image" content="/logo.svg" />
    <meta
      property="og:description"
      content="A recipe discovery app powered by Next.js."
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </Head>
);


export class MainLayout extends Component {
  render() {

    return (
      <ThemeProvider theme={theme}>

        <GlobalStyle />
      
      </ThemeProvider>
    );
  }
}