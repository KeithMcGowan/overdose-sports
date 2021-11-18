import React from "react";
// import PropTyes from "prop-types";
import { Link } from "react-router-dom";
import "./HomeContent.scss";

export const HomeContent = ({ categoryReferences }) => {
  // console.log(categoryReferences.items);
  // function isLeft() {
    // let isLeft;
    
    // categoryReferences.items.map((eachCategory) => {
    //   // console.log("Each category: ", eachCategory);
    //   if(eachCategory.indexOf() % 2 === 0 ) {
    //     isLeft = "left";
    //   } else {
    //     isLeft = "right";
    //   }
    //   return isLeft;
    // })
  // }

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
        const { title, articleImageCollection } = articlePreview;
        const { name: author } = articlePreview.articleAuthor;
        const { url: articleURL, description: articleDescription } =
          articleImageCollection.items[0];

        console.log("Each category: ", categoryReferences.items.indexOf(eachCategory));
        let isLeft;

        if(categoryReferences.items.indexOf(eachCategory) % 2 !== 0) {
          isLeft = "left";
        } else {
          isLeft = "right";
        }

        return (
          <div className={`category-card ${isLeft}`}>
            <div className="category-preview" key={typeOfSport} style={{ backgroundImage: `url('${categoryURL}')` }}>
              <div className="gradient-overlay">
                <div className="category-text">
                  <h3>{headline}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="article-preview" key={title} style={{ border: "1px solid black" }}>
              <img loading="lazy" src={articleURL} alt={articleDescription} />
              <div className="article-preview-text">
                <h3>{title}</h3>
                <p>- {author}</p>
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
