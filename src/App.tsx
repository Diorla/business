import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, exact }, index) => (
          <Route key={index} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
