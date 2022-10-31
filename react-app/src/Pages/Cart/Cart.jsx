import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartItems } from '../../api/authenticationService';
import './Cart.css';

function Cart() {
    const state = useSelector((state) => state);
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        if (Object.keys(state.userInfo).length > 0) {
            cartItems(state.userInfo.user.userId).then(res => {
                setCartItem(res.data);
                console.log(res);
            })
        }
    }, [state])
    // "col-md-4 position-static top-10 bottom-0 h-100"
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-8 vh-100 top-10 overflow-auto">
                    {cartItem && cartItem.map(el => (
                        <div key={el.product.id} className="card mb-3" style={{ maxWidth: "840px" }}>
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src={el.product.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <p className='text-muted '>{el.product.brand}</p>
                                        <h5 className="card-title">{el.product.itemTitle}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Price : <span>{parseFloat(el.product.price).toFixed(2)}</span></small></p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card-body">
                                        <h4 className="card-title">Total Price</h4>
                                        <p className="card-title"><span>{el.product.price}</span> * <span>{el.quantity}</span> = <span>{el.product.price * el.quantity}</span> </p>
                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                            <i role="button" className="fa fa-minus-circle text-secondary fs-3 " aria-hidden="true"></i>
                                            <span className='fs-2 text-center border border-4 rounded-3 w-50' >{el.quantity}</span>
                                            <i role="button" className="fa fa-plus-circle text-secondary fs-3" aria-hidden="true"></i>
                                        </div>
                                        <button className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4 position-static top-10 bottom-0 h-100">
                    <h1>Checkout</h1>
                    <h5>Total price</h5>
                    <p className='text-muted'>Delivery Address</p>
                    <button className='btn btn-warning'>checkout</button>
                </div>
            </div>




        </div>
    );
}

export default Cart;