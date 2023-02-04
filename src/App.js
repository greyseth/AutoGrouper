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
    <section className="group-display">
      <div>
        <div className="group-controls">
          <input type="text" placeholder="Group name"></input>
          <input type="number" value="0"></input>
        </div>
        <ul>
          <li>
            <button>-</button>
            <p>New member 1</p>
            <button>R</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
