import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    component: Home,
    permission: "public",
  },
  {
    path: "/about",
    component: About,
    permission: "public",
  },
  {
    path: "/help",
    component: Help,
    permission: "public",
  },
];

export default routes;
