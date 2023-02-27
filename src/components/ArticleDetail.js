import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "./ArticleComments";

export default function ArticleDetail(props) {
  const { id } = useParams();
  const API_URL = "https://react-yazi-yorum-ffi3.onrender.com";
  const [articleDetail, setArticleDetail] = useState({});
  const [articleComments, setArticleComments] = useState([]);

  const handleCommentSubmit = (event, comment) => {
    event.preventDefault();
    axios.post(`${API_URL}/posts/${id}/comments`, comment).then((response) => {
      setArticleComments([...articleComments, response.data]);
    });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`${API_URL}/posts/${id}`),
        axios.get(`${API_URL}/posts/${id}/comments`),
      ])
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
      <ArticleComments
        articleComments={articleComments}
        handleSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
}
