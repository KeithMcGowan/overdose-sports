import React from "react";
import "./SocialLinks.scss";

export const SocialLinks = (props) => {
  const { socialLinks } = props;

  return (
    <div className="social-links-container">
      {socialLinks.map((eachLink) => {
        console.log(eachLink);
        const { title, socialLink, icon } = eachLink;
        return (
          <a
            href={socialLink}
            target="_blank"
            rel="noreferrer noopener"
            key={title}
          >
            <i className={`fab ${icon} fa-2x`}></i>
          </a>
        );
      })}
    </div>
  );
};
