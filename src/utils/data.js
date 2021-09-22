import NavItem from "./nav_item";

export const examples = [];

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "../container/next-nav/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Demos",
    path: "/",
  },
  {
    name: <NavItem item="Contact Us" />,
    path: "#contact",
  },
];
