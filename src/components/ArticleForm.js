import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addArticle, updateArticle } from "../actions";

export default function ArticleForm({ articleData }) {
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: "", content: "" });
  const errorMsg = useSelector((state) => state.articleAddUpdateError);
  const { id } = useParams();
  const dispatch = useDispatch();

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

    if (id) {
      dispatch(
        updateArticle(id, article, () => {
          navigate(`/posts/${id}`);
        })
      );
    } else {
      dispatch(
        addArticle(article, () => {
          navigate("/");
        })
      );
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
      <Link to="/" className="ui button">
        Discard
      </Link>
    </div>
  );
}
