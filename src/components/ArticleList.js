import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function ArticleList(props) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => {
        setArticleList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/addArticle" className="ui primary button">
        Add Article
      </Link>
      {articleList.map(({ id, title, created_at }) => {
        return (
          <div className="item" key={id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${id}`} className="header" href="/">
                {title}
              </Link>
              <div className="description">{created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
