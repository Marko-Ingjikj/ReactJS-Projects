import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../common/actions/actions";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  company: string;
  image: string;
  shipping: boolean;
  colors: Array<string>;
}

const Shop = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: any) => state.shop);

  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  const [activeColorFilter, setActiveColorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("3000");
  const [searchFilter, setSearchFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [freeShippingFilter, setFreeShippingFilter] = useState(false);

  console.log(products);

  // Populating products in store
  useEffect(() => {
    if (products.length == 0) {
      axios
        .get("https://course-api.com/react-store-products")
        .then((response) => dispatch(fetchData(response.data)));
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    setActiveCategoryFilter(category);
  };

  const handleColorChange = (color: string) => {
    setColorFilter(color);
    setActiveColorFilter(color);
  };

  // Filtering products
  const filteredProducts = useMemo(() => {
    if (
      !categoryFilter &&
      !colorFilter &&
      !searchFilter &&
      !companyFilter &&
      priceFilter == "3000"
    ) {
      return products; // No filters applied, return all products
    } else {
      let filteringProductsConst = products.filter(
        (product: Product) => product == product
      );

      if (categoryFilter) {
        filteringProductsConst = filteringProductsConst.filter(
          (product: Product) => product.category == categoryFilter
        );
        console.log(filteringProductsConst);
      }
      if (colorFilter) {
        filteringProductsConst = filteringProductsConst.filter(
          (product: Product) =>
            product.colors.some((color) => color == colorFilter)
        );
      }
      if (companyFilter) {
        filteringProductsConst = filteringProductsConst.filter(
          (product: Product) => product.company == companyFilter
        );
      }
      if (searchFilter) {
        filteringProductsConst = filteringProductsConst.filter(
          (product: Product) =>
            product.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
      }
      if (freeShippingFilter) {
        filteringProductsConst = filteringProductsConst.filter(
          (product: Product) => product.shipping
        );
      }
      return filteringProductsConst;
    }
  }, [
    products,
    companyFilter,
    priceFilter,
    categoryFilter,
    searchFilter,
    colorFilter,
  ]);

  return (
    <div className="shop">
      <Header />

      <main>
        <div className="filter-div">
          <input
            type="text"
            className="search-products"
            placeholder="Search"
            onChange={(e) => setSearchFilter(e.target.value)}
          />

          <div className="categories">
            <p>
              <b>Category</b>
            </p>

            <button
              className={`category-button ${
                activeCategoryFilter === "" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("")}>
              All
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "office" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("office")}>
              Office
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "living room" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("living room")}>
              Living Room
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "kitchen" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("kitchen")}>
              Kitchen
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "bedroom" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("bedroom")}>
              Bedroom
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "dining" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("dining")}>
              Dining
            </button>

            <button
              className={`category-button ${
                activeCategoryFilter === "kids" ? "active-category" : ""
              }`}
              onClick={() => handleCategoryChange("kids")}>
              Kids
            </button>
          </div>

          <div className="company-div">
            <p>
              <b>Company</b>
            </p>
            <select
              name="company"
              id="company"
              onChange={(e) => setCompanyFilter(e.target.value)}>
              <option value="">Any</option>
              <option value="marcos">Marcos</option>
              <option value="liddy">Liddy</option>
              <option value="ikea">IKEA</option>
              <option value="caressa">Caressa</option>
            </select>
          </div>

          <div className="colors-div">
            <button
              className={`color-button-all  ${
                activeColorFilter === "" ? "active-color-all" : ""
              }`}
              onClick={() => handleColorChange("")}>
              All
            </button>

            <button
              className={`color-button red ${
                activeColorFilter === "#ff0000" ? "active-color" : ""
              }`}
              onClick={() => handleColorChange("#ff0000")}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${
                  activeColorFilter === "#ff0000" ? "active-color" : ""
                }`}>
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            </button>

            <button
              className={`color-button green ${
                activeColorFilter === "#00ff00" ? "active-color" : ""
              }`}
              onClick={() => handleColorChange("#00ff00")}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${
                  activeColorFilter === "#00ff00" ? "active-color" : ""
                }`}>
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            </button>

            <button
              className={`color-button yellow ${
                activeColorFilter === "#ffb900" ? "active-color" : ""
              }`}
              onClick={() => handleColorChange("#ffb900")}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${
                  activeColorFilter === "#ffb900" ? "active-color" : ""
                }`}>
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            </button>

            <button
              className={`color-button blue ${
                activeColorFilter === "#0000ff" ? "active-color" : ""
              }`}
              onClick={() => handleColorChange("#0000ff")}>
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${
                  activeColorFilter === "#0000ff" ? "active-color" : ""
                }`}>
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            </button>

            <button
              className={`color-button black ${
                activeColorFilter === "#000" ? "active-color" : ""
              }`}
              onClick={() => handleColorChange("#000")}>
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${
                  activeColorFilter === "#000" ? "active-color" : ""
                }`}>
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
              </svg>
            </button>
          </div>

          <div className="range-div">
            <p>
              <b>Price</b>
            </p>
            <p>$ {priceFilter}</p>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={3000}
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </div>

          <div className="free-shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={() => setFreeShippingFilter(!freeShippingFilter)}
            />
          </div>
        </div>

        <div className="products-div">
          {filteredProducts.map((product: Product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
