// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Query/Hook imports
import { homepageQuery } from "./contentfulQueries/homepageQuery";
import { useContentful } from "./hooks/useContentful";

// Component imports
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Utils imports
import * as PATHS from "./utils/paths";

// Page imports
import { Homepage } from "./pages/Homepage/Homepage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import "./App.scss";

function App() {
  let { data, errors } = useContentful(homepageQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  const {
    title,
    categoryReferenceCollection,
    heroBanner,
    socialLinksCollection,
  } = data.overdoseSportsLandingPage;

  const referenceSlug = categoryReferenceCollection.items.map((eachRef) => {
    return eachRef.articlePreview.slug;
  });

  return (
    <div className="App">
      <Header
        heroBanner={heroBanner}
        socialLinksCollection={socialLinksCollection}
      />
      <Routes>
        <Route
          path={PATHS.HOMEPAGE}
          element=<Homepage
            title={title}
            categoryReferenceCollection={categoryReferenceCollection}
          />
        />
        <Route path={PATHS.ARTICLEPAGE} element=<ArticlePage referenceSlug={referenceSlug} /> />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
