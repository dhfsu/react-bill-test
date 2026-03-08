import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const total = sum(1,3)
console.log(total);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    // 严格模式有时候会造成钩子模式执行两次，会造成有疑惑的点
  // </React.StrictMode>

  <RouterProvider router={router}></RouterProvider>
);