import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../api/authenticationService'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProduct().then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
    }, [])

    return (
        <div>Products</div>
    )
}

export default Products