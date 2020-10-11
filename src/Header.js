import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Avatar src={user?.photoURL} />
      <div className="header__info">
        <h3>{user?.displayName}</h3>
      </div>
    </div>
  );
}

export default Header;
