import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo/Logo.jsx";
import "./Header.scss";

function FacebookLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <i className="fab fa-facebook-square fa-2x"></i>
    </a>
  );
}

function InstagramLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <i className="fab fa-instagram-square fa-2x"></i>
    </a>
  );
}

function LinkedinLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <i className="fab fa-linkedin fa-2x"></i>
    </a>
  );
}

function TwitterLink({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <i className="fab fa-twitter-square fa-2x"></i>
    </a>
  );
}

export const Header = (props) => {

  const { heroBanner, socialLinksCollection } = props;

  return (
    <div className="header">
      <div className="hero-banner">
        <img src={heroBanner.url} alt={heroBanner.description} />
        <Logo />
        <div className="social-links-container">
          <FacebookLink url={socialLinksCollection.items[0].socialLink} />
          <LinkedinLink url={socialLinksCollection.items[1].socialLink} />
          <InstagramLink url={socialLinksCollection.items[2].socialLink} />
          <TwitterLink url={socialLinksCollection.items[3].socialLink} />
        </div>
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
