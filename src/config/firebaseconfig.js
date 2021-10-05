import firebase from "firebase"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDOp-5-umCFl3tGpz7fv_VaVB0EG_W8yqY",
    authDomain: "task-f5698.firebaseapp.com",
    projectId: "task-f5698",
    storageBucket: "task-f5698.appspot.com",
    messagingSenderId: "360270569535",
    appId: "1:360270569535:web:b3149bbdffb9d029e5588a"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
 const database = firebase.firestore()
 export default database