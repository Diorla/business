import Quiz from "./pages/Quiz";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import Dummy from "./pages/Dummy";

/**
 * There are three types of permisions
 * 1. Public: any body could access it
 * 2. Private: only for signed in users
 * 3. Admin: only for me
 */
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
    path: "/notes",
    component: Notes,
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
    path: "/login", // Or sign up
    component: Dummy,
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
