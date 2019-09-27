import React from 'react';

import Skeleton from '../../components/skeleton/Skeleton';
import Space from '../../common/space/Space';
import Typography from '../../common/typography/Typography';
import Page from './Page';

export default function PrivacyPolicy() {
  return (
    <Page
      title="Privacy Policy"
      description="stalkool privacy policy."
      canonical="https://www.stalkool.com/terms-and-conditions/"
    >
      <Typography component="h1" variant="h6">
        Privacy Policy for www.stalkool.com
      </Typography>
      <Space height={4} />
      <Typography variant="body2">
        <p>
          If you require any more information or have any questions about our
          privacy policy, please feel free to contact us by email at
          stalktool@gmail.com.
        </p>
        <p>
          At www.stalkool.com, the privacy of our visitors is of extreme
          importance to us. This privacy policy document outlines the types of
          personal information is received and collected by www.stalkool.com and
          how it is used.
        </p>
        <p>
          <b>Log Files</b>
          <br /> Like many other Web sites, www.stalkool.com makes use of log
          files. The information inside the log files includes internet protocol
          ( IP ) addresses, type of browser, Internet Service Provider ( ISP ),
          date/time stamp, referring/exit pages, and number of clicks to analyze
          trends, administer the site, track users movement around the site, and
          gather demographic information. IP addresses, and other such
          information are not linked to any information that is personally
          identifiable.
        </p>
        <p>
          <b>Cookies and Web Beacons</b>
          <br /> www.stalkool.com does use cookies to store information about
          visitors preferences, record user-specific information on which pages
          the user access or visit, customize Web page content based on visitors
          browser type or other information that the visitor sends via their
          browser.
        </p>
        <b>DoubleClick DART Cookie</b>
        <br />
        <p>
          .:: Google, as a third party vendor, uses cookies to serve ads on
          www.stalkool.com.
          <br />
          .:: Google's use of the DART cookie enables it to serve ads to your
          users based on their visit to www.stalkool.com and other sites on the
          Internet. <br />
          .:: Users may opt out of the use of the DART cookie by visiting the
          Google ad and content network privacy policy at the following URL -
          http://www.google.com/privacy_ads.html
        </p>
        <p>
          Some of our advertising partners may use cookies and web beacons on
          our site. Our advertising partners include: <br />
          Google Adsense
        </p>
        <p>
          These third-party ad servers or ad networks use technology to the
          advertisements and links that appear on www.stalkool.com send directly
          to your browsers. They automatically receive your IP address when this
          occurs. Other technologies ( such as cookies, JavaScript, or Web
          Beacons ) may also be used by the third-party ad networks to measure
          the effectiveness of their advertisements and / or to personalize the
          advertising content that you see.
        </p>
        <p>
          www.stalkool.com has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>
        <p>
          You should consult the respective privacy policies of these
          third-party ad servers for more detailed information on their
          practices as well as for instructions about how to opt-out of certain
          practices. www.stalkool.com's privacy policy does not apply to, and we
          cannot control the activities of, such other advertisers or web sites.
        </p>
        <p>
          If you wish to disable cookies, you may do so through your individual
          browser options. More detailed information about cookie management
          with specific web browsers can be found at the browsers' respective
          websites.
        </p>
      </Typography>
    </Page>
  );
}
