import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { articleQuery } from "../../contentfulQueries/articleQuery.js";
import { useContentful } from "../../hooks/useContentful.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./ArticlePage.scss";

export const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { data, errors } = useContentful(articleQuery);

  if (errors)
    return (
      <span className="errors">
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span>Loading...</span>;

  return (
    <div className="article-page">
      {data.overdoseSportsArticleCollection.items.map((eachItem) => {
        const {
          articleAuthor,
          articleBody,
          articleImageCollection,
          title,
          typeOfSport,
        } = eachItem;
        const { items: images } = articleImageCollection;
        const { bio, name, photo } = articleAuthor;
        const category = typeOfSport.toLowerCase();

        return (
          <>
            {`/${category}/${eachItem.slug}` === window.location.pathname ? (
              <div className="sports-article" key={title}>
                <div className="return-link">
                  <Link to={`/${category}`}>
                    View all {typeOfSport} articles
                  </Link>
                </div>
                <h2>{title}</h2>
                <img
                  className="article-img"
                  src={images[0].url}
                  alt={images[0].description}
                />
                <div className="article-body">
                  {documentToReactComponents(articleBody.json)}
                </div>
                <div className="author-info">
                  <img src={photo.url} alt={photo.title} />
                  <div>
                    <p className="author-name">
                      <i>{name}</i>
                    </p>
                    <p className="author-bio">{bio}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </>
        );
      })}
    </div>
  );
};
