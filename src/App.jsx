import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero.jsx";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api.js";
import Section from "./Section/Section.jsx";
import QAccordion from "./QAccordion/QAccordion.jsx";
const App = () => {
  const [totalData, setTotalData] = useState([]);
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    const topAlbumRes = await fetchTopAlbums();
    console.log(topAlbumRes);
    setTopAlbum(topAlbumRes);

    const newAlbumRes = await fetchNewAlbums();
    console.log(newAlbumRes);
    setNewAlbum(newAlbumRes);

    const songsRes = await fetchSongs();
    setSongs(songsRes);

    setTotalData([...topAlbumRes, ...newAlbumRes]);
    console.log(totalData);
  };
  return (
    <>
      <Navbar totalData={totalData} />
      <Hero />
      <Section title="Top Albums" data={topAlbum} />
      <Section title="New Albums" data={newAlbum} />
      <Section
        title="Songs"
        data={songs}
        type={"songs"}
        setCurrentSong={setCurrentSong}
      />
      <QAccordion />
    </>
  );
};

export default App;
