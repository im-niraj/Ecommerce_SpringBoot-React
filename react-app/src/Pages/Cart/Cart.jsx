import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {

    return (
        <div className='container my-4'>
            <div className="card mb-3" style={{ maxWidth: "740px" }}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src='https://rukminim1.flixcart.com/image/416/416/l4ei1e80/memory-card/microsdhc/o/h/a/mi210-hp-original-imagfaffktzghqtt.jpeg?q=70' className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small class="text-muted">Price : <span>1250.00</span></small></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-body">
                            <h4 className="card-title">Total Price</h4>
                            <p className="card-title"><span>1250</span> * <span>12</span> = <span>5550</span> </p>
                            <div className='d-flex align-items-center justify-content-between mb-4'>
                                <i class="fa fa-minus-circle text-secondary fs-3 " aria-hidden="true"></i>
                                <span className='fs-2 text-center border border-4 rounded-3 w-50' >12</span>
                                <i class="fa fa-plus-circle text-secondary fs-3" aria-hidden="true"></i>
                            </div>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;