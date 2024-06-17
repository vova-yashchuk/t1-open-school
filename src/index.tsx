import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import "./index.scss";
// import store from './store';
import { Provider } from 'react-redux';
import { store } from './store';

// fetch('https://dummyjson.com/products').then((res) => res.json()).then((res) => console.log(res, 'console from index'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
