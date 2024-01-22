import { useState, useEffect } from "react";

import EnlargedPhoto from "./components/EnlargedPhoto";
import PhotoList from "./components/PhotoList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <PhotoList />
      <EnlargedPhoto />
    </div>
  );
}

export default App;
