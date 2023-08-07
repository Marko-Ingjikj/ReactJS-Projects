import About from "../../components/Layout/About";
import Contact from "../../components/Layout/Contact";
import Layout from "../../components/Layout/Layout";
import Shop from "../../components/Shop/Shop";
import ProductDetails from "../../components/Shop/ProductDetails";

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
