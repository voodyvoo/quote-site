import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from "./store.js"; // Stelle sicher, dass der Redux-Store importiert wird
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css';


//const element =<h1>blah</h1>;


ReactDOM.render(
    // The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );