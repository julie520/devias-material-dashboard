// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RegisterIcon from "@material-ui/icons/GroupAdd";
import LoginIcon from "@material-ui/icons/LockOpen";
// core components/views for layout
import DashboardPage from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile";
import NotificationsPage from "./views/Notifications/Notifications";
// core components/views for Auth layout
import LoginPage from "./views/Pages/LoginPage";
import RegisterPage from "./views/Pages/RegisterPage";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: PersonIcon,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: NotificationsIcon,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/login-page",
    name: "Login Page",
    icon: LoginIcon,
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register-page",
    name: "Register Page",
    icon: RegisterIcon,
    component: RegisterPage,
    layout: "/auth"
  }
];

export default routes;
