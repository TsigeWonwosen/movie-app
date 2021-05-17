import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import { GlobalStyles } from './global-styles';
import App from './App';
import { MovieProvider } from './context/ContextProvider';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <AuthProvider>
        <GlobalStyles />
        <App />
      </AuthProvider>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
