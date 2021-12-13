import React, { useState, useRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { Link } from "react-router-dom";
import "./HomeContent.scss";

export const HomeContent = ({ categoryReferences }) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    entries.map((eachEntry) => {
      console.log("Is intersecting: ", eachEntry.isIntersecting)
      return setIsVisible(eachEntry.isIntersecting);
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      // rootMargin: "-150px 0px 150px 0px",
      threshold: 0.1
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className="homepage-content">
      {categoryReferences.items.map((eachCategory) => {
        const {
          typeOfSport,
          headline,
          description,
          sportCategoryImage,
          articlePreview,
          linkToArticle,
        } = eachCategory;
        const { url: categoryURL, description: categoryImgAltTxt } =
          sportCategoryImage;
        const { title, articleImageCollection, articleBody, slug } =
          articlePreview;
        const { name: author } = articlePreview.articleAuthor;
        const { url: articleURL, description: articleDescription } =
          articleImageCollection.items[0];
        const category = typeOfSport.toLowerCase();

        {/* { */}
          /* let animation;

        if (categoryReferences.items.indexOf(eachCategory) === 0) {
          animation =
            "right animate__animated animate__bounceInLeft animate__delay-1s ";
        } else if (categoryReferences.items.indexOf(eachCategory) === 1) {
          animation =
            "left animate__animated animate__bounceInRight animate__delay-3s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 2) {
          animation =
            "right animate__animated animate__bounceInLeft animate__delay-5s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 3) {
          animation =
            "left animate__animated animate__bounceInRight animate__delay-7s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 4) {
          animation =
            "right animate__animated animate__bounceInLeft animate__delay-9s";
        } */
        {/* } */}

        let isLeft;
        let animation;

        if (categoryReferences.items.indexOf(eachCategory) % 2 === 0) {
          isLeft = "right";
          animation = "animate__animated animate__bounceInLeft";
        } else {
          isLeft = "left";
          animation = "animate__animated animate__bounceInRight";
        }

        return (
          <div ref={targetRef} key={typeOfSport}>
            <div className={`category-card ${isLeft} ${isVisible ? animation : ''}`} style={{opacity: isVisible ? '1' : '0'}}>
              <div>
                <div
                  className="category-preview"
                  key={typeOfSport}
                  aria-label={categoryImgAltTxt}
                  style={{ backgroundImage: `url('${categoryURL}')` }}
                >
                  <div className="gradient-overlay">
                    <div className="category-text">
                      <h3>{headline}</h3>
                      <p>{description}</p>
                      <Link className="btn category-btn" to={`/${category}`}>
                        View All {typeOfSport} Articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ArticlePreview
                title={title}
                articleURL={articleURL}
                articleDescription={articleDescription}
                articleBody={articleBody}
                author={author}
                category={category}
                slug={slug}
                linkToArticle={linkToArticle}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

HomeContent.propTypes = {
  eachCategory: PropTypes.shape({
    typeOfSport: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sportCategoryImage: PropTypes.object.isRequired,
    articlePreview: PropTypes.object.isRequired,
    linkToArticle: PropTypes.object.isRequired,
  }),
};
