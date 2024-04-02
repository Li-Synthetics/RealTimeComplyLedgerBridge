import React from 'react';
// To enable performance reporting during development, uncomment the line below
// reportWebVitals(console.log);

// For a production environment, it's recommended to integrate with an analytics endpoint for detailed insights
// Example:
// reportWebVitals(metric => {
//   const { id, name, value } = metric;
//   fetch('/analytics', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       id,
//       name,
//       value,
//       path: window.location.pathname,
//     }),
//   });
// });

// Removed unused imports and fixed the import error by ensuring
// 'react-router-dom' is correctly installed and path resolved.
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
