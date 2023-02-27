import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function ArticleComments({ handleSubmit, articleComments }) {
  return (
    <React.Fragment>
      <CommentList articleComments={articleComments} />
      <CommentForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}
