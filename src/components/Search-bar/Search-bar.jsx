import { useParams } from "react-router-dom";
import { ApiService } from "../Service/api.service";

import "./search-bar.css";
import Vide from "../Video/Vide";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideo(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="search__page">
      <div className="container">
        <div className="search__massage">
          <h3>
            Search result for <span>{id}</span> videos
          </h3>
        </div>
        <Vide videos={video} />
      </div>
    </div>
  );
};

export default SearchBar;
