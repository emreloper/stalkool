import React from 'react';
import { Helmet } from 'react-helmet';

import Space from '../../common/space/Space';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Search from '../search/Search';

import '../../common/base.css';

export default function Skeletion({ children }) {
  return (
    <>
      <Helmet titleTemplate="%s | stalkool" />
      <amp-install-serviceworker
        src="/sw.js"
        data-iframe-src="/install-sw.html"
        layout="nodisplay"
      />
      <amp-auto-ads type="adsense" data-ad-client="ca-pub-3304278347247174" />
      <amp-analytics type="gtag" data-credentials="include">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              vars: {
                gtag_id: 'UA-61484760-5',
                config: {
                  'UA-61484760-5': { groups: 'default' }
                }
              }
            })
          }}
        />
      </amp-analytics>
      <Header />
      {children}
      <Space height={4} />
      <Footer />
      <Search />
      <Sidebar />
    </>
  );
}
