import Quiz from "./pages/Quiz";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
    permission: "public",
    exact: true,
  },
  {
    path: "/quiz",
    component: Quiz,
    permission: "public",
    exact: true,
  },
  {
    path: "/help",
    component: Help,
    permission: "public",
    exact: true,
  },
  {
    path: "/tools",
    component: Tools,
    permission: "public",
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    permission: "public",
    exact: true,
  },
];

export default routes;
