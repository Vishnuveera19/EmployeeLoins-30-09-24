import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GraphCheckBox1 from './components/GraphCheckBox1';

function NextPage() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard selectedOptions={selectedOptions} />
        </Route>
        <Route path="/">
          <GraphCheckBox1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default NextPage;