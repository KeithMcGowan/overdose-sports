// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Query/Hook imports
import { homepageQuery } from "./contentfulQueries/homepageQuery";
import { useContentful } from "./hooks/useContentful";

// Component imports
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

// Utils imports
import * as PATHS from "./utils/paths";

// Page imports
import { Homepage } from "./pages/Homepage/Homepage";
import { CategoryListPage } from "./pages/CategoryListPage/CategoryListPage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import "./App.scss";
import { WriteArticlePage } from "./pages/WriteArticlePage/WriteArticlePage";

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
  
  return (
    <div className="App">
      <Header
        heroBanner={heroBanner}
        socialLinksCollection={socialLinksCollection}
      />
      <NavBar />
      <Routes>
        <Route
          path={PATHS.HOMEPAGE}
          element=<Homepage
            title={title}
            categoryReferenceCollection={categoryReferenceCollection}
          />
        />
        <Route path={PATHS.CATEGORYLISTPAGE} element=<CategoryListPage /> />
        <Route path={PATHS.ARTICLEPAGE} element=<ArticlePage /> />
        <Route path={PATHS.WRITEARTICLEPAGE} element=<WriteArticlePage /> />
      </Routes>
      <Footer socialLinksCollection={socialLinksCollection} />
    </div>
  );
}

export default App;
