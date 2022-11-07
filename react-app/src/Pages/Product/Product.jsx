import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, getProductById, cartItems } from '../../api/authenticationService';
import { removeSelectedProduct, selectedProduct, cartItemCount } from '../../redux/authActions'

const Product = (props) => {
    const state = useSelector((state) => state);
    const product = state.selectedProductReducer;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchCartItems = () => {
        cartItems(state.userInfo.user.userId).then(res => {
            dispatch(cartItemCount(res.data.length));
            console.log(res);
        })
    }
    useEffect(() => {
        if (productId && productId !== "") {
            getProductById(productId, state.userInfo.user.userId).then(res => {
                dispatch(selectedProduct(res.data));
            })
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);


    const addToCart = () => {
        addProductToCart(productId, state.userInfo.user.userId).then(res => {
            alert(res.data);
            fetchCartItems();
        })
    }

    return (

        <div className="container text-center " style={{ minHeight: "80vh" }}>
            <div className="d-flex border-bottom">
                <div className="col-5 offset-md-1 ">
                    <img src={product.image} alt="" style={{ width: "100%" }} />
                </div>
                <div className="col-5 border-start text-start ps-2">
                    <h2>{product.itemTitle}</h2>
                    <p>{product.description}</p>
                    <p>{product.brand}</p>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4>&#8377; {product.price}</h4>
                        <button className='btn btn-primary' onClick={addToCart}>Add to cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product