import { categoryServer } from "../constants/category";

import "./category.css";
import React from "react";

const Category = ({ setSelectedCategoryHandle, selectedCategory }) => {
  return (
    <div className="category__father-top">
      <div className="container">
        <div className="category__products">
          {categoryServer.map((elem) => {
            return (
              <button
                onClick={() => setSelectedCategoryHandle(elem.Name)}
                key={elem.Name}
                style={{
                  background: elem.Name === selectedCategory && "red",
                }}
              >
                <span
                  style={{
                    background: elem.Name === selectedCategory && "red",
                  }}
                >
                  {elem.Name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
