import React, { useEffect } from "react";
import { HomeContent } from "../../components/HomeContent/HomeContent.jsx";
import "./Homepage.scss";

export const Homepage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { title, categoryReferenceCollection } = props;

  return (
    <>
      <h2>{title} Features</h2>
      <HomeContent categoryReferences={categoryReferenceCollection} />
    </>
  );
};
