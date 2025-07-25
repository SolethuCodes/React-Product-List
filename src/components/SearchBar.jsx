import React from "react";

function SearchBar({ search, setSearch, category, setCategory, inStockOnly, setInStockOnly, categories }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "0.5rem" }}
      >
        <option value="All">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        In Stock Only
      </label>
    </div>
  );
}

export default SearchBar;
