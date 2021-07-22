import TopBar from "./Components/topbar/TopBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"
import AddPost from "./pages/addPost/AddPost"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"

function App() {

  const user = false;
  return (
    
    <Router>
      <TopBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signup">
            {user ? <Home/> : <Signup/>}
          </Route>
          <Route path="/login">
            {user ? <Home/> : <Login/>}
          </Route>
          <Route path="/addpost">
            {user ? <AddPost/> : <Signup/>}
          </Route>
          <Route path="/settings">
            {user ? <Settings/> : <Signup/>}
          </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>          
        </Switch>
    </Router>
  
  );
}

export default App;
