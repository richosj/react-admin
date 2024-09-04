import { AppProps } from 'next/app'; // AppProps import 추가
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import dynamic from 'next/dynamic';

// `dynamic`을 사용해 `BrowserRouter`를 클라이언트 사이드에서만 로드합니다.
const BrowserRouter = dynamic(
  () => import('react-router-dom').then(mod => mod.BrowserRouter),
  { ssr: false } // 서버 사이드 렌더링에서 제외합니다.
);

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    </Provider>
  );
}

export default MyApp;
