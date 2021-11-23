import React from "react";
import { Logo } from "../Logo/Logo";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import "./Footer.scss";

export const Footer = (props) => {
  const { socialLinksCollection } = props;
  return (
    <div className="footer">
      <Logo />
      <SocialLinks socialLinks={socialLinksCollection.items} />
    </div>
  );
};
