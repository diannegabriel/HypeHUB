import React from "react";
import './Header.scss'
import Nav from './Nav'
import SidePanel from './SidePanel'
// import User from './User'
import GamifyUser from './GamifyUser'

export default function Header() {
  return (
    <header id="user-container">
      <section className="master-header">
        <GamifyUser />
        {/* <User /> */}
        <Nav />
      </section>

      <section className="burger">
        <SidePanel />
      </section>
    </header>
  );
}