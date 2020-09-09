import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-24llecLn2JfdDfWGbenD138pVhK6buQ",
    authDomain: "chatapp-cf2dc.firebaseapp.com",
    databaseURL: "https://chatapp-cf2dc.firebaseio.com",
    projectId: "chatapp-cf2dc",
    storageBucket: "chatapp-cf2dc.appspot.com",
    messagingSenderId: "518046426990",
    appId: "1:518046426990:web:05d244c27eea1016ab437f",
    measurementId: "G-99FLWT64P5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db