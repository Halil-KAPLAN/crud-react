import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import api from "../api";

export default function DeleteModal({ deleteObject, componentType }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const navigate = useNavigate();

  const handleDelete = (deleteObj) => {
    const deleteURL =
      componentType === "article"
        ? `/posts/${deleteObj.id}`
        : `/posts/${deleteObj.post_id}/comments/${deleteObj.id}`;

    api()
      .delete(deleteURL)
      .then(() => {
        setError("");
        close();
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.errorMessage);
      });
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
