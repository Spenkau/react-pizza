import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ProfilePage from "./pages/ProfilePage";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/profile" component={ProfilePage} />
    </Switch>
  );
}

export default App;
