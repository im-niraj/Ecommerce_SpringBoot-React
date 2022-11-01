import React from 'react'
import AddProduct from './AddProduct';
import AdminTabs from './AdminTabs'
import Products from './Products';
import UpdateProduct from './UpdateProduct';


const Admin = () => {
    const data = [
        {
            heading: "Add Product",
            body: <AddProduct />
        },
        {
            heading: "All Product",
            body: <Products />
        },
        {
            heading: "Update Product",
            body: <UpdateProduct />
        }
    ];
    return (
        <div className="container" style={{ minHeight: "80vh" }}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULOtzVJNuhZz0ox-N3J46ZnnnjHYyVNNYCQ&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-2">
                    <AdminTabs data={data} />
                </div>
            </div>
        </div>
    )
}

export default Admin