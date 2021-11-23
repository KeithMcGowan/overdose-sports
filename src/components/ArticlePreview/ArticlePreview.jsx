import React from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./ArticlePreview.scss";

export const ArticlePreview = (props) => {
  const {
    title,
    articleURL,
    articleDescription,
    articleBody,
    author,
    category,
    slug,
    linkToArticle,
  } = props;

  return (
    <div className="article-preview" key={title}>
      <h3>{title}</h3>
      <img src={articleURL} alt={articleDescription} />
      <div className="article-preview-text">
        <div className="article-preview-body">
          {documentToReactComponents(articleBody.json)}
        </div>
        <p className="article-preview-author">- {author}</p>
        <Link className="btn" to={`/${category}/${slug}`}>
          {linkToArticle.buttonText}
        </Link>
      </div>
    </div>
  );
};
