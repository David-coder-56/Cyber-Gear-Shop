import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Product from "./pages/Product";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import SearchPage from "./components/SearchBar";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default App;
