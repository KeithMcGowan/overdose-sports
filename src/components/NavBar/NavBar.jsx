import React, { useRef } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { Link, useParams } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  const dropdownRef = useRef(null);
  const { page } = useParams();
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
              <Link to="/baseball" page='/baseball' selected={page === '/baseball'}>Baseball</Link>
            </li>
            <li>
              <Link to="/basketball" page='/basketball' selected={page === '/basketball'}>Basketball</Link>
            </li>
            <li>
              <Link to="/football" page='/football' selected={page === '/football'}>Football</Link>
            </li>
            <li>
              <Link to="/hockey" page='/hockey' selected={page === '/hockey'}>Hockey</Link>
            </li>
            <li>
              <Link to="/soccer" page='/soccer' selected={page === '/soccer'}>Soccer</Link>
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
