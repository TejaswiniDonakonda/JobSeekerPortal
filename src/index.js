import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyStore from './store';
import { Provider } from 'react-redux';
import Allcustomer from './Customerlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
if(localStorage.getItem("adminid")==null){
  root.render(
    <Provider store={MyStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );

}else{
  root.render(
   
      <React.StrictMode>
        <Allcustomer />
      </React.StrictMode>
  );

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
