import React from "react";
import './Header.scss'
import User from './User'
import Nav from './Nav'

export default function Header() {
  return (
    <header id="user-container">
      <section className="master-header">
        <User />
        <Nav />
      </section>

      <section className="burger">
        <SidePanel />
      </section>
    </header>
  );
}