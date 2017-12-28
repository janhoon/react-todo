import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBOab7eoMknfIbp556_vz9LQO68s9sCmXA",
    authDomain: "udemy-todo-app-ad9ea.firebaseapp.com",
    databaseURL: "https://udemy-todo-app-ad9ea.firebaseio.com",
    projectId: "udemy-todo-app-ad9ea",
    storageBucket: "udemy-todo-app-ad9ea.appspot.com",
    messagingSenderId: "570225740929"
  };
} catch(e) {
  
}
firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();

export default firebase;
