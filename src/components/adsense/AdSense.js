import React from 'react';
import { Helmet } from 'react-helmet';

export default function AdSense() {
  return (
    <Helmet>
      <script
        async=""
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-3304278347247174",
            enable_page_level_ads: true
          });`}
      </script>
    </Helmet>
  );
}
