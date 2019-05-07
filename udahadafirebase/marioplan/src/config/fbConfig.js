import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCqiLbyDtIJAsCWRFN0sgLPKRoExM6m77w",
  authDomain: "scbms-fad86.firebaseapp.com",
  databaseURL: "https://scbms-fad86.firebaseio.com",
  projectId: "scbms-fad86",
  storageBucket: "scbms-fad86.appspot.com",
  messagingSenderId: "601767271182",
  appId: "1:601767271182:web:30296725be77d3d9"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export {
  storage, firebase as default
}