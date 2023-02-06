import { useState, useEffect } from "react";

import "./styles/index.css";
import "./styles/header.css";

import profileIcon from "./img/guest.png";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <header>
      <img src={profileIcon} alt="Profile icon"></img>
    </header>
  );
}

function Main() {
  return (
    <main>
      <SideMenu />
      <Groups />
    </main>
  );
}

function SideMenu() {
  return (
    <aside>
      <div>
        <button>+</button>
        <button>A</button>
      </div>
      <ul className="member-list">
        <li>
          <button>-</button>
          <p>New member 1</p>
          <button>R</button>
        </li>
        <li>
          <button>-</button>
          <p>New member 1</p>
          <button>R</button>
        </li>
      </ul>
    </aside>
  );
}

function Groups() {
  return (
    <section>
      <div className="group-display-controls">
        <button>ADD GROUP</button>
        <button>RESET MEMBERS</button>
        <button>REMOVE GROUPS</button>
      </div>
      <div className="group-display">
        <div className="group">
          <div className="group-controls">
            <button>X</button>
            <input type="text" placeholder="Group name"></input>
            <input type="number" placeholder="Max."></input>
          </div>
          <ul>
            <li>
              <button>-</button>
              <p>New member 1</p>
              <button>R</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
