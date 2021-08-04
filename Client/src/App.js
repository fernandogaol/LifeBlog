import TopBar from './Components/topbar/TopBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Context} from './context/Context';
import {useContext} from 'react';
import Home from './pages/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import AddPost from './pages/addPost/AddPost';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';

function App() {
	const user = useContext(Context);
	return (
		<Router>
			<TopBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/signup'>{user ? <Signup /> : <Home />}</Route>
				<Route path='/login'>{user ? <Login /> : <Home />}</Route>
				<Route path='/addpost'>{user ? <AddPost /> : <Signup />}</Route>
				<Route path='/settings'>{user ? <Settings /> : <Signup />}</Route>
				<Route path='/post/:postId'>
					<Single />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
