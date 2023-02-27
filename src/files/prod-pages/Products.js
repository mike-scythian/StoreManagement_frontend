import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const baseUrl = 'http://localhost:8181/products?page=';


const Products = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  var page = 0

  useEffect(() =>{
                  axios.get(baseUrl+0)
                          .then(response => {
                      	    console.log(response.data)
                            setData(response.data)
                            })
                          .catch(err => console.log(err))
              }, [])

  const removeProduct = (id, index) => {

      axios.delete(baseUrl+"/"+id)
            .then(response => {
              console.log(response.status)
            })
            
      let dataRows = data.filter( item => item.id !== id)
      setData(dataRows)
    }

    const paging = (currentPage) =>{
      axios(baseUrl+currentPage)
        .then(response => {
          console.log(response.data)
          setData(response.data)
          })
        .catch(err => console.log(err))
    }

    const incrementPage = () => {

        page++
        paging(page)
    }

    const decrementPage = () => {

      if(page !== 0)
        page--
      paging(page)
  }

    const Rows = data.map( (productRow, index) => {
                          return (
                            <tr  className="table-info" key = {index}>
                              <td>{productRow.id}</td>
                              <td>{productRow.name}</td>
                              <td>{productRow.type}</td>
                              <td>{productRow.price}</td>
                              <td>{productRow.units}</td>
                              <td>
                                <button type="button" className="btn btn-warning" onClick = {() => navigate("/products/"+productRow.id)}>edit</button>
                                <button type="button" className="btn btn-danger" onClick = {e => removeProduct(productRow.id, e)}>delete</button>
                              </td>
                            </tr>
                          )})

  return (
    <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
              <th scope="col">Units</th>
            </tr>
          </thead>
          <tbody>
            {Rows}
          </tbody>
        </table>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={() => decrementPage()}>PREV</button>
          <button type="button" className="btn btn-secondary" onClick={() => incrementPage()}>NEXT</button>
        </div>
        <div>
          <button type="button" className="btn btn-success" onClick={() => navigate("/products/new-product")}>NEW PRODUCT</button>
        </div>
      </div>

   )
}

export default Products;