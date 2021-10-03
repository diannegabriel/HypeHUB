import React from "react";
import "./Header.scss";
import Nav from "./Nav";
import SidePanel from "./SidePanel";
import Quotes from "./Quotes";
import GamifyUser from "./GamifyUser";
import useData from "../hooks/useData";

export default function Header() {
  const { state, shuffleQuote } = useData();
  return (
    <header>
      <section id='header-container'>
        <article className='master-header'>
          <GamifyUser exp={state.userExp} />
          <div className="master-header-buttons">
            <Nav />
            <Quotes quote={state.quote} shuffleQuote={shuffleQuote} />
          </div>
        </article>
        <article className='burger'>
        <SidePanel />
        </article>
      </section>
   </header>
  );
}
