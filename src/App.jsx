/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

import EnlargedPhoto from "./components/EnlargedPhoto";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query, category }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = query;

      if (query && category) {
        searchQuery = `${query} ${category}`;
      } else if (category) {
        searchQuery = category;
      }

      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });
      setPhotos(response.data.results);
      return;
    }

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey,
        count: 100,
      },
    });
    setPhotos(response.data);
  };

  useEffect(() => {
    fetchData(query, category);
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, category });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div>
      <SearchBar
        setQuery={setQuery}
        setCategory={setCategory}
        setActivateSearch={setActivateSearch}
      />
      <PhotoList photos={photos} setEnlargedPhoto={setEnlargedPhoto} />
      {enlargedPhoto && <EnlargedPhoto photo={enlargedPhoto} setEnlargedPhoto={setEnlargedPhoto} />}
    </div>
  );
}

export default App;
