import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import ReactPaginate from "react-paginate";
import axios from "axios";

const baseUrl = 'http://localhost:8181/orders/stores/'


const StoreOrder = () => {

    const idParam = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [page,setPage] = useState(0)

    useEffect(()=>{
        axios(baseUrl.concat(idParam.id).concat("?page=").concat(page))
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(err => console.log(err))
    },[])

    const handlePageClick = (page) =>{
        console.log("click")
        axios(baseUrl.concat(idParam.id).concat("?page=").concat(page.selected))
              .then(response => {
                  console.log(response.data)
                  setData(response.data)
              })
              .catch(err => console.log(err))
      }  

    const OrdersList = data.map( (orderRow, index) => {
        return (
          <tr key = {index}>
            <td>{orderRow.id}</td>
            <td>{orderRow.createTime}</td>
            <td>{orderRow.status}</td>
            <td>
              <button type="button" className="btn btn-warning" onClick = {()=>navigate("/store/"+ idParam.id +"/orders/details/")}>details</button>
            </td>
          </tr>
        )})

    return(
        <div className="container w-50">
      <h2>Orders</h2>
       <table className="table table-dark table-striped align-middle">
        <thead>
           <tr>
            <th scope="col">ID</th>
            <th scope="col">CREATE TIME</th>
            <th scope="col">STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {OrdersList}
        </tbody>
      </table>
      <div className="container m-3 d-flex justify-content-center">
          <ReactPaginate
            pageCount={5}
            marginPagesDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}/>
        </div>
        <div className="container m-3 d-flex justify-content-center">
          <button type="button" className="btn btn-primary m-3" >Sort by date</button>
          <button type="button" className="btn btn-primary m-3" >Sort by status</button>
        </div>
    </div>
    )
}

export default StoreOrder;