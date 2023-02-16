import { useState, useEffect } from "react";
import { ApiService } from "../Service/api.service";

import "./main.css";
import React from "react";
import moment from "moment/moment";
import Vide from "../Video/Vide";
import Category from "../Category/Category";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const setSelectedCategoryHandle = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);

  return (
    <main className="main">
      <div className="container">
        <div className="category__father">
          <Category
            setSelectedCategoryHandle={setSelectedCategoryHandle}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="selected__category">
          <h1>
            {selectedCategory} <span>videos</span>
          </h1>
        </div>
        <Vide videos={videos} />
      </div>
    </main>
  );
};

export default Main;
