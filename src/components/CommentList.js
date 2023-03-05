import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

export default function CommentList({ articleComments }) {
  return (
    <React.Fragment>
      <h3>Comments</h3>
      {articleComments.map(({ display_name, body, id, post_id }) => {
        return (
          <div className="ui comments" key={id}>
            <div className="comment">
              <div className="content">
                <div className="author">{display_name}</div>
                <div className="text">{body}</div>
                <div className="actions">
                  <Link to={`/posts/${post_id}/comment/${id}`}>Edit</Link>
                  <DeleteModal
                    deleteObject={{ id, post_id }}
                    componentType="comment"
                  ></DeleteModal>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
