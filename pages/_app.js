import '../styles/bulma.sass';
import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return <Auth0Provider
      domain={'dev-v2a3ktd2.us.auth0.com'}
      clientId={'qDO8EK6R309WmQZ5FCEmjP4GAsiNAvsN'}
      redirectUri={'http://localhost:3000/'}>
    <Component {...pageProps} />
  </Auth0Provider>
}

export default MyApp
