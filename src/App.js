import React, { useEffect, useState } from "react";
import getArticle from "./components/articles/article";

const Articles = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const article = getArticle();
      setData(article);
      console.log(article);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div>No data found!</div>
  } else {
    return (
      <div>
        <p>{data.fields}</p>
      </div>
    )
  }
}

export default Articles;