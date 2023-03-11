import api from "../api";

const getArticleList = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({
        type: "GET_ARTICLE_LIST",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ARTICLE_LIST_ERROR",
        payload: error.message,
      });
    });
};

const getArticleDetail = (id) => (dispatch) => {
  Promise.all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((response) => {
      dispatch({
        type: "GET_ARTICLE_DETAIL",
        payload: {
          ...response[0].data,
          articleComments: response[1].data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ARTICLE_DETAIL_ERROR",
        payload: error.message,
      });
    });
};

const addArticleDetail = (id, comment) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, comment)
    .then((response) =>
      dispatch({
        type: "ADD_ARTICLE_DETAIL",
        payload: response.data,
      })
    )
    .catch((error) => {
      dispatch({
        type: "ADD_ARTICLE_DETAIL_ERROR",
        payload: error.message,
      });
    });
};

const deleteArticle = (id, handle) => (dispatch) => {
  api()
    .delete(`/posts/${id}`)
    .then(() => {
      console.log(id);
      dispatch({
        type: "DELETE_ARTICLE",
        payload: id,
      });
      handle && handle();
    })
    .catch((error) => {
      dispatch({ type: "DELETE_ARTICLE_ERROR", payload: error.message });
    });
};

const deleteArticleComment = (id, post_id, handle) => (dispatch) => {
  dispatch({ type: "DELETE_ARTICLE_ERROR", payload: "" });
  api()
    .delete(`/posts/${post_id}/comments/${id}`)
    .then(() => {
      dispatch({
        type: "DELETE_ARTICLE_COMMENT",
        payload: { id, post_id },
      });
      handle && handle();
    })
    .catch((error) => {
      dispatch({ type: "DELETE_ARTICLE_ERROR", payload: error.message });
    });
};

const updateArticle =
  (id, { title, content }, handle) =>
  (dispatch) => {
    api()
      .put(`/posts/${id}`, { title, content })
      .then((response) => {
        dispatch({
          type: "UPDATE_ARTICLE",
          payload: response.data,
        });
        handle && handle();
      })
      .catch((error) => {
        dispatch({
          type: "ADD_UPDATE_ARTICLE_ERROR",
          payload: error.response?.data?.errorMessage || error.message,
        });
      });
  };

const addArticle = (article, handle) => (dispatch) => {
  api()
    .post("/posts", article)
    .then((response) => {
      dispatch({ type: "ADD_ARTICLE", payload: response.data });
      handle && handle();
    })
    .catch((error) => {
      dispatch({
        type: "ADD_UPDATE_ARTICLE_ERROR",
        payload: error.response?.data?.errorMessage,
      });
    });
};

export {
  getArticleList,
  getArticleDetail,
  addArticleDetail,
  deleteArticle,
  deleteArticleComment,
  updateArticle,
  addArticle,
};
