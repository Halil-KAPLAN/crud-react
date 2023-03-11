import React from "react";
import { useSelector } from "react-redux";
import ArticleForm from "./ArticleForm";

export default function EditArticle() {
  const articleData = useSelector((state) => state.articleDetail);

  return (
    <div>
      <h1>Editing post form</h1>
      <ArticleForm articleData={articleData} />
    </div>
  );
}
