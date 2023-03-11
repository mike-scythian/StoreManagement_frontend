import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";



const storeUrl = 'http://localhost:8181/stores/'

const usersUrl =  'http://localhost:8181/users'


const StoreStock = () => {

  const [leftovers, setLeftovers] = useState([])

  const navigate = useNavigate();

  const storeId = useParams()

  
  useEffect(() =>{
                axios(storeUrl.concat(storeId.id) + "/stocks")
                            .then(response => {
                                setLeftovers(response.data)
                            })
                            .catch(err => console.log(err))
              },[])

    const Body = leftovers.map((item, index)=>{
        return(
                <tr key = {index}>
                  <td>{item.productName}</td>
                  <td>{item.productType}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button type="button" className="btn btn-success" >sale</button>
                  </td>
                </tr>
    )})
                  
  return (
   <div className="container">        
            <table className="table table-dark table-striped align-middle">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Type</th>
                <th scope="col">Quantity</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {Body}
            </tbody>
            </table>  
    </div>
   )
}

export default StoreStock;