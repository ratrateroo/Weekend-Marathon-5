import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
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
