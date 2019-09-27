import ReactDOM from 'react-dom/server';
import { Helmet } from 'react-helmet';

const AMP_ELEMENTS = [
  'amp-auto-ads',
  'amp-analytics',
  'amp-bind',
  'amp-carousel',
  'amp-install-serviceworker',
  'amp-lightbox',
  'amp-list',
  'amp-selector',
  'amp-sidebar',
  'amp-social-share',
  'amp-video'
];

export default function renderToStaticMarkup(component, css) {
  const markup = ReactDOM.renderToStaticMarkup(component);
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html ⚡ lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1">
      ${helmet.meta.toString()}
      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com/" crossorigin>
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-mustache-0.2.js">
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
      ${AMP_ELEMENTS.map(
        e =>
          `<script async custom-element=${e} src="https://cdn.ampproject.org/v0/${e}-0.1.js"></script>`
      ).join('')}

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <style amp-custom>${css}</style>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
      <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=WGolPNQxrP">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=WGolPNQxrP">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=WGolPNQxrP">
      <link rel="manifest" href="/manifest.json?v=WGolPNQxrP" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=WGolPNQxrP"color="#ff5722">
      <link rel="shortcut icon" href="/favicon.ico?v=WGolPNQxrP">
      <meta name="msapplication-TileColor" content="#ff5722">
      <meta name="theme-color" content="#ffffff">
      <meta name="yandex-verification" content="ef162f38c1785f09">
      <meta name="msvalidate.01" content="46FD65CE03A3B7B558155F7B6832C816">

      ${helmet.link.toString()}
      ${helmet.script.toString()}
      ${helmet.title.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      ${markup}
    </body>
    </html>
  `;
}
