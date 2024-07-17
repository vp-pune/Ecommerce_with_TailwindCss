import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Products({ products }) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    );


    console.log(filteredProducts);
    return (
        <>
            <div className='flex flex-col items-center mt-10 w-full'>
            <label className="relative w-1/2 h-14">
                <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                    name="search"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </label>
        </div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {filteredProducts.map((item) => (
                        <Link to={`products/${item.id}`} key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={item.image} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <p className="mt-1"><strong>Price:</strong> ${item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        </>

    );
}

export default Products;
