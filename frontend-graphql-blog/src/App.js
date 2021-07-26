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
import UsersList from './user/components/UserList';
import UserProfile from './user/pages/UserProfile';

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
		setToken(null);
		setUserId(null);
	}, []);

	let routes = (
		<Switch>
			<Route path="/" exact>
				<Blogs title="Blogs" />
			</Route>

			<Route path="/users" exact>
				<UsersList title="Users" />
			</Route>
			<Route path="/blogs/:uid" exact>
				<UserBlogs title="User Blogs" />
			</Route>
			<Route path="/profile/:uid" exact>
				<UserProfile title="User Profile" />
			</Route>
			<Route path="/login" exact>
				<UserLogin title="User Login" />
			</Route>
			{!isLoggedIn && (
				<Route path="/signup" exact>
					<UserSignupForm title="User Signup" />
				</Route>
			)}
			{!token && <Redirect from="/" to="/login" exact />}
		</Switch>
	);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}>
			<Router>
				{routes}
				<MainNavigation />
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
