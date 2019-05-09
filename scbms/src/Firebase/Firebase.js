import app from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCqiLbyDtIJAsCWRFN0sgLPKRoExM6m77w",
    authDomain: "scbms-fad86.firebaseapp.com",
    databaseURL: "https://scbms-fad86.firebaseio.com",
    projectId: "scbms-fad86",
    storageBucket: "scbms-fad86.appspot.com",
    messagingSenderId: "601767271182",
    appId: "1:601767271182:web:30296725be77d3d9"
};

    class Firebase {
        constructor() {
          app.initializeApp(config);
          this.auth = app.auth();
        }
                    // *** Auth API ***
        //register
        doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
        
        //login
        doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

        //logout
        doSignOut = () => this.auth.signOut();

        //resetpass
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        
        doPasswordUpdate = password =>
          this.auth.currentUser.updatePassword(password);
    }
      


      
export default Firebase;