import React from "react";

const Search = () => {
  return (
    <div className="pt-12 p-4 mt-8">
      <div>
        <p className=" font-bold text-4xl text-slate-600 font-serif">
          Search projects of your choice
        </p>
        <p className=" text-xl tracking-wide pt-2">
          Projects in multiple categories available.
        </p>
      </div>
      <div>
        <input
          className="outline outline-blue-400 outline-2 w-full h-12 rounded-xl mt-4 p-4 text-xl "
          type="text"
          placeholder="Type name of project"
        />
      </div>
    </div>
  );
};

export default Search;
