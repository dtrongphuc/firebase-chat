import React from 'react';
import { signin } from '../helpers/auth';

export default function Login() {
	const handleSignInWithGoogle = () => {
		signin();
	};

	return (
		<div className='login'>
			<button onClick={handleSignInWithGoogle}>
				Sign In With Google
			</button>
		</div>
	);
}
