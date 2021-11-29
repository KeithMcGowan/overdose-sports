import React from "react";
import { WriteArticleForm } from "../../forms/WriteArticleForm/WriteArticleForm";
import "./WriteArticlePage.scss";

export const WriteArticlePage = () => {
  return (
    <div className="write-article-page">
      <h2>Hello World</h2>
      <div>
          <WriteArticleForm />
      </div>
    </div>
  );
};
