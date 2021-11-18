import React from "react";
// import PropTyes from "prop-types";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
        const { url: categoryURL } =
          sportCategoryImage;
        const { title, articleImageCollection, articleBody } = articlePreview;
        const { name: author } = articlePreview.articleAuthor;
        const { url: articleURL, description: articleDescription } =
          articleImageCollection.items[0];

        console.log(eachCategory.articlePreview.articleBody.json);
        let animation;

        if (categoryReferences.items.indexOf(eachCategory) === 0) {
          animation = "right animate__animated animate__bounceInLeft animate__delay-1s ";
        } else if (categoryReferences.items.indexOf(eachCategory) === 1) {
          animation = "left animate__animated animate__bounceInRight animate__delay-3s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 2) {
          animation = "right animate__animated animate__bounceInLeft animate__delay-5s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 3) {
          animation = "left animate__animated animate__bounceInRight animate__delay-7s";
        } else if (categoryReferences.items.indexOf(eachCategory) === 4) {
          animation = "right animate__animated animate__bounceInLeft animate__delay-9s";
        }

        return (
          <div className={`category-card ${animation} `}>
            <div className="category-preview" key={typeOfSport} style={{ backgroundImage: `url('${categoryURL}')` }}>
              <div className="gradient-overlay">
                <div className="category-text">
                  <h3>{headline}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="article-preview" key={title} style={{ border: "1px solid black" }}>
                <h3>{title}</h3>
              <img loading="lazy" src={articleURL} alt={articleDescription} />
              <div className="article-preview-text">
                <div className="article-preview-body">
                  {documentToReactComponents(articleBody.json)}
                </div>
                <p className="article-preview-author">- {author}</p>
                <Link className="btn" to="#">{linkToArticle.buttonText}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// HomeContent.propTypes = {
//     bannerInfo: PropTyes.shape({}).isRequired,
//   };
