// pages/_app.js
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from "../store/store";

export default function App({ Components, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Components {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
