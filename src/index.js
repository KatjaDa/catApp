import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// to start dev server, use npm start
reportWebVitals();
