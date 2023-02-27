import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const baseUrl = 'http://localhost:8181/orders'


const OrderDetails = () =>{

    const localId = useParams()

	const [order, setOrder] = useState(
		{
			id : 0,
			createTime : '',
			products : {},
			status : '',
		})

    useEffect(() => {
        axios(baseUrl + "/" + localId.id)
            .then(response => {
                console.log(response)
                setOrder(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    /*const Rows = order.map( (row,index) =>{
        return (
            <tr  className="table-info" key = {index}>
              <td>{row.products.name}</td>
              <td>{row.products.data}</td>
              <td>{row.products.key}</td>
            </tr>
          )})*/

    return(
		<div className = "container mt-3">
			<h2>Order № {localId.id}</h2>
			<table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Type</th>
                    <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                </table>
		</div>
	);
}

export default OrderDetails