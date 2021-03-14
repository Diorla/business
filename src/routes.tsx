import Quiz from "./pages/Quiz";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import BusinessHome from "./pages/business/Home";

const routes = [
  {
    path: "/",
    component: Home,
    permission: "public",
  },
  {
    path: "/quiz",
    component: Quiz,
    permission: "public",
  },
  {
    path: "/help",
    component: Help,
    permission: "public",
  },
  {
    path: "/tools",
    component: Tools,
    permission: "public",
  },
  {
    path: "/b/:id",
    component: BusinessHome,
    permission: "public",
  },
];

export default routes;
