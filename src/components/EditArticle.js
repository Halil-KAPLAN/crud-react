import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ArticleForm from "./ArticleForm";

export default function EditArticle() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setArticleData(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>Editing post form</h1>
      <ArticleForm articleData={articleData} />
    </div>
  );
}
