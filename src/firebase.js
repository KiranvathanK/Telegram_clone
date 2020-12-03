import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGrWcSPg7osGr2nt2IF7sBkrQxb2tWrKE",
    authDomain: "telegram-clone-db2f2.firebaseapp.com",
    databaseURL: "https://telegram-clone-db2f2.firebaseio.com",
    projectId: "telegram-clone-db2f2",
    storageBucket: "telegram-clone-db2f2.appspot.com",
    messagingSenderId: "489774937080",
    appId: "1:489774937080:web:a3179b7783b253e42a5c0d",
    measurementId: "G-F6QXCZPBZJ"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db