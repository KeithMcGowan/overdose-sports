import React from "react";
// import PropTypes from "prop-types";
import { useContentful } from "../../hooks/useContentful.js";
import { homepageQuery } from "../../contentfulQueries/homepageQuery.js";
import "./Logo.scss";

export const Logo = () => {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const { title } = data.overdoseSportsLandingPage;

  return (
    <div className="title-container">
      <h1 className="overdose">{title.slice(0, 9)}</h1>
      <h1 className="sports">{title.slice(-6)}</h1>
    </div>
  );
};
