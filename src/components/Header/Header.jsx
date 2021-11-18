import React from "react";
import PropTypes from "prop-types";
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

export const Header = (bannerInfo) => {
  const { title, heroBanner, socialLinks } = bannerInfo;

  return (
    <div className="header">
      <div className="hero-banner">
        <img src={heroBanner.url} alt={heroBanner.description} />
        <div className="title-container">
          <h1 className="overdose">{title.slice(0, 9)}</h1>
          <h1 className="sports">{title.slice(-6)}</h1>
        </div>
        <div className="social-links-container">
          <FacebookLink url={socialLinks[0].socialLink} />
          <LinkedinLink url={socialLinks[1].socialLink} />
          <InstagramLink url={socialLinks[2].socialLink} />
          <TwitterLink url={socialLinks[3].socialLink} />
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
