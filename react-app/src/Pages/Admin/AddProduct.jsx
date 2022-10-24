import React from 'react'

const AddProduct = () => {
    return (
        <div className="mt-5">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Category</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Electronics</option>
                        <option>TV & Appliances</option>
                        <option>Men</option>
                        <option>Women</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="itemName" class="form-label">Item Name</label>
                    <input type="text" class="form-control" id="itemName" placeholder='Mobile' />
                </div>
                <div class="col-md-6">
                    <label for="inputBrand" class="form-label">Brand</label>
                    <input type="text" class="form-control" id="inputBrand" placeholder='Samsung' />
                </div>
                <div class="col-6">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input type="number" class="form-control" id="inputPrice" placeholder="00.00" />
                </div>
                <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea type="text" class="form-control" id="inputDescription" placeholder="Enjoy seamless connectivity and an uninterrupted movie" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct