import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {

    const [products, setProducts] = useState([])

    async function getProducts() {

        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data)

        if (res.status == 200) {
            setProducts(res.data.products)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const addProduct = () => {
        const testProduct = {
            "id": 36,
            "title": "Trupti product"
        }
        products.push(testProduct)
        setProducts(products)
    }

    const removeProduct = () => {
        products.pop();
    }
    function handleDelete(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    return (
        <div>
            <h2>Products List</h2>
            {products.length === 0 ? (
                <div>No products found.</div>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id} style={{ marginBottom: '10px' }}>
                            <span>{product.title}</span>
                            <button style={{ marginLeft: '10px' }}>Add</button>
                            <button style={{ marginLeft: '5px' }} onClick={() => handleDelete(product.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}