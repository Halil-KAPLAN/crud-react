import React from "react";
import { Link } from "react-router-dom";

export default function CommentList({ articleComments }) {
  function onClickDeleteButton(event) {
    event.preventDefault();
    //Todo: later
  }

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
                  <a href="/" onClick={onClickDeleteButton}>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
