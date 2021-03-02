import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages'
import MemberPage from './pages/member'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/member' component={MemberPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
