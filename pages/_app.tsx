// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Название вашего сайта</title>
    </Head>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <footer>
        {/* Добавьте футер, если необходимо */}
      </footer>
    </Provider></>
  );
}

export default MyApp;
