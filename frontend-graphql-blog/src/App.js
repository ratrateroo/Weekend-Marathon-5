import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

import UsersList from './user/components/UsersList';

const App = () => {
	let routes = (
		<Switch>
			<Route path="/users" exact>
				<UsersList title="Users List" />
			</Route>
			<Route path="/login" exact>
				<UserLogin title="User Login" />
			</Route>
			<Redirect to="/login" />
		</Switch>
	);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: true, login: true, logout: false }}>
			<Router>
				<MainNavigation />
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
