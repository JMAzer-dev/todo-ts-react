import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
);
