import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBOab7eoMknfIbp556_vz9LQO68s9sCmXA",
  authDomain: "udemy-todo-app-ad9ea.firebaseapp.com",
  databaseURL: "https://udemy-todo-app-ad9ea.firebaseio.com",
  projectId: "udemy-todo-app-ad9ea",
  storageBucket: "udemy-todo-app-ad9ea.appspot.com",
  messagingSenderId: "570225740929"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  running: true,
  user: {
    name: 'Jan',
    age: 20
  }
});
