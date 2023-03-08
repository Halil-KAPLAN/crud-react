import api from "../api";

export const getArticleList = () => (dispatch) => {
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
        payload: error,
      });
    });
};
