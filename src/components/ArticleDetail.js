import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import ArticleComments from "./ArticleComments";

export default function ArticleDetail(props) {
  const { id } = useParams();
  const [articleDetail, setArticleDetail] = useState({});
  const [articleComments, setArticleComments] = useState([]);

  const handleCommentSubmit = (event, comment) => {
    event.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((response) => {
        setArticleComments([...articleComments, response.data]);
      });
  };

  useEffect(() => {
    Promise.all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((response) => {
        setArticleDetail(response[0].data);
        setArticleComments(response[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <React.Fragment>
      <h2 className="ui header">{articleDetail.title}</h2>
      <p>{articleDetail.created_at}</p>
      <p>{articleDetail.content}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${id}/edit`}>Edit</Link>
        <button className="ui red button">Delete</button>
      </div>
      <ArticleComments
        articleComments={articleComments}
        handleSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
}
