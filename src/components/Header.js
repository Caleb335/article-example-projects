import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.header`
  height: 80px;
  background: #3c1742;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: var(--desktop-pad);

  .brand h3 {
    padding-top: 10px;
  }

  nav {
    display: flex;
  }

  ul {
    list-style: none;
    padding-top: 10px;
  }

  li:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <Navbar>
      <div className="brand">
        <h3>Example</h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </Navbar>
  );
}
