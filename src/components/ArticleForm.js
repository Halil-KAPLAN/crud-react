import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleForm() {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", content: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const onInputChange = (event) =>
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrorMsg("");
    axios
      .post("https://react-yazi-yorum-ffi3.onrender.com/posts", article)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg(error.response.data.errorMessage);
      });
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
      <button className="ui button">Discard</button>
    </div>
  );
}
