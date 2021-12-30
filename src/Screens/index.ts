import { Admin } from "./Admin";
import { Guest } from "./Guest";
import { Home } from "./Home";

export const Screens = {
  HOME: {
    name: "Home",
    routeName: "home",
    Component: Home,
  },
  ADMIN: {
    name: "Admin",
    routeName: "admin",
    Component: Admin,
  },
  GUEST: {
    name: "Guest",
    routeName: "guest",
    Component: Guest,
  },
};
