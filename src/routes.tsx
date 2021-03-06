import Quiz from "./pages/Quiz";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import NoteFolder from "./pages/NoteFolder";
import Dummy from "./pages/Dummy";
import Note from "./pages/Note";
import Admin from "./pages/Admin";
import tool from "./data/tool";

// same as quiz
const toolRoute = tool.map(({ link }) => {
  return {
    path: link,
    permission: "public",
    exact: true,
    component: Dummy, // routeComponent[link]
  };
});

const routes = [
  ...toolRoute,
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
    path: "/notes/:slug",
    component: NoteFolder,
    permission: "public",
    exact: true,
  },
  {
    path: "/notes/:slug/:name",
    component: Note,
    permission: "public",
    exact: true,
  },
  {
    path: "/admin",
    component: Admin,
    permission: "admin",
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    permission: "public",
    exact: true,
  },
];

console.log({ routes });
export default routes;
