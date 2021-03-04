import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './services/firebase';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Login';

function App() {
	const [loading, setLoading] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		auth().onAuthStateChanged((user) => {
			if (!!user) {
				setLoading(false);
				setAuthenticated(true);
			} else {
				setLoading(false);
				setAuthenticated(false);
			}
		});
	}, []);

	return loading ? (
		<h2>Loading....</h2>
	) : (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<PrivateRoute
					authenticated={authenticated}
					path='/chat'
					component={Chat}
				/>
				<PublicRoute
					authenticated={authenticated}
					path='/login'
					component={Login}
				/>
			</Switch>
		</Router>
	);
}

export default App;
