import React from 'react';
import './App.css';
import AppRouter from './router';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerkPubKey = 'pk_test_Zml0dGluZy1sYWItNTUuY2xlcmsuYWNjb3VudHMuZGV2JA';


function App() {
  return (
   
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
      <AppRouter />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>

  );
}

export default App;
