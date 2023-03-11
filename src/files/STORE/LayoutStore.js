import { Outlet, Link } from "react-router-dom";
import {useNavigate, useParams} from "react-router-dom";

const LayoutStore = () => {

  const id = useParams()

  const productsLink = "/store/" + id.id + "/stocks"
  const ordersLink = "/store/" + id.id + "/orders"
  const infoLink = "/store/" + id.id + "/info"
  
  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link 
              to = {productsLink}
              className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link 
              to={ordersLink}
              className="nav-link">Orders</Link>
          </li>
          <li className="nav-item">
            <Link 
            to={infoLink}
            className="nav-link">Info</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default LayoutStore;