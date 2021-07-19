import React, { useState, useCallback } from 'react';

import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

import UserLogin from './user/pages/UserLogin';
import UserSignupForm from './user/components/UserSignupForm';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = useCallback((token, userId, tokenExpiration) => {
		setIsLoggedIn(true);
		setToken(token);
		setUserId(userId);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
	}, []);

	let routes = (
		<Switch>
			<Route path="/login" exact>
				<UserLogin title="User Login" />
			</Route>
			<Route path="/signup" exact>
				<UserSignupForm title="User Signup" />
			</Route>
			<Redirect to="/login" />
		</Switch>
	);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: false, login: login, logout: logout }}>
			<Router>
				{routes}
				<MainNavigation />
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
