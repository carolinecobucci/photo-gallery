const SearchBar = ({ setQuery, setCategory, setActivateSearch }) => {
  const categories = ["Nature", "People", "Tecnology", "Animals", "Sports", "Books"];

  return (
    <div className="flex gap-3 justify-center w-full my-6">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Enter a search term..."
        className="border px-3 py-2 w-64"
      />
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          setActivateSearch(true);
        }}
        className="border px-3 py-2"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={() => setActivateSearch(true)}
        className="border bg-gray-100 px-3 py-2 hover:bg-gray-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
