import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api";

export default function ArticleForm({ articleData }) {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", content: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (articleData && Object.keys(articleData).length > 0) {
      setArticle(articleData);
    }
  }, [articleData]);

  const onInputChange = (event) =>
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrorMsg("");

    if (id) {
      api()
        .put(`/posts/${id}`, article)
        .then((_response) => {
          navigate(`/posts/${id}`);
        })
        .catch((error) => {
          setErrorMsg(error.response.data.errorMessage);
        });
    } else {
      api()
        .post("/posts", article)
        .then((_response) => {
          navigate("/");
        })
        .catch((error) => {
          setErrorMsg(error.response.data.errorMessage);
        });
    }
  };

  return (
    <div className={"ui form " + (errorMsg && "error")}>
      <div className="ui error message">
        <div className="header">Action Forbidden</div>
        <p>{errorMsg}</p>
      </div>

      <div className="field">
        <label>Post title</label>
        <input
          value={article.title}
          name="title"
          type="text"
          onChange={onInputChange}
        />
      </div>
      <div className="field">
        <label>Post Content</label>
        <textarea
          value={article.content}
          name="content"
          rows="3"
          onChange={onInputChange}
        ></textarea>
      </div>
      <button className="ui primary button" onClick={onFormSubmit}>
        Save
      </button>
      <Link to="/" className="ui button">Discard</Link>
    </div>
  );
}
