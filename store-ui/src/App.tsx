import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login/Login";
import MyPage from "./pages/MyPage/MyPage";

const App = (props: any) => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </Layout>
  );
};
export default App;
