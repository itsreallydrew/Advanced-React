// importing Page allows all 'pages' to have access to the body
import Page from '../components/Page';

export default function myApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
