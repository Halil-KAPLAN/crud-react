import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { deleteArticle, deleteArticleComment } from "../actions";

export default function DeleteModal({ deleteObject, componentType }) {
  const dispatch = useDispatch();
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.articleDeleteError);

  const handleDelete = ({ id, post_id }) => {
    if (componentType === "article") {
      dispatch(
        deleteArticle(id, () => {
          close();
          navigate("/");
        })
      );
    } else {
      dispatch(
        deleteArticleComment(id, post_id, () => {
          close();
        })
      );
    }
  };

  return (
    <React.Fragment>
      {componentType === "article" ? (
        <Button color="red" onClick={show}>
          Delete
        </Button>
      ) : (
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            show();
          }}
        >
          Delete
        </a>
      )}

      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Delete Article</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete?</p>
          {error && (
            <div className="ui error message">
              <div className="header">API ERROR!!!</div>
              <p>{error}</p>
            </div>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            No
          </Button>
          <Button
            positive
            onClick={() => {
              handleDelete(deleteObject);
            }}
          >
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
}
