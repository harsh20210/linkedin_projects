// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-IiISU2RIbh170rWVNgbeot5vUI-SIC4",
    authDomain: "linkedin-99a91.firebaseapp.com",
    projectId: "linkedin-99a91",
    storageBucket: "linkedin-99a91.appspot.com",
    messagingSenderId: "843312093234",
    appId: "1:843312093234:web:05d16d1d2135b390b8442b",
    measurementId: "G-TVMX5V8E86"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.filestore();
  const auth = firebase.auth();

export {db , auth };
//harsh