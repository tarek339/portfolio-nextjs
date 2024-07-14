"use client";

import { useState } from "react";

const Navbar = () => {
  const [onHover, setOnHover] = useState(null);
  const [onItem, setOnItem] = useState(null);

  const onMouseEnter = (item) => {
    setOnHover(item);
  };

  const onMouseLeave = () => {
    setOnHover(null);
  };

  const onFocus = (item) => {
    setOnItem(item);
  };

  const menuItem = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#service", name: "Service" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div>LOGO</div>
        <div className="holder">
          <div className="menu-items">
            {menuItem.map((item, i) => {
              return (
                <span
                  key={i}
                  onMouseEnter={() => onMouseEnter(i)}
                  onMouseLeave={onMouseLeave}
                  onClick={() => onFocus(i)}>
                  <a
                    className="child-element"
                    style={{
                      color:
                        onItem === i
                          ? "#ffb400"
                          : onItem === i
                          ? "#ffb400"
                          : onItem === i
                          ? "#ffb400"
                          : onItem === i
                          ? "#ffb400"
                          : onItem === i
                          ? "#ffb400"
                          : "#eeeeee",
                    }}
                    href={item.href}>
                    {item.name}
                  </a>
                </span>
              );
            })}
          </div>
          <div
            className="item-border"
            style={{
              left: `${
                onHover === 0
                  ? -24
                  : onHover === 1
                  ? 79
                  : onHover === 2
                  ? 188
                  : onHover === 3
                  ? 308
                  : onHover === 4
                  ? 430
                  : ""
              }px`,
              borderColor: onHover === null ? "transparent" : "#ffb400",
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
