import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";



const storeUrl = 'http://localhost:8181/stores/'

const usersUrl =  'http://localhost:8181/users?page=-1'


const StoreDetails = () => {

  const [data, setData] = useState([])

  const [sellers, setSellers] = useState([])

  const [leftovers, setLeftovers] = useState([])

  const [users, setUsers] = useState([])

  //const [newNameStore, setNewNameStore] = useState({newName:''})

  const navigate = useNavigate();

  const storeId = useParams()

  var selectedUser = -1
  
  useEffect(() =>{
                axios(storeUrl.concat(storeId.id))
                          .then(response => {
                            setData(response.data)
                            setSellers(response.data.sellers)})
                          .catch(err => console.log(err))
                axios(storeUrl.concat(storeId.id) + "/stocks")
                            .then(response => {
                                setLeftovers(response.data)
                            })
                            .catch(err => console.log(err))
                axios(usersUrl)
                            .then(response => {
                                setUsers(response.data)
                            })
                            .catch(err => console.log(err))
              },[])

  const SellerList = sellers.map((seller, index) => {
    return(
        <ul className="list-group" key={index}>
            <li className="list-group-item">{seller.firstName} {seller.lastName} {seller.email}</li>
        </ul>
    )})

    const Body = leftovers.map((item, index)=>{
        return(
                <tr key = {index}>
                  <td>{item.productName}</td>
                  <td>{item.productType}</td>
                  <td>{item.quantity}</td>
                </tr>
    )})

    const UserList = users.map((user, index) => {
        return (
                <option value={user.id} key={index}>{user.firstName} {user.lastName}</option>
        )})

    function setupSeller(event){
        event.preventDefault()
        axios.patch(usersUrl+ "/"+ selectedUser + "?newStoreId=" + storeId.id, [])
            .then(response => {
                console.log(response.status)
            })
            .catch(error => console.log(error))

        window.location.reload()  
    }

    function getUserId(event){
        selectedUser = event.target.value
    }

    function removeStore (){

        axios.delete(storeUrl.concat(storeId.id))
              .then(response => {
                console.log(response.status)
                navigate("/stores")
              })
      }
                  
  return (
   <div className="container row">
        <div className="col card m-3 p-2">

            <header className="w3-container w3-black">
                <h4 className="card-header">{data.name}</h4>
            </header>

            <div className="container">
                <p>Opened {data.openDate}</p>
                <hr/>
                <p><strong>Total income</strong> : {data.income}</p>
                <hr/>
                <h4>Sellers:</h4>
                {SellerList}
                <form onSubmit={setupSeller}>
                <h5 className="m-3">All sellers : </h5>
                <div className="container">
                    <div className="row">
                        <select defaultValue = "--select user--" className="custom-select mb-3" name="option" onChange={getUserId}>
                            {UserList}
                        </select>
                            <button type = "submit" className="btn btn-success m-2" >INSTALL SELLER</button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
        <div className="col m-3">
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Type</th>
                <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {Body}
            </tbody>
            </table>
        </div>
        <div className="m-3">
            <button className="btn btn-warning m-3" onClick={() => navigate("/stores/update/"+storeId.id)}>CHANGE STORE NAME</button>
            <button className="btn btn-danger m-3" onClick={removeStore}>DELETE STORE</button>
        </div>
      
    </div>
   )
}

export default StoreDetails;