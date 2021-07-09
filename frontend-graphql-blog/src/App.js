import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BlogsPage from './blogs/pages/blogs';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
	return (
		<BrowserRouter>
			<MainNavigation />
		</BrowserRouter>
	);
};

export default App;
