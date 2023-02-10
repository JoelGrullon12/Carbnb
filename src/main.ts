import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwYAw3MpvMbIrPwc7pZW0sutOQWUUnfA",
  authDomain: "carbnb-41855.firebaseapp.com",
  projectId: "carbnb-41855",
  storageBucket: "carbnb-41855.appspot.com",
  messagingSenderId: "932335255704",
  appId: "1:932335255704:web:4dd00b7468b63a74f790ed",
  measurementId: "G-0751B1J8VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
