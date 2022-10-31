import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getAllProductBySeller, deleteProductById } from '../../api/authenticationService'
const Products = () => {
    const state = useSelector((state) => state);
    const [product, setProducts] = useState([]);
    const [deleteFlag, setDeleteFlag] = useState(false);
    const [productId, setProductId] = useState('');


    useEffect(() => {
        getAllProductBySeller(state.userInfo.user.userId).then(response => {
            setProducts(response.data);
        })
    }, [deleteFlag]);


    const setId = (productId) => {
        setProductId(productId);
    }

    const deleteProduct = () => {
        if (productId !== '') {
            deleteProductById(productId, state.userInfo.user.userId).then(res => {
                setDeleteFlag(!deleteFlag);
            });
        }
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
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.length > 0 ? (product.map((item, i) => (

                        <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td className='text-truncate' style={{ maxWidth: '150px' }}>{item.itemTitle}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td className='text-truncate' style={{ maxWidth: '190px' }}>{item.description}</td>
                            <td className='d-flex justify-content-center'>
                                <button onClick={() => editProduct(item.id)} className='btn btn-outline-primary'><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <button onClick={() => setId(item.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn btn-outline-danger ms-2'><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </td>
                            <td>
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="false">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Are you sure to delete the prouduct?</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                After confirm data will Permanently delete
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                <button onClick={() => deleteProduct(item.id)} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))) : <tr><td colSpan={7}>No data yet</td></tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Products