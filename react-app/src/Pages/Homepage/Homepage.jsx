
import React, { useEffect, useState, useReducer } from 'react';
import { getAllProduct } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import { userInfoFetched, userInfoLost } from '../../redux/authActions';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

function Homepage(props) {
    const history = useNavigate();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const allProducts = async () => {
        getAllProduct().then(res => {
            setData(res.data);
        }).catch(err => {
            console.log("Error ", err);
        });
    }


    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
        allProducts();
    }, []);

    const productDetails = (id) => {
        history(`/product/${id}`);
    }

    return (
        <div className='container' style={{ minHeight: "80vh" }}>
            <div className="d-flex flex-wrap">
                {data.map(({ id, itemTitle, category, price, image }) => (
                    <div key={id} className="card ms-4 my-4" style={{ width: "18rem", height: "27rem" }} onClick={() => productDetails(id)}>
                        <div style={{ height: "100%", width: "100%", overflow: "hidden" }} >
                            <img src={image} style={{ width: "100%", objectFit: 'cover' }} className="card-img-top img-fluid" alt={itemTitle} />
                        </div>
                        <div className="card-body border-top">
                            <h5 className="card-title  text-truncate">{itemTitle}</h5>
                            <p className="card-text m-0">{category}</p>
                            <h5 className='mt-2'>&#8377;<span className='text-danger'>{((price).toLocaleString('en-IN'))}</span></h5>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
}

export default Homepage;