import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({
	component: Component,
	authenticated,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === false ? (
					<Component {...props} />
				) : (
					<Redirect to='/chat' />
				)
			}
		/>
	);
}
