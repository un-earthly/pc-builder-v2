import Navbar from '@/components/Navbar'
import store from '@/redux/store';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return <Provider store={store}>
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </SessionProvider>
  </Provider>
}
