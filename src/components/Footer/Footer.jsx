import React from "react";
import { Logo } from "../Logo/Logo";
// import PropTypes from "prop-types";
// import { useContentful } from "../../hooks/useContentful.js";
// import { homepageQuery } from "../../contentfulQueries/homepageQuery.js";
import "./Footer.scss"

export const Footer = () => {
    return (
        <div className="footer">
            <Logo />
        </div>
    )
}