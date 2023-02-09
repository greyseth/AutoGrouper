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

const groupTesting = true;
const groupRepeat = 5;
let gRE = [];
if (groupTesting) {
  for (let i = 0; i < groupRepeat; i++) {
    gRE.push(i);
  }
}
console.log(gRE);
function Groups() {
  const groupItems = gRE.map((g) => <Group />);

  return (
    <section>
      <div className="group-display-controls">
        <button>ADD GROUP</button>
        <button>RESET MEMBERS</button>
        <button>REMOVE GROUPS</button>
      </div>
      <div className="group-display">{groupItems}</div>
    </section>
  );
}

function Group() {
  <div className="group">
    <div className="group-controls">
      <button>X</button>
      <input type="text" placeholder="Group name"></input>
      <input type="number" placeholder="Max."></input>
    </div>
    <ul>
      <GroupMember />
    </ul>
  </div>;
}

function GroupMember() {
  <li key={`groupmemberitem`}>
    <button>-</button>
    <p>New member 1</p>
    <button>R</button>
  </li>;
}

export default App;
