import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBSTnK_tdZpE1A5fLWGvm3kbgZG9TmbGWY",
    authDomain: "crwn-clothingdb-48555.firebaseapp.com",
    databaseURL: "https://crwn-clothingdb-48555.firebaseio.com",
    projectId: "crwn-clothingdb-48555",
    storageBucket: "crwn-clothingdb-48555.appspot.com",
    messagingSenderId: "246315700084",
    appId: "1:246315700084:web:9d5ce3ccd223c944c56621",
    measurementId: "G-0REV1HXFD5"
  }

  firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;