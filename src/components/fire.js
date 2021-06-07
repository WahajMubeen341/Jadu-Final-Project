import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-8s2TfStRlHE723ElO-e6XXsjn6eug_g",
    authDomain: "login-a9da2.firebaseapp.com",
    projectId: "login-a9da2",
    storageBucket: "login-a9da2.appspot.com",
    messagingSenderId: "255169736196",
    appId: "1:255169736196:web:45a6d08163337bbb3bcf51"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;