import axios from "axios";
import { useEffect } from "react";
import Product from "./Product";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../common/actions/actions";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  brand: string;
  thumbnail: string;
  images: Array<string>;
}

const Shop = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: any) => state.shop);
  console.log(products);

  // Populating products in store
  useEffect(() => {
    if (products.length == 0) {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => dispatch(fetchData(response.data.products)));
    }
  }, []);

  return (
    <div className="shop">
      <Header />

      <main>
        <div className="filter-div">
          <input type="text" className="search-products" />
          <div className="categories">
            <p>
              <b>Category</b>
            </p>
            <button>Smartphones</button>
            <button>Laptops</button>
            <button>Fragrances</button>
            <button>Skincare</button>
            <button>Groceries</button>
            <button>Home decoration</button>
          </div>

          <div className="brands">
            <p>
              <b>Brand</b>
            </p>
            <select name="brand" id="brand">
              <option value="">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OPPO">OPPO</option>
              <option value="Huawei">Huawei</option>
              <option value="Microsoft Surface">Microsoft Surface</option>
              <option value="Infinix">Infinix</option>
              <option value="HP Pavilion">HP Pavilion</option>
              <option value="Impression of Acqua Di Gio">
                Impression of Acqua Di Gio
              </option>
              <option value="Royal_Mirage">Royal_Mirage</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>

        <div className="products-div">
          {products.map((product: Product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              images={product.images}
              brand={product.brand}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
