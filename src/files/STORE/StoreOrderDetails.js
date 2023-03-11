import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";



const orderUrl = 'http://localhost:8181/orders/'


const StoreOrderDetails = () => {

  const [data, setData] = useState([])

  const orderId = useParams()

  const navigate = useNavigate()

  
  useEffect(() =>{
                  axios(orderUrl.concat(orderId.id))
                          .then(response => {
                            setData(response.data)})
                          .catch(err => console.log(err))
              },[]) 

  const pushClick =() => {
   console.log(orderUrl.concat(orderId.id) +"/push")
    axios.put(orderUrl.concat(orderId.id) +"/push/",[])
				  .then(response => {
					  console.log(response.data);
					  window.location = "/orders"
				})
				.catch(err => console.log(err))
  }
                  
   const ProductList = data.map((item, index)=>{
    return(
            <tr key = {index}>
              <td>{item.productName}</td>
              <td>{item.productType}</td>
              <td>{item.quantity}</td>
            </tr>
  )})        
  return (
    <div className="container w-50">
        <h2>Order № {orderId.id}</h2>
        <table className="table table-dark table-striped align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {ProductList}
          </tbody>
        </table>
        <div className="container m-3 d-flex justify-content-center">
          <button type="button" className="btn btn-success m-3" onClick={() => navigate()}>ADD ROW</button>
          <button type="button" className="btn btn-success m-3" onClick={() => pushClick()}>ACCEPT</button>
        </div>
      </div>
      

   )
}

export default StoreOrderDetails;