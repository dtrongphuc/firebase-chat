import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
	apiKey: 'AIzaSyD2D7bukDdZestxhOQVIWIdoxHEOdSsDD0',
	authDomain: 'real-time-chat-b858d.firebaseapp.com',
	projectId: 'real-time-chat-b858d',
	storageBucket: 'real-time-chat-b858d.appspot.com',
	messagingSenderId: '200720258781',
	appId: '1:200720258781:web:20df676dc172a436afed34',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
