import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleList(props) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum-ffi3.onrender.com/posts")
      .then((response) => {
        setArticleList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
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
