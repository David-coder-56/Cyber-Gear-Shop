import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Product from "./pages/Product";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import SearchPage from "./pages/SearchPage";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import CartDrawer from "./components/CartDrawer";
import CyberToast from "./components/CyberToast";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <CartDrawer />
      <CyberToast />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Navigate to="/shop" replace />} />
          <Route path="/about" element={<Navigate to="/support" replace />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
