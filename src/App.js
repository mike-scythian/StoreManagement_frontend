import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Stores from "./files/store-pages/Stores"
import StoreDetails from "./files/store-pages/StoraDetails";
import Orders from "./files/order-pages/Orders"
import Products from "./files/prod-pages/Products";
import NewProduct from "./files/prod-pages/NewProduct";
import LayoutAdmin from "./files/LayoutAdmin"
import EditProduct from "./files/prod-pages/EditProduct";
import OrderDetails from "./files/order-pages/OrderDetails";
import CreateStore from "./files/store-pages/CreateStore";
import UpdateStore from "./files/store-pages/UpdateStore";
import Users from "./files/user-pages/Users";
import NewUser from "./files/user-pages/NewUser";
import UpdateUser from "./files/user-pages/UpdateUser";


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
            <Route exact path = "/stores/new-store" element = {<CreateStore/>}/>{}
            <Route exact path = "/stores/update/:id" element = {<UpdateStore/>}/>{}
            <Route exact path = "/stores/:id" element = {<StoreDetails/>}/>{}
          <Route path="users" element={<Users />} />
            <Route exact path = "/users/new-user" element = {<NewUser/>}/>{}
            <Route exact path= "/users/:id" element = {<UpdateUser/>} /> {}
          <Route path="orders" element={<Orders />} />
            <Route exact path = "/orders/:id" element = {<OrderDetails/>}/>{}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;