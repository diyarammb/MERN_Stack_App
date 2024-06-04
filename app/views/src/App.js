import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Main/Home";
import Product from './Pages/Main/Products'

const App =()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/product" element={<Product />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
