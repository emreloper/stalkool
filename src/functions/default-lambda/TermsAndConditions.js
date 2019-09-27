import React from 'react';

import Skeleton from '../../components/skeleton/Skeleton';
import Space from '../../common/space/Space';
import Typography from '../../common/typography/Typography';
import Page from './Page';

export default function PrivacyPolicy() {
  return (
    <Page
      title="Terms and Conditions"
      description="stalkool terms and conditions."
      canonical="https://www.stalkool.com/terms-and-conditions/"
    >
      <Typography component="h1" variant="h6">
        Terms and Conditions of www.stalkool.com
      </Typography>
      <Space height={4} />
      <Typography variant="body2">
        <p>
          Below are the Terms and Conditions for use of www.stalkool.com. Please
          read these carefully. If you need to contact us regarding any aspect
          of the following terms of use of our website, please contact us on the
          following email address - stalktool@gmail.com.
        </p>
        <p>
          By accessing the content of www.stalkool.com ( hereafter referred to
          as website ) you agree to the terms and conditions set out herein and
          also accept our{' '}
          <a href="https://www.stalkool.com/privacy-policy/">Privacy Policy</a>.
          If you do not agree to any of the terms and conditions you should not
          continue to use the Website and leave immediately.
        </p>
        <p>
          You agree that you shall not use the website for any illegal purposes,
          and that you will respect all applicable laws and regulations.
        </p>
        <p>
          You agree not to use the website in a way that may impair the
          performance, corrupt or manipulate the content or information
          available on the website or reduce the overall functionality of the
          website.
        </p>
        <p>
          You agree not to compromise the security of the website or attempt to
          gain access to secured areas of the website or attempt to access any
          sensitive information you may believe exist on the website or server
          where it is hosted.
        </p>
        <p>
          You agree to be fully responsible for any claim, expense, losses,
          liability, costs including legal fees incurred by us arising from any
          infringement of the terms and conditions in this agreement and to
          which you will have agreed if you continue to use the website.
        </p>
        <p>
          The reproduction, distribution in any method whether online or offline
          is strictly prohibited. The work on the website and the images, logos,
          text and other such information is the property of www.stalkool.com (
          unless otherwise stated ).
        </p>
        <p>
          <b>Disclaimer</b>
        </p>
        <p>
          Though we strive to be completely accurate in the information that is
          presented on our site, and attempt to keep it as up to date as
          possible, in some cases, some of the information you find on the
          website may be slightly outdated.
        </p>
        <p>
          www.stalkool.com reserves the right to make any modifications or
          corrections to the information you find on the website at any time
          without notice.
        </p>
        <p>
          <b>Change to the Terms and Conditions of Use</b>
        </p>
        <p>
          We reserve the right to make changes and to revise the above mentioned
          Terms and Conditions of use.
        </p>
        <p>Last Revised: 25-06-2019</p>
      </Typography>
    </Page>
  );
}
