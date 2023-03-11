import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Stores from "./files/ADMIN/store-pages/Stores"
import StoreDetails from "./files/ADMIN/store-pages/StoraDetails";
import Orders from "./files/ADMIN/order-pages/Orders"
import Products from "./files/ADMIN/prod-pages/Products";
import NewProduct from "./files/ADMIN/prod-pages/NewProduct";
import LayoutAdmin from "./files/ADMIN/LayoutAdmin"
import EditProduct from "./files/ADMIN/prod-pages/EditProduct";
import OrderDetails from "./files/ADMIN/order-pages/OrderDetails";
import CreateStore from "./files/ADMIN/store-pages/CreateStore";
import UpdateStore from "./files/ADMIN/store-pages/UpdateStore";
import Users from "./files/ADMIN/user-pages/Users";
import NewUser from "./files/ADMIN/user-pages/NewUser";
import UpdateUser from "./files/ADMIN/user-pages/UpdateUser";
import LayoutStore from "./files/STORE/LayoutStore";
import StoreStock from "./files/STORE/StoreStock";
import PasswordUpdate from "./files/STORE/PasswordUpdate";
import StoreInfo from "./files/STORE/StoreInfo";
import StoreOrder from "./files/STORE/StoreOrder";
import StoreOrderDetails from "./files/STORE/StoreOrderDetails";


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
        <Route path = "/store/:id" element={<LayoutStore/>}>
          <Route index element={<StoreStock/>}/>
          <Route path="/store/:id/stocks" element={<StoreStock/>}/> {}
          <Route path="/store/:id/password" element={<PasswordUpdate/>}/>{}
          <Route path="/store/:id/orders" element={<StoreOrder/>}/> {}
          <Route path="/store/:id/orders/details" element={<StoreOrderDetails/>}/>{}
          <Route path="/store/:id/info" element = {<StoreInfo/>}/>{}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;