import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const clickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", clickEvent);
    }

    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, [isActive]);

  return (
    <div className="nav">
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={onClick}>
          <span className="submenu-trigger">Sports</span>
          <ul
            ref={dropdownRef}
            className={`nav-sub-items ${isActive ? "active" : "inactive"}`}
          >
            <li>
              <Link to="/baseball">Baseball</Link>
            </li>
            <li>
              <Link to="/basketball">Basketball</Link>
            </li>
            <li>
              <Link to="/football">Football</Link>
            </li>
            <li>
              <Link to="/hockey">Hockey</Link>
            </li>
            <li>
              <Link to="/soccer">Soccer</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/write-an-article">Write an Article</Link>
        </li>
      </ul>
    </div>
  );
};
