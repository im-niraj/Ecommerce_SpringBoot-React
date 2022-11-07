import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { cartItems, addProductToCart, removeProductFromCartById, deleteProductFromCartById } from '../../api/authenticationService';
import { cartItemCount } from '../../redux/authActions';
import emptyCartImage from "../../assets/emptycart.png";
import './Cart.css';

function Cart() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [cartItem, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCartItems = () => {
        cartItems(state.userInfo.user.userId).then(res => {
            setCartItem(res.data);
            dispatch(cartItemCount(res.data.length));
            console.log(res);
            let sum = 0;
            res.data.forEach(e => {
                sum += (e.quantity * e.product.price);
            })
            setTotalPrice(sum);
        })
    }
    const deleteCartItem = (productId) => {
        deleteProductFromCartById(productId, state.userInfo.user.userId).then(res => {
            alert(res.data);
            fetchCartItems();
        }).catch(err => {
            console.log("Error-Handle: ", err)
        })
    }
    useEffect(() => {
        if (Object.keys(state.userInfo).length > 0) {
            fetchCartItems();
        }
    }, [state]);



    const increseQuantity = (productId, currQty) => {
        console.log(productId);
        if (currQty < 4) {
            addProductToCart(productId, state.userInfo.user.userId).then(res => {
                fetchCartItems();
            }).catch(err => {
                console.log("Error-Handle: ", err);
            })
        }
        else {
            alert("Maximum allowed quantity 4");
        }
    }
    const decreseQuantity = (productId, currQty) => {
        console.log(productId);
        if (currQty <= 1) {
            alert("Delete the product by clicking on delete button");
        }
        else {
            removeProductFromCartById(productId, state.userInfo.user.userId).then(res => {
                fetchCartItems();
            }).catch(err => {
                console.log("Error-Handle: ", err);
            })
        }
    }

    const gotoShoping = () => {
        history('/home');
    }

    return (

        <div className='container my-4' style={{ minHeight: "calc(100vh - 184px)", maxHeight: "calc(100vh - 184px)" }}>
            {
                cartItem.length == 0 ?
                    (
                        <div className='d-flex flex-column '>
                            <div className='d-flex justify-content-center' >
                                <img src={emptyCartImage} alt="" />
                            </div>
                            <div className='d-flex justify-content-center' >
                                <h4 className='text-danger fw-bold fs-1'>Oops!  Your cart is empty!</h4>
                            </div>
                            <div className='text-center text-info fw-bold fs-5' >
                                <p className='m-0'>Looks like you haven't added</p>
                                <p className='m-0'>anything to your cart yet</p>
                            </div>
                            <div className="d-grid gap-2 col-2 mx-auto mt-5">
                                <button onClick={() => gotoShoping()} className="btn btn-primary" type="button">Shop Now</button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="row">
                            <div className="col-md-8  top-10  mh-100" >
                                <div className='overflow-scroll' style={{ maxHeight: "calc(100vh - 184px)" }}>
                                    {cartItem && cartItem.map((el, index) => (
                                        <div key={el.product.id} className="card mb-3" style={{ maxWidth: "840px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src={el.product.image} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <div className='d-flex justify-content-between'>
                                                            <p className='text-muted fw-bold '>{el.product.brand}</p>
                                                            <p className='text-danger fw-bold '> Product <span>{index + 1}</span></p>
                                                        </div>
                                                        <h5 className="card-title">{el.product.itemTitle}</h5>
                                                        <small className="text-primary fs-6">{el.product.category}</small>
                                                        <p className="card-text text-truncate">{el.product.description}</p>
                                                        <p className="card-text"><small className="text-muted fw-bold ">Price : <span>{parseFloat(el.product.price).toFixed(2)}</span></small></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="card-body">
                                                        <h4 className="card-title">Total Price</h4>
                                                        <p className="card-title"><span>{el.product.price}</span> * <span>{el.quantity}</span> = <span>{el.product.price * el.quantity}</span> </p>
                                                        <div className='d-flex align-items-center justify-content-between mb-4'>
                                                            <i role="button" onClick={() => decreseQuantity(el.product.id, el.quantity)} className={`fa fa-minus-circle  fs-3 ${el.quantity <= 1 ? "text-light" : "text-info"}`} aria-hidden="true"></i>
                                                            <span className='fs-2 text-center border border-4 rounded-3 w-50' >{el.quantity}</span>
                                                            <i role="button" onClick={() => increseQuantity(el.product.id, el.quantity)} className={`fa fa-plus-circle  fs-3 ${el.quantity >= 4 ? "text-light" : "text-info"}`} aria-hidden="true"></i>
                                                        </div>
                                                        <button onClick={() => deleteCartItem(el.product.id)} className='btn btn-danger'>Delete</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4 position-static top-10 bottom-0 ">
                                <h1>Checkout</h1>
                                <h5>Total price:  <span>{totalPrice}</span></h5>
                                <p className='text-muted'>Delivery Address</p>
                                <button className='btn btn-warning'>checkout</button>
                            </div>
                        </div>
                    )
            }
        </div >
    );
}

export default Cart;