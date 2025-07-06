import Layout from "@/Layout/Layout";

import Products from "@/lib/components/Product/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import ProductInfo from "@/lib/components/Product/ProductInfo";
import productDetailLoader from "@/lib/components/Product/ProductInfo";

import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route
            path="/products/:id"
            loader={productDetailLoader}
            element={<ProductInfo />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
