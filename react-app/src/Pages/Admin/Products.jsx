import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../api/authenticationService'
const Products = () => {
    const [product, setProducts] = useState([]);
    const [data, getData] = useState([]);
    useEffect(() => {
        getAllProduct().then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <>
            <h1>Products</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.length > 0 ? (product.map((item, i) => (

                        <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.itemName}</td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><i className="fa fa-pencil" aria-hidden="true"></i> <i className="fa fa-trash ms-2" aria-hidden="true"></i></td>
                        </tr>
                    ))) : <tr>No data yet</tr>
                    }
                </tbody>
            </table>

        </>
    )
}

export default Products