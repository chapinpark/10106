import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { ClassInfoProvider } from './context/ClassInfoContext';
import { QuestionsProvider } from './context/QuestionsContext';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Assuming your root div has an ID of 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassInfoProvider>
    <AuthProvider>
      
      <QuestionsProvider> 
      <App />
        </QuestionsProvider>
        
      </AuthProvider>
      </ClassInfoProvider>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
