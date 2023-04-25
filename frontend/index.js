import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import Header from './components/Header';
import UserRegistrationForm from './components/UserRegistrationForm';
import UserStatusSwitch from './components/UserStatusSwitch';
import ActiveUsersList from './components/ActiveUsersList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/register" component={UserRegistrationForm} />
        <Route path="/status" component={UserStatusSwitch} />
        <Route path="/" component={ActiveUsersList} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
