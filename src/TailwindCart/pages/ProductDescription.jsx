import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router';
import axios from 'axios';

function ProductDescription() {


    const [product, setProduct] = useState({})
    const {id}=useParams()
    useEffect(() => {
        const fetchData = async () => {
            try{
                const responce = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(responce.data)
                console.log(responce.data);
            }catch(err){
                console.log(err,'error found');
            }
        }
        fetchData()
    }, [])

    return (
        <ProductDetail product={product} />

    )
}

export default ProductDescription