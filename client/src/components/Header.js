import React from "react";
import './Header.scss'
import Nav from './Nav'
import SidePanel from './SidePanel'
// import User from './User'
import GamifyUser from './GamifyUser'
import useData from "../hooks/useData";


export default function Header() {
  const state = useData();
  return (
    <header id="user-container">
      <section className="master-header">
        <GamifyUser exp={state.userExp} />
        <Nav />
      </section>

      <section className="burger">
        <SidePanel />
      </section>
    </header>
  );
}