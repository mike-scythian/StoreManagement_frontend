import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const baseStoreUrl = 'http://localhost:8181/stores?page=';


const Stores = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  var page = 0

  useEffect(() =>{
                  axios.get(baseStoreUrl+0)
                          .then(response => {
                      	    console.log(response.data)
                            setData(response.data)
                            })
                          .catch(err => console.log(err))
              }, [])

    const paging = (currentPage) =>{
      axios(baseStoreUrl+currentPage)
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

  const Rows = data.map( (row, index) => {
                          return (
                            <tr  className="table-info" key = {index}>
                              <td>{row.id}</td>
                              <td>{row.name}</td>
                              <td>{row.openDate}</td>
                              <td>{row.income}</td>
                              <td>
                                <button type="button" className="btn btn-warning" onClick = {()=>navigate("/stores/"+row.id)}>details</button>
                              </td>
                            </tr>
                          )})

  return (
    <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">OPEN DATE</th>
              <th scope="col">INCOME</th>
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

export default Stores;