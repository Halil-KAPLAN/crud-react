import React from "react";

export default function CommentList({ articleComments }) {
  return (
    <React.Fragment>
      <h3>Comments</h3>
      {articleComments.map(({ display_name, body, id }) => {
        return (
          <div className="ui relaxed list" key={id}>
            <div className="item">
              <div className="content">
                <span className="header">{display_name}</span>
                <div className="description">{body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
