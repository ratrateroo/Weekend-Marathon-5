import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BlogsPage from './blogs/pages/blogs';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect from="/" to="/blogs" exact />

				<Route path="/blogs" component={BlogsPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
