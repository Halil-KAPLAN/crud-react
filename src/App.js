import React from "react";
import { Route, Routes } from "react-router-dom";
import AddArticle from "./components/AddArticle";
import ArticleDetail from "./components/ArticleDetail";
import ArticleList from "./components/ArticleList";
import EditArticle from "./components/EditArticle";
import EditComment from "./components/EditComment";

function App() {
  return (
    <div className="main_wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" exact element={<ArticleList />} />
          <Route path="/posts/:id" exact element={<ArticleDetail />} />
          <Route path="/addArticle" element={<AddArticle />} />
          <Route path="/posts/:id/edit" element={<EditArticle />} />
          <Route path="/posts/:id/comment/:commentId" element={<EditComment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
