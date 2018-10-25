
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBYR7dUKLdxNEetewvv0Z5PFmlY4jx2vao",
    authDomain: "nattyplan-2b3a2.firebaseapp.com",
    databaseURL: "https://nattyplan-2b3a2.firebaseio.com",
    projectId: "nattyplan-2b3a2",
    storageBucket: "nattyplan-2b3a2.appspot.com",
    messagingSenderId: "785310379575"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;
