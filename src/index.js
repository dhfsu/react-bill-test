import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
import './theme.css'
const total = sum(1,3)
console.log(total);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    // 严格模式有时候会造成钩子模式执行两次，会造成有疑惑的点
  // </React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);