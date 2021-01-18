import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtk1e_KanppPBYbv1ojF0cspoiEd0RzkE',
  authDomain: 'ecommerceplatform-edaf4.firebaseapp.com',
  projectId: 'ecommerceplatform-edaf4',
  storageBucket: 'ecommerceplatform-edaf4.appspot.com',
  messagingSenderId: '195669940772',
  appId: '1:195669940772:web:45403b593af8622c7c56b1',
  measurementId: 'G-167H6QDYHF',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
