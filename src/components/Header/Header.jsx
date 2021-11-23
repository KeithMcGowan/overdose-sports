import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo.jsx";
import "./Header.scss";
import { SocialLinks } from "../SocialLinks/SocialLinks.jsx";

export const Header = (props) => {

  const { heroBanner, socialLinksCollection } = props;
 
  return (
    <div className="header">
      <div className="hero-banner">
        <img src={heroBanner.url} alt={heroBanner.description} />
        <Logo />
        <SocialLinks socialLinks={socialLinksCollection.items} />
      </div>
    </div>
  );
};

Header.propTypes = {
  bannerInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    heroBanner: PropTypes.object.isRequired,
    socialLinks: PropTypes.object.isRequired,
  }),
};
