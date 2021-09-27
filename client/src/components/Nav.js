import React from "react";
import './Nav.scss'

export default function Nav() {
  return (
    <article id="nav-bar">
      <a href="/add"><i className="fas fa-plus-circle fa-3x"></i></a>
      <i className="far fa-calendar-alt fa-3x"></i>
    </article>
  );
}