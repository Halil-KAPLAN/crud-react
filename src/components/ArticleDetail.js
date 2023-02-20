import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetail(props) {
  const { id } = useParams();
  const [articleDetail, setArticleDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum-ffi3.onrender.com/posts/${id}`)
      .then(({ data }) => {
        setArticleDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

console.log(articleDetail);

  return (
    <React.Fragment>
      <h2 className="ui header">{articleDetail.title}</h2>
      <p>{articleDetail.created_at}</p>
      <p>{articleDetail.content}</p>
    </React.Fragment>
  );
}
