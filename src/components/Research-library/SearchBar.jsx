const SearchBar = () => {
  return (
    <>
      <div className="bg-cyan-900 p-5 mt-12 rounded-3xl">
        <div className="grid grid-cols-5 gap-2 items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Select Year
            </option>
            <option>2020</option>
            <option>2022</option>
          </select>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Select Author
            </option>
            <option>author 1</option>
            <option>author 2</option>
          </select>
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Select Journal
            </option>
            <option>Journal 1</option>
            <option>Journal 2</option>
          </select>
          <div className="flex items-center justify-center gap-2">
            <button className="btn btn-primary">Search</button>
            <button className="btn btn-ghost">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
