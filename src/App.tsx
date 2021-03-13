import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
