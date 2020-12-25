import "antd/dist/antd.css";
import '../styles/globals.scss';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers';

const store = configureStore({
  reducer: rootReducer
});

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
