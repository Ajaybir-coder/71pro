import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  firebaseConfig = {
  apiKey: "AIzaSyBpUlqJZaenbf_PFibnvVtTTvVaE1C80IU",
  authDomain: "complaint-form-341ea.firebaseapp.com",
  projectId: "complaint-form-341ea",
  storageBucket: "complaint-form-341ea.appspot.com",
  messagingSenderId: "174684627652",
  appId: "1:174684627652:web:d802ba6de48303486a1f91"
  }
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

