const INITIAL_STATE = {
  articleList: [],
  articleListError: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ARTICLE_LIST":
      return { ...state, articleList: action.payload };
    case "GET_ARTICLE_LIST_ERROR":
      return { ...state, articleListError: action.payload };
    default:
      return state;
  }
};
