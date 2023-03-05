import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import CommentForm from "./CommentForm";

export default function EditComment() {
  const { id, commentId } = useParams();
  const navigate = useNavigate();
  const [commentData, setCommentData] = useState({});

  useEffect(() => {
    api()
      .get(`/posts/${id}/comments`)
      .then((response) => {
        setCommentData(
          response.data.find((data) => data.id.toString() === commentId)
        );
      });
  }, [id, commentId]);

  const handleCommentSubmit = (event, comment) => {
    event.preventDefault();
    api()
      .put(`/posts/${id}/comments/${commentId}`, comment)
      .then((_response) => {
        navigate(`/posts/${id}`);
      });
  };

  return (
    <div>
      <h1>Editing comment</h1>
      <CommentForm
        handleSubmit={handleCommentSubmit}
        commentData={commentData}
      />
    </div>
  );
}
