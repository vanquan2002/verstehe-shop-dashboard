import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AddProduct from "./screens/AddProduct";
import ProductEditScreen from "./screens/ProductEditScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import UsersScreen from "./screens/UsersScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct" element={<ProductEditScreen />} />
          <Route path="/category" element={<CategoriesScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
          <Route path="/order" element={<OrderDetailScreen />} />
          <Route path="/users" element={<UsersScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
