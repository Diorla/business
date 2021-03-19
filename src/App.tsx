import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import firebase from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "./components/Layout";

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());

  console.log({ user, loading, error });
  if (loading) return <Layout active="">Loading...</Layout>;
  if (error) return <Redirect to="/404" />;
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
