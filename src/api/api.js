import axios from "axios";
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const result = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const songResult = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return songResult.data;
  } catch (error) {
    console.log(error);
  }
};
