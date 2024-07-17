import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Category() {
    const [category, setCategory] = useState([])
    const {type}=useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get('https://fakestoreapi.com/products/categories');
                setCategory(responce.data)
            } catch (err) {
                console.log(err, 'error found');
            }
        }
        fetchData()
    }, [])



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Product Category</h2>
                </div>
                <div className="flex flex-wrap">
                    {category.map((categories) => {
                        return <Link to={`/categories/${categories}`} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{categories.toUpperCase()}</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </Link>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Category