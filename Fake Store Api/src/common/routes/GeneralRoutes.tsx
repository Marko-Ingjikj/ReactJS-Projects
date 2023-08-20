import About from "../../components/Layout/About";
import Contact from "../../components/Layout/Contact";
import Layout from "../../components/Layout/Layout";
import Shop from "../../components/Shop/Shop";
import ProductDetails from "../../components/Shop/ProductDetails";
import Cart from "../../components/Shop/Cart";
import Account from "../../components/Shop/Account";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "/:id",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
};

export default GeneralRoutes;
