import React, { useEffect, useState } from 'react'
import Products from '../components/Products';
import { useParams } from 'react-router';
import axios from 'axios';

function CategoriesPage() {

    const [category, setCategory] = useState([])
    const {type}=useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(`https://fakestoreapi.com/products/category/${type}`);
                setCategory(responce.data)
            } catch (err) {
                console.log(err, 'error found');
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {category && <Products products={category} />}
        </div>
    )
}

export default CategoriesPage