import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@ncdai/react-wheel-picker/style.css';

import App from './components/App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.ts';
// import { store, persistor } from './redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
