import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArticleList } from "../actions";

export default function ArticleList() {
  const articleList = useSelector((state) => state.articleList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState("loading");

  useEffect(() => {
    setLoading(articleList.length === 0 ? "loading" : "");
    dispatch(getArticleList());
  }, [dispatch, articleList]);

  console.log(articleList ? true : false);
  return (
    <div className="ui relaxed divided list">
      <Link to="/addArticle" className={`ui primary button ${loading}`}>
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
