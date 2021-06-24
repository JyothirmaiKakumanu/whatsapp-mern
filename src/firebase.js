import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD5itHz--yvlCkgcJrvyN4YCPjpI673lf0",
  authDomain: "whatsapp-mern-2315a.firebaseapp.com",
  projectId: "whatsapp-mern-2315a",
  storageBucket: "whatsapp-mern-2315a.appspot.com",
  messagingSenderId: "354008586283",
  appId: "1:354008586283:web:e3ebdf901fd54e841eb26e"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };