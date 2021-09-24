import React from "react";
import './Header.scss'
import Nav from './Nav'
import SidePanel from './SidePanel'
import User from './User'

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