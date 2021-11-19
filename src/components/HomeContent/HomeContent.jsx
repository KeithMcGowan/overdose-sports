import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./HomeContent.scss";

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      })
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
}

export const HomeContent = ({ categoryReferences }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });

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
        const { title, articleImageCollection, articleBody } = articlePreview;
        const { name: author } = articlePreview.articleAuthor;
        const { url: articleURL, description: articleDescription } =
          articleImageCollection.items[0];

        let animation;

        if (categoryReferences.items.indexOf(eachCategory) === 0) {
          {/* animation =
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
        } */}

        animation =
            "right";
        } else if (categoryReferences.items.indexOf(eachCategory) === 1) {
          animation =
            "left";
        } else if (categoryReferences.items.indexOf(eachCategory) === 2) {
          animation =
            "right";
        } else if (categoryReferences.items.indexOf(eachCategory) === 3) {
          animation =
            "left";
        } else if (categoryReferences.items.indexOf(eachCategory) === 4) {
          animation =
            "right";
        }

        return (
          <div ref={setRef} className={`category-card ${animation} `} key={typeOfSport}>
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
                </div>
              </div>
            </div>
            <div
              className="article-preview"
              key={title}
              style={{ border: "1px solid black" }}
            >
              <h3>{title}</h3>
              <img src={articleURL} alt={articleDescription} />
              <div className="article-preview-text">
                <div className="article-preview-body">
                  {documentToReactComponents(articleBody.json)}
                </div>
                <p className="article-preview-author">- {author}</p>
                <Link className="btn" to="#">
                  {linkToArticle.buttonText}
                </Link>
              </div>
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
