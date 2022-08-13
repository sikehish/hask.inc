import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrEVWvffRjnzQhqBf-_gMuN5Wm_9FGmZQ",
    authDomain: "haskinc-ed9a3.firebaseapp.com",
    projectId: "haskinc-ed9a3",
    storageBucket: "haskinc-ed9a3.appspot.com",
    messagingSenderId: "762408067497",
    appId: "1:762408067497:web:e63bfbe48eec789c4164b8"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const auth= firebaseApp.auth(); //Gives us authentication instance
  export default firebaseApp