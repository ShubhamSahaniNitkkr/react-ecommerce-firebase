import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBTyRDA3_bVFZiVja8DXoiWGkF3ikKIhAc',
  authDomain: 'react-firebase-auth-34d16.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-34d16.firebaseio.com',
  projectId: 'react-firebase-auth-34d16',
  storageBucket: 'react-firebase-auth-34d16.appspot.com',
  messagingSenderId: '678762401270',
  appId: '1:678762401270:web:67f4a4cb357366ad7b0bd7',
  measurementId: 'G-3SVTQKXC0H',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
