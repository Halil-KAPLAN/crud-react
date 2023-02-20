import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="main_wrapper">
      <header></header>
      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" exact element={<ArticleList />} />
          <Route path="posts/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
