import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";
import { Authenticator } from "@aws-amplify/ui-react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Amplify } from 'aws-amplify'; // Correct import statement
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Authenticator>

      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <App />
      </GoogleOAuthProvider>
    </Authenticator>
  </Provider>
);

reportWebVitals();
