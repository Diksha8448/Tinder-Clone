import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDmwcRquJek5kWwMgMEfo9L-rZkLBHNx44",
    authDomain: "tinder-clone-8fdd7.firebaseapp.com",
    databaseURL: "https://tinder-clone-8fdd7.firebaseio.com",
    projectId: "tinder-clone-8fdd7",
    storageBucket: "tinder-clone-8fdd7.appspot.com",
    messagingSenderId: "334261082788",
    appId: "1:334261082788:web:6d3d5e6eb96d0a020ee431",
    measurementId: "G-HN8JPHNNKB"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;