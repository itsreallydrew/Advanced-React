// custom document layout. is the entire document
import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  // render() method is the same as return (). render is for classes return is for functional hooks
  render() {
    return (
      <Html lang="en-US">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
