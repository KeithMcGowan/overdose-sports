import React from "react";
import "./WriteArticleForm.scss";

export const WriteArticleForm = () => {
  return (
    <form action="" className="article-form">
      <div className="form-item">
        <label for="Title">Title</label>
        <input name="Title" type="Symbol" placeholder="title"></input>
      </div>

      <div className="form-item">
        <label for="Slug">Slug</label>
        <input
          name="Slug"
          type="Symbol"
          placeholder="Give your article a slug"
        ></input>
      </div>

      <div className="form-item">
        <label for="Article Image">Article Image</label>
        <input name="Article Image" type="Link"></input>
      </div>

      <div className="form-item">
        <label for="Type of Sport">Type of Sport</label>
        <select name="Type of Sport">
          <option value="Football">Football</option>
          <option value="Baseball">Baseball</option>
          <option value="Basketball">Basketball</option>
          <option value="Soccer">Soccer</option>
          <option value="Hockey">Hockey</option>
          <option value="Golf">Golf</option>
        </select>
      </div>

      <div className="form-item">
        <label for="Category Reference">Category Reference</label>
        <input
          name="Category Reference"
          value="overdoesSportsCategoryPreview"
        ></input>
      </div>

      <div className="form-item">
        <label for="Article Body">Article Body</label>
        <textarea name="Article Body" type="RichText" cols="80" rows="10"></textarea>
      </div>

      <div className="form-item">
        <label for="Article Author">Author</label>
        <input
          name="Article Author"
          type="text"
          placeholder="Your name"
        ></input>
      </div>

      <div className="btn-wrapper">
        <button className="btn" type="submit">Submit</button>
      </div>
    </form>
  );
};
