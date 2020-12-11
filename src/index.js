import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n.js';
import axios from 'axios'
import Lang from './lang.js'

axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'en';
ReactDOM.render(
  <React.StrictMode>
     <Suspense fallback={(<div>Loading</div>)}>
        <App />
        {/* <Lang></Lang> */}
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import './i18n';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Suspense fallback={(<div>Loading</div>)}>
//         <App />
//     </Suspense>
//     , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

