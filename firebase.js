
import * as firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7v7x3DA0Ta_0uJoyZPvxDC8I9M_q1KRE",
  authDomain: "fir-febcf.firebaseapp.com",
  databaseURL: "https://fir-febcf-default-rtdb.firebaseio.com",
  projectId: "fir-febcf",
  storageBucket: "fir-febcf.appspot.com",
  messagingSenderId: "237698601850",
  appId: "1:237698601850:web:71a64e914c5e4a96563cc3",
  measurementId: "G-GFX830BBLZ"
};
export const Firebase = firebase.default.initializeApp(firebaseConfig);
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };