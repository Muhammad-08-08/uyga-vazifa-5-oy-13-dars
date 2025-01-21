import { Routes, Route } from "react-router-dom";
import Header from "./components/header/index";
import Navbar from "./components/navbar/index";
import OsonQidiruv from "./components/oson_qidiruv/index";
import ProductDetail from "./components/productPage/index";
import Home from "./components/home";
import SavolJavoblar from "./components/savol_javoblar";
import Kategories from "./components/kategories";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <OsonQidiruv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/savolJavoblar" element={<SavolJavoblar />} />
        <Route path="/kategories" element={<Kategories />} />
      </Routes>
    </div>
  );
}

export default App;
