import React, { useState } from 'react'
import { addProduct } from '../../api/authenticationService';

const AddProduct = () => {
    const [newProductValue, setNewProductValue] = useState({
        category: '',
        itemName: '',
        brand: '',
        price: '',
        description: ''
    });
    // This is iPhone 12 mini  front 12mp camera and Rear 12mp+12mp camera
    const addProducts = (evt) => {
        evt.preventDefault();
        addProduct(newProductValue).then((res) => {
            alert(res.data);
            setNewProductValue({
                category: '',
                itemName: '',
                brand: '',
                price: '',
                description: ''
            })
            // console.log(res);
        }).catch(err => {
            console.log("error: ", err);
        })
    }
    const inputHandle = (event) => {
        event.persist();
        setNewProductValue(newValue => ({
            ...newValue,
            [event.target.name]: event.target.value
        }))
    }


    return (
        <div className="mt-5">
            <form className="row g-3" onSubmit={addProducts} noValidate={false}>
                <div className="col-md-4 offset-md-2">
                    <label htmlFor="inputState" className="form-label">Category</label>
                    <select name='category' id="inputState" value={newProductValue.category} onChange={inputHandle} className="form-select">
                        <option value=''>Choose...</option>
                        <option>Electronics</option>
                        <option>TV & Appliances</option>
                        <option>Men</option>
                        <option>Women</option>
                    </select>
                </div>
                <div className="col-md-4 ">
                    <label htmlFor="itemName" className="form-label">Item Name</label>
                    <input type="text" name='itemName' value={newProductValue.itemName} onChange={inputHandle} className="form-control" id="itemName" placeholder='Mobile' />
                </div>
                <div className="col-md-4 offset-md-2">
                    <label htmlFor="inputBrand" className="form-label">Brand</label>
                    <input type="text" name='brand' value={newProductValue.brand} onChange={inputHandle} className="form-control" id="inputBrand" placeholder='Samsung' />
                </div>
                <div className="col-md-4 ">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" name='price' value={newProductValue.price} onChange={inputHandle} className="form-control" id="inputPrice" placeholder="00.00" />
                </div>
                <div className="col-md-8 offset-md-2">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <textarea type="text" name='description' value={newProductValue.description} onChange={inputHandle} className="form-control" id="inputDescription" placeholder="Enjoy seamless connectivity and an uninterrupted movie" />
                </div>
                <div className="col-md-8 offset-md-2">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct