import React, { useEffect, useState } from 'react'
import { getAllProduct, deleteProductById } from '../../api/authenticationService'
const Products = () => {
    const [product, setProducts] = useState([]);
    const [deleteFlag, setDeleteFlag] = useState(false);
    useEffect(() => {
        getAllProduct().then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
    }, [deleteFlag])

    const deleteProduct = (productId) => {
        const message = deleteProductById(productId);
        alert(message);
        setDeleteFlag(!deleteFlag);
    }


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
                            <td><button onClick={() => deleteProduct(item.id)} className='btn btn-outline-success'><i className="fa fa-trash" aria-hidden="true"></i></button> </td>
                        </tr>
                    ))) : <tr>No data yet</tr>
                    }
                </tbody>
            </table>

        </>
    )
}

export default Products