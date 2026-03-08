import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from '@/test';

const total = sum(1,3)
console.log(total);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
    // 严格模式有时候会造成钩子模式执行两次，会造成有疑惑的点
  // </React.StrictMode>
);