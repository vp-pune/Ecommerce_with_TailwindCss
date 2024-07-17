import React, { useState } from 'react';
import Products from './Products';

// unused component

function Searchbar({products}) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
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
            {filteredProducts && <Products filteredProducts={filteredProducts}/>}
        </div>
    );
}

export default Searchbar;
