import { createBrowserRouter } from "react-router-dom"
import UserInfo from "./components/user/UserInfo";
import UserForm from "./components/user/UserForm";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,

  }

])

export default router;