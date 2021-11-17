import React from "react";
import { useContentful } from "./hooks/useContentful";
import { homepageQuery } from "./contentfulQueries/homepageQuery";
import "./App.scss";
import { Homepage } from "./pages/Homepage/Homepage";

function App() {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
