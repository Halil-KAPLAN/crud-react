import React from "react";
import ArticleForm from "./ArticleForm";

export default function AddArticle(props) {
  console.log(props);
  return (
    <div>
      <h1>Adding post form</h1>
      <ArticleForm />
    </div>
  );
}
