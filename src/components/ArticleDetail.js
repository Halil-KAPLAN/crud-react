import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addArticleDetail, getArticleDetail } from "../actions";
import ArticleComments from "./ArticleComments";
import DeleteModal from "./DeleteModal";

export default function ArticleDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleDetail = useSelector((state) => state.articleDetail);

  useEffect(() => {
    dispatch(getArticleDetail(id));
  }, [id, dispatch]);

  const handleCommentSubmit = (event, comment) => {
    event.preventDefault();
    dispatch(addArticleDetail(id, comment));
  };

  return (
    <React.Fragment>
      {articleDetail && (
        <React.Fragment>
          <h2 className="ui header">{articleDetail.title}</h2>
          <p>{articleDetail.created_at}</p>
          <p>{articleDetail.content}</p>
          <div className="ui buttons">
            <Link className="ui blue button" to={`/posts/${id}/edit`}>
              Edit
            </Link>
            <DeleteModal
              deleteObject={articleDetail}
              componentType="article"
            ></DeleteModal>
          </div>
          <ArticleComments
            articleComments={articleDetail.articleComments}
            handleSubmit={handleCommentSubmit}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
