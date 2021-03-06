import React, { useEffect } from "react";
import { articleQuery } from "../../contentfulQueries/articleQuery.js";
import { useContentful } from "../../hooks/useContentful.js";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview.jsx";
import "./CategoryListPage.scss";

export const CategoryListPage = () => {
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

  const categoryArticles = data.overdoseSportsArticleCollection.items.filter(
    (items) => {
      return `/${items.typeOfSport.toLowerCase()}` === window.location.pathname;
    }
  );

  return (
    <div className="category-page">
      <h2>{window.location.pathname.slice(1)}</h2>
      <div className="category-page-wrapper">
        {categoryArticles.map((eachItem) => {
          const {
            articleAuthor,
            articleBody,
            articleImageCollection,
            title,
            typeOfSport,
            slug,
          } = eachItem;
          const { name: author } = articleAuthor;
          const category = typeOfSport.toLowerCase();
          const { url: articleURL, description: articleDescription } =
            articleImageCollection.items[0];
          const { linkToArticle } =
            data.overdoseSportCategoryPreviewCollection.items[0];

          return (
            <div>
              <ArticlePreview
                title={title}
                articleURL={articleURL}
                articleDescription={articleDescription}
                articleBody={articleBody}
                author={author}
                category={category}
                slug={slug}
                linkToArticle={linkToArticle}
                key={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
