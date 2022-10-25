import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../api/authenticationService';
import { removeSelectedProduct, selectedProduct } from '../../redux/authActions'

const Product = (props) => {
    const product = useSelector(state => state.selectedProductReducer);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    useEffect(() => {
        if (productId && productId !== "") {
            getProductById(productId).then(res => {
                dispatch(selectedProduct(res.data));
            })
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);
    return (
        <div className="container text-center ">
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
                        <button className='btn btn-primary'>Add to cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product