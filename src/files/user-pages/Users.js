import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";



const baseUrl = 'http://localhost:8181/users';


const Users = () => {

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [page,setPage] = useState(0)

  useEffect(() =>{
                  axios(baseUrl + "?page=" + page)
                          .then(response => {
                      	    console.log(response.data)
                              console.log(baseUrl.concat(page))
                            setData(response.data)
                            })
                          .catch(err => console.log(err))
              }, [])

  const removeUser = (id, index) => {

      axios.delete(baseUrl+"/"+id)
            .then(response => {
              console.log(response.status)
            })
            
      let dataRows = data.filter( item => item.id !== id)
      setData(dataRows)
    }

    const handlePageClick = (page) =>{
        console.log("click")
        axios(baseUrl + "?page=" +page.selected)
            .then(response => {
              console.log(response.data)
              setData(response.data)
              })
            .catch(err => console.log(err))
      }           

    const Rows = data.map( (row, index) => {
                          return (
                            <tr key = {index}>
                              <td>{row.id}</td>
                              <td>{row.firstName}</td>
                              <td>{row.lastName}</td>
                              <td>{row.email}</td>
                              <td>{row.roles}</td>
                              <td>{row.storeId}</td>
                              <td>
                              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-warning" onClick = {() => navigate("/users/"+row.id)}>edit</button>
                                <button type="button" className="btn btn-danger" onClick = {e => removeUser(row.id, e)}>delete</button>
                              </div>
                              </td>
                            </tr>
                          )})

        

  return (
    <div className="container w-75">
      <h2>Users</h2>
        <table className="table table-dark table-striped align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ROLE</th>
              <th scope="col">STORE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Rows}
          </tbody>
        </table>
        <div className="container m-3 d-flex justify-content-center">
          <ReactPaginate
            pageCount={3}
            marginPagesDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}/>
        </div>
        <div className="container m-3 d-flex justify-content-center">
          <button type="button" className="btn btn-success" onClick={() => navigate("/users/new-user")}>NEW USER</button>
        </div>
    </div>

   )
}

export default Users;