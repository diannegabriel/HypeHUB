import React from "react";
import "./Header.scss";
import Nav from "./Nav";
import SidePanel from "./SidePanel";
import Quotes from "./Quotes";
import GamifyUser from "./GamifyUser";
import useData from "../hooks/useData";

export default function Header() {
  const { state } = useData();
  return (
    <header id='user-container'>
      <section className='master-header'>
        <GamifyUser exp={state.userExp} />
        <Nav />
        <Quotes quote={state.quote} />
      </section>

      <section className='burger'>
        <SidePanel />
      </section>
    </header>
  );
}
