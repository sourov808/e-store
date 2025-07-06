const SearchItems = () => {
  return (
    <div
      className="border flex flex-col  md:flex-row items-center mx-auto
    justify-center md:justify-between   "
    >
      <input
        type="text"
        className="border-2 w-9/12 md:w-5/12 px-3 py-1.5 border-gray-400"
        placeholder="Search"
      />
      <div className="flex flex-wrap border  md:flex-row md:gap-3">
        <select name="" id="" className="border rounded px-13 py-2  sm:w-48">
          <option>All Categories</option>
        </select>
        <div>
          <input
            type="number"
            placeholder="Min price"
            className="border rounded px-3 py-2  sm:w-32"
          />{" "}
          <input
            type="number"
            placeholder="Max price"
            className="border rounded px-3 py-2  sm:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
