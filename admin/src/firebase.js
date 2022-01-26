import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhdgP9nrYwrWnZmxAr3V84u8ObuoSm67M",
  authDomain: "netflixclone-b17e0.firebaseapp.com",
  projectId: "netflixclone-b17e0",
  storageBucket: "netflixclone-b17e0.appspot.com",
  messagingSenderId: "522823666257",
  appId: "1:522823666257:web:e6a1461ee88c17ff634670",
  measurementId: "G-XZJ98BN622",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
