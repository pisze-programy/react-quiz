import React from "react";
import {Link} from "react-router";

export default function Header() {
  return (
    <div>
      <h2>LOGO</h2>
      <ul>
        <li><Link to="/">Quiz</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </div>
  )
}
