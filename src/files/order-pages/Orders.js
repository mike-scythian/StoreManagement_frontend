import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const baseOrderUrl = 'http://localhost:8181/orders?page=';


const Orders = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  var page = 0

  useEffect(() =>{
                  axios.get(baseOrderUrl+0)
                          .then(response => {
                      	    console.log(response.data)
                            setData(response.data)
                            })
                          .catch(err => console.log(err))
              }, [])

    const paging = (currentPage) =>{
      axios(baseOrderUrl+currentPage)
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

    const Rows = data.map( (orderRow, index) => {
                          return (
                            <tr  className="table-info" key = {index}>
                              <td>{orderRow.id}</td>
                              <td>{orderRow.createTime}</td>
                              <td>{orderRow.store}</td>
                              <td>{orderRow.status}</td>
                              <td>
                                <button type="button" className="btn btn-warning" onClick = {() => navigate("/orders/"+orderRow.id)}>details</button>
                              </td>
                            </tr>
                          )})

  return (
    <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CREATE TIME</th>
              <th scope="col">STORE</th>
              <th scope="col">STATUS</th>
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
      </div>

   )
}

export default Orders;