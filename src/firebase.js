import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDrEVWvffRjnzQhqBf-_gMuN5Wm_9FGmZQ",
    authDomain: "haskinc-ed9a3.firebaseapp.com",
    projectId: "haskinc-ed9a3",
    storageBucket: "haskinc-ed9a3.appspot.com",
    messagingSenderId: "762408067497",
    appId: "1:762408067497:web:e63bfbe48eec789c4164b8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth= app.auth(); //Gives us authentication instance
  export default app