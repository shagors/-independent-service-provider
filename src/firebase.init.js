// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBtpdceFN5BkBShACSuQUVTit1JP1IH4Dg",
    authDomain: "spot-light-studio.firebaseapp.com",
    projectId: "spot-light-studio",
    storageBucket: "spot-light-studio.appspot.com",
    messagingSenderId: "173232766328",
    appId: "1:173232766328:web:11e72a205fbc61cdc11c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
