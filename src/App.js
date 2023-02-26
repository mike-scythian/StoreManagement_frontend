import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stores from "./files/Stores"
import Users from "./files/Users"
import Orders from "./files/Orders"
import Products from "./files/Products";
import NewProduct from "./files/prod-pages/NewProduct";
import LayoutAdmin from "./files/LayoutAdmin"
import EditProduct from "./files/prod-pages/EditProduct";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Stores />} />
          <Route path="products" element={<Products />} />
            <Route path = "new-product" element = {<NewProduct/>}/>{}
            <Route path = ":id" element = {<EditProduct/>}/>{}
          <Route path="stores" element={<Stores />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;