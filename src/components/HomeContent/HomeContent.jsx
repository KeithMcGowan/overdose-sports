import React from "react";
import PropTypes from "prop-types";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import "./HomeContent.scss";

export const HomeContent = ({ categoryReferences }) => {
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

        let animation;

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
        }

        return (
          <div className={`category-card ${animation} `} key={typeOfSport}>
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
