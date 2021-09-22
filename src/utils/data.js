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
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Demos",
    path: "/demo",
  },
  {
    name: <NavItem item="Contact Us" />,
    path: "#contact",
  },
];
