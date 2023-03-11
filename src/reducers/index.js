const INITIAL_STATE = {
  articleList: [],
  articleDetail: {
    title: "",
    created_at: "",
    id: 0,
    content: "",
    articleComments: [
      {
        display_name: "",
        body: "",
        id: 0,
        post_id: 0,
      },
    ],
  },
  articleListError: "",
  articleDetailError: "",
  articleAddError: "",
  articleDeleteError: "",
  articleAddUpdateError: "",
};

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "GET_ARTICLE_LIST":
      return { ...state, articleList: payload, articleListError: "" };
    case "GET_ARTICLE_LIST_ERROR":
      return { ...state, articleListError: payload };
    case "GET_ARTICLE_DETAIL":
      return { ...state, articleDetail: payload, articleDetailError: "" };
    case "GET_ARTICLE_DETAIL_ERROR":
      return { ...state, articleDetailError: payload };
    case "ADD_ARTICLE_DETAIL":
      return {
        ...state,
        articleDetail: {
          ...state.articleDetail,
          articleComments: [...state.articleDetail.articleComments, payload],
        },
        articleAddError: "",
      };
    case "ADD_ARTICLE_DETAIL_ERROR":
      return { ...state, articleAddError: payload };
    case "DELETE_ARTICLE":
      return {
        ...state,
        articleList: state.articleList.filter(
          (article) => article.id !== payload
        ),
        articleDeleteError: "",
      };
    case "DELETE_ARTICLE_COMMENT":
      return {
        ...state,
        articleDetail: {
          ...state.articleDetail,
          articleComments: state.articleDetail.articleComments.filter(
            (comment) => comment.id !== payload.id
          ),
        },
        articleDeleteError: "",
      };
    case "DELETE_ARTICLE_ERROR":
      return { ...state, articleDeleteError: payload };
    case "ADD_ARTICLE":
      return {
        ...state,
        articleList: [...state.articleList, payload],
        articleAddUpdateError: "",
      };
    case "UPDATE_ARTICLE":
      return {
        ...state,
        articleDetail: { ...state.articleDetail, ...payload },
        articleAddUpdateError: "",
      };
    case "ADD_UPDATE_ARTICLE_ERROR":
      return { ...state, articleAddUpdateError: payload };
    default:
      return state;
  }
};
