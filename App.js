import AppNavigation from "./AppNavigation";
import { FIREBASE_AUTH } from './FirebaseConfig';
import React,{ useState } from "react";
import { User,onAuthStateChanged } from "firebase/auth";
import { ToastProvider } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
   return (
    <ToastProvider offsetTop={30}>
      <AppNavigation />
    </ToastProvider>
  )
}
