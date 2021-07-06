import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BlogsPage from './blogs/pages/blogs';

const App = () => {
	return (
		<BrowserRouter>
			<Route path="/" component={null} />
			<Route path="/blogs" component={BlogsPage} />
		</BrowserRouter>
	);
};

export default App;
