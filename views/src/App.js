import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from "./Pages/Main/Home";
import Product from './Pages/Main/Products'
import Register from "./Pages/Main/Auth/Register";
import Login from "./Pages/Main/Auth/Login";
import UserGroup from "./Pages/Main/Groups/UserGroup";
import UserGroupListing from "./Pages/Main/Groups/UserGroupListing";
import Dashboard from "./Pages/Main/Dashboard/Index";

const App =()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/product" element={<Product />} /> 
      {/* auth part */}
      <Route path="/register" element={<Register />} /> 
      <Route path="/login" element={<Login />} /> 

      {/* Group part */}
      <Route path="/usergroup" element={<UserGroup />} /> 
      <Route path="/usergroupListing" element={<UserGroupListing />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
