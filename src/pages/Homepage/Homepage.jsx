import React from "react";
import { useContentful } from "../../hooks/useContentful.js";
import { homepageQuery } from "../../contentfulQueries/homepageQuery.js";
import { Header } from "../../components/Header/Header.jsx";
import "./Homepage.scss";

export const Homepage = () => {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;
   
  const { title, heroBanner, socialLinksCollection } = data.overdoseSportsLandingPage;

  return (
  <>
    <Header title={title} heroBanner={heroBanner} socialLinks={socialLinksCollection.items} />
  </>
  );
};
