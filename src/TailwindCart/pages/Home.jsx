import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products'
function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get('https://fakestoreapi.com/products');
        setProducts(responce.data)
      } catch (err) {
        console.log(err, 'error found');
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {products ? <Products products={products} /> : 'not found'}

    </>
  )
}

export default Home