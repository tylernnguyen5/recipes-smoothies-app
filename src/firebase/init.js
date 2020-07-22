import firebase from 'firebase' 
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCt1c3-IujWp0xe5jwwB57Xo53Ymv8NwZY",
  authDomain: "ninja-smoothies-1bba1.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-1bba1.firebaseio.com",
  projectId: "ninja-smoothies-1bba1",
  storageBucket: "ninja-smoothies-1bba1.appspot.com",
  messagingSenderId: "135816226644",
  appId: "1:135816226644:web:8d77669149a992dbfc4ac1",
  measurementId: "G-DJBQT6MB5M"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();

