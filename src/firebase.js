import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBhH7MQVSQBW5B_JlKZi7wWGugyYK89RjU",
  authDomain: "beacon-react-app.firebaseapp.com",
  databaseURL: "https://beacon-react-app.firebaseio.com",
  projectId: "beacon-react-app",
  storageBucket: "beacon-react-app.appspot.com",
  messagingSenderId: "1088930638065"
};
firebase.initializeApp(config);

export default firebase;
