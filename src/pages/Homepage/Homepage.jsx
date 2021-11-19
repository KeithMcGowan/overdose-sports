import React from "react";
import { useContentful } from "../../hooks/useContentful.js";
import { homepageQuery } from "../../contentfulQueries/homepageQuery.js";
import "./Homepage.scss";
import { HomeContent } from "../../components/HomeContent/HomeContent.jsx";

export const Homepage = () => {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { title, categoryReferenceCollection } = data.overdoseSportsLandingPage;

  return (
    <>
      <h2>{title} Features</h2>
      <HomeContent categoryReferences={categoryReferenceCollection} />
    </>
  );
};
