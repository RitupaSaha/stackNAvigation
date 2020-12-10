import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCODgBpAqcN19tiSM60zRIj3eZNHT9fj7c",
  authDomain: "booksanta-29663.firebaseapp.com",
  databaseURL: "https://booksanta-29663.firebaseio.com",
  projectId: "booksanta-29663",
  storageBucket: "booksanta-29663.appspot.com",
  messagingSenderId: "24346230491",
  appId: "1:24346230491:web:d13769be36c4a4879a16fe"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
