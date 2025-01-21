import { Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import OsonQidiruv from "./components/oson_qidiruv/index";
import ProductDetail from "./components/productPage/index";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <OsonQidiruv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
