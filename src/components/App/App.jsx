import { Route, Routes } from "react-router-dom";

import React from "react";
import Main from "../Main/Main";
import Vide from "../Video/Vide";
import Search from "../Search/Search";
import Chanel from "../Chanel/Chanel";
import Header from "../Header/Header";
import SearchBar from "../Search-bar/Search-bar";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chanel-users/:id" element={<Chanel />} />
        <Route path="/video-users/:id" element={<Vide />} />
        <Route path="/search-elements/:id" element={<SearchBar />} />
      </Routes>
    </div>
  );
};

export default App;
