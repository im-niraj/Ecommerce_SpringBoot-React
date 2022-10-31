import React, { useState } from 'react'
import { addProduct } from '../../api/authenticationService';
import { useSelector } from 'react-redux';
const noImage = "https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png";

const AddProduct = () => {
    const state = useSelector((state) => state);
    const [imagePreview, setImagePreview] = useState('');
    const [newProductValue, setNewProductValue] = useState({
        itemTitle: '',
        price: '',
        description: '',
        brand: '',
        category: '',
        image: ''
    });
    // This is iPhone 12 mini  front 12mp camera and Rear 12mp+12mp camera
    const addProducts = (evt) => {
        evt.preventDefault();
        // console.log(userId);
        addProduct(newProductValue, state.userInfo.user.userId).then((res) => {
            console.log("Server response: ", res.data);
            clearInputField();
        }).catch(err => {
            console.log("error: ", err);
        })
    }
    const inputHandle = (event) => {
        event.persist();
        if (event.target.name === 'image') {
            setImagePreview(event.target.value);
        }
        setNewProductValue(newValue => ({
            ...newValue,
            [event.target.name]: event.target.value
        }))
    }
    const clearInputField = () => {
        setNewProductValue({
            itemTitle: '',
            price: '',
            description: '',
            brand: '',
            category: '',
            image: ''
        })
        setImagePreview('');
    }


    return (
        <div className="mt-5">
            <form className="row g-3" onSubmit={addProducts} noValidate={false}>
                <div className="col-md-8 offset-md-2 text-center d-flex justify-content-center" >
                    <div className='border rounded p-3' style={{ height: "300px", width: "250px", overflow: "hidden" }}>
                        <img src={imagePreview !== '' ? imagePreview : noImage} style={{ width: "100%", objectFit: 'cover' }} alt="..." />

                    </div>

                </div>

                <div className="col-md-8 offset-md-2">
                    <div className="col-md-6 offset-md-3">
                        <label htmlFor="image" className="form-label">Image Url</label>
                        <input type="text" name='image' value={newProductValue.image} onChange={inputHandle} className="form-control" id="image" placeholder='https://...' />
                    </div>
                </div>

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
                    <label htmlFor="itemTitle" className="form-label">Title</label>
                    <input type="text" name='itemTitle' value={newProductValue.itemTitle} onChange={inputHandle} className="form-control" id="itemTitle" placeholder='Product name' />
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
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-primary">Add Product</button>
                    <button type="button" onClick={() => clearInputField()} className="btn btn-dark ms-2">Clear input field</button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirm to add new product to database</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* <div class="modal-body">
                                Want to Add the proudct in Database
                            </div> */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    )
}

export default AddProduct