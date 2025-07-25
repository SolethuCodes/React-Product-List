import { useState } from "react";
import products from "./data/products";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (!inStockOnly || product.inStock)
  );

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        categories={categories}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
