import React, { useState } from "react";

const COMMENT_STARTER = {
  display_name: "",
  body: "",
};

export default function CommentForm({ handleSubmit }) {
  const [comment, setComment] = useState(COMMENT_STARTER);

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <h3>Add Comment</h3>
      <form
        className="ui form"
        onSubmit={(event) => {
          handleSubmit(event, comment);
          setComment(COMMENT_STARTER);
        }}
      >
        <div className="ui mini icon input">
          <input
            type="text"
            name="display_name"
            placeholder="Your Name"
            value={comment.display_name}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <textarea
          rows="2"
          name="body"
          placeholder="Comments"
          value={comment.body}
          onChange={(e) => handleOnChange(e)}
        ></textarea>
        <button className="ui primary button" type="submit">
          Save
        </button>
      </form>
    </React.Fragment>
  );
}
