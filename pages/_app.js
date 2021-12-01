import React from 'react';
import "node_modules/bootstrap/scss/bootstrap.scss";
import "components/theme/core.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
