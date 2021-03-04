import { auth } from '../services/firebase';

export function signin() {
	return auth().signInWithPopup(new auth.GoogleAuthProvider());
}

export function signout() {
	return auth().signOut();
}
