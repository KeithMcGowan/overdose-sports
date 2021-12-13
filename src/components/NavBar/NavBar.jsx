import React, { useRef } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="nav">
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li 
        onClick={onClick}
        >
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
            {/* <li>
              <a href="/baseball">Baseball</a>
            </li>
            <li>
              <a href="/basketball">Basketball</a>
            </li>
            <li>
              <a href="/football">Football</a>
            </li>
            <li>
              <a href="/hockey">Hockey</a>
            </li>
            <li>
              <a href="/soccer">Soccer</a>
            </li> */}
          </ul>
        </li>
        <li>
          <Link to="/write-an-article">Write an Article</Link>
        </li>
      </ul>
    </div>
  );
};
