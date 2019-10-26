import React, { useState } from "react";
import "../styles/components/Menu.scss";

// components
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <nav className="Menu">
      {items.map((item, i) => (
        <MenuItem item={item} key={`menuItem_${i}`} />
      ))}
    </nav>
  );
};

export default Menu;
