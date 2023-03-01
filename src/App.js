import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stores from "./files/store-pages/Stores"
import Users from "./files/Users"
import Orders from "./files/order-pages/Orders"
import Products from "./files/prod-pages/Products";
import NewProduct from "./files/prod-pages/NewProduct";
import LayoutAdmin from "./files/LayoutAdmin"
import EditProduct from "./files/prod-pages/EditProduct";
import OrderDetails from "./files/order-pages/OrderDetails";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Stores />} />
          <Route path="products" element={<Products />} />
            <Route exact path = "/products/new-product" element = {<NewProduct/>}/>{}
            <Route exact path = "/products/:id" element = {<EditProduct/>}/>{}
          <Route path="stores" element={<Stores />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
            <Route exact path = "/orders/:id" element = {<OrderDetails/>}/>{}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;