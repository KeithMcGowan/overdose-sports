import React from "react";
import { useContentful } from "./hooks/useContentful";
import { homepageQuery } from "./contentfulQueries/homepageQuery";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return <span className="errors">{errors.map((error) => error.message).join(",")}</span>;
  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.overdoseSportsLandingPage.title}
      </header>
    </div>
  );
}

export default App;
