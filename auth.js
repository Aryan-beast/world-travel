import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  
    // Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDeyiWmXZ9_Bh5ZwbMXAvbo_A903lRK1Eg",
      authDomain: "loginpage-cbe6a.firebaseapp.com",
      projectId: "loginpage-cbe6a",
      storageBucket: "loginpage-cbe6a.appspot.com",
      messagingSenderId: "793341940672",
      appId: "1:793341940672:web:80dfd9a0441f3c321d6e25"
};
  
    // Initialize Firebase
const app=initializeApp(firebaseConfig);

export default function test(){
    return app;
}