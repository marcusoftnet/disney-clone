import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyByMNndN0pmrWvHn1M6svlQvNi8kBIORNs',
  authDomain: 'disneyplus-clone-bf6e0.firebaseapp.com',
  projectId: 'disneyplus-clone-bf6e0',
  storageBucket: 'disneyplus-clone-bf6e0.appspot.com',
  messagingSenderId: '1089427302458',
  appId: '1:1089427302458:web:dbe569b4268c210b032d03',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
