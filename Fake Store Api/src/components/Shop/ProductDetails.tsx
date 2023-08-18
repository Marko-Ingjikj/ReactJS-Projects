import { Link } from "react-router-dom";
import Header from "./Header";

import ProductDetailsImages from "./ProductDetailsImages";
import ProductDetailsText from "./ProductDetailsText";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <div className="product-details-page">
        <div className="back-button">
          <Link className="back-button-text" to={"/"}>
            BACK TO PRODUCTS
          </Link>
        </div>
        <div className="product-details-page-items">
          <ProductDetailsImages />
          <ProductDetailsText />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
