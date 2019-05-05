import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCqiLbyDtIJAsCWRFN0sgLPKRoExM6m77w",
  authDomain: "scbms-fad86.firebaseapp.com",
  databaseURL: "https://scbms-fad86.firebaseio.com",
  projectId: "scbms-fad86",
  storageBucket: "scbms-fad86.appspot.com",
  messagingSenderId: "601767271182",
  appId: "1:601767271182:web:30296725be77d3d9"
};
 // Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshot: true})

export default firebase;