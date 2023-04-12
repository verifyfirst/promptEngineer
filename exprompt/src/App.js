import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PromptForm from './components/PromptForm';
import PromptList from './components/PromptList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/prompts">Prompts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <PromptForm />
          </Route>
          <Route path="/prompts">
            <PromptList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;