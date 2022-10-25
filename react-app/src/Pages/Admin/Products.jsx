import React, { useEffect, useState } from 'react'
import { getAllProduct, deleteProductById } from '../../api/authenticationService'
const Products = () => {
    const [product, setProducts] = useState([]);
    const [deleteFlag, setDeleteFlag] = useState(false);
    useEffect(() => {
        getAllProduct().then(response => {
            setProducts(response.data);
        })
    }, [deleteFlag])

    const deleteProduct = (productId) => {
        deleteProductById(productId).then(res => {
            alert(res);
            setDeleteFlag(!deleteFlag);
        });
        // console.log(message);
        // alert(message);

    }
    const editProduct = (productId) => {
        console.log("Edit Proudct", productId);
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
                            <td className='d-flex justify-content-center'>
                                <button onClick={() => editProduct(item.id)} className='btn btn-outline-primary'><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button onClick={() => deleteProduct(item.id)} className='btn btn-outline-danger ms-2'><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    ))) : <tr><td colSpan={6}>No data yet</td></tr>
                    }
                </tbody>
            </table>

        </>
    )
}

export default Products