import "./App.css";
// Components
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
// import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [animeList, SetAnimeList] = useState([]);
  const [randomAnime, SetRandomAnime] = useState({});
  const [search, SetSearch] = useState("");

  //getTop

  const GetTopAnime = async () => {
    const temp = await axios.post(`http://localhost:4000/proxy`, {
      url: "https://api.jikan.moe/v4/top/anime/",
      method: "GET",
    });

    SetTopAnime(temp.data.data.slice(0, 10));
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  // search

  const HandleSearch = (e) => {
    e.preventDefault();

    FeatchAnime(search);
  };

  const FeatchAnime = async (query) => {
    const temp = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=acs&limit=10`
    );

    SetAnimeList(temp.data);
  };

  //random
  const RandomAnime = async () => {
    const temp = await axios.get(`https://api.jikan.moe/v4/random/anime`);
    SetRandomAnime(temp.data);
  };

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header
          HandleSeach={HandleSearch}
          search={search}
          animeList={animeList}
          SetSearch={SetSearch}
        />
        <SearchPage animeList={animeList} search={search} />

        <Routes>
          <Route
            path="/"
            // element={<MainPage topAnime={topAnime} animeList={animeList} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/topanime"
            element={<MainPage topAnime={topAnime} animeList={animeList} />}
          />
          <Route
            path="/random"
            element={<MainPage randomAnime={randomAnime} />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
