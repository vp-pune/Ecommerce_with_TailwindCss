import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PaymentPage from './PaymentPage';

function Cart() {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const products = JSON.parse(localStorage.getItem('cart')) || [];

  const handleRemoveProduct = (item) => {
    const updatedCart = products.filter((product) => product.id !== item.id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleIncrement = ({ id }) => {
    const updateCart = products.map((item) => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity + 1
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updateCart));
    navigate('/cart')
  }

  const handleDecrement = ({ id }) => {
    const updateCart = products.map((item) => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity - 1
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updateCart));
    navigate('/cart')
  }

  useEffect(() => {
    const subTotal = products.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity
    }, 0)
    setTotal(subTotal)
  }, [products])




  return (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                     <Link to='/'>
                     <button  type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                     </Link>
                    
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {products.map((item) => {
                          return <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={item.image} alt={item.title} className="h-full w-full object-contain object-center" />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <p className="ml-4">${item.price * item.quantity}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className='flex gap-4'>
                                  <button onClick={() => handleIncrement(item)} className='bg-green-300 border px-1'>+</button>
                                  {item.quantity < 1 ? handleRemoveProduct(item) : <p className="text-gray-500">Qty {item.quantity}</p>}
                                  <button onClick={() => handleDecrement(item)} className='bg-red-200 border px-1'>-</button>
                                </div>

                                <div className="flex">
                                  <button onClick={() => handleRemoveProduct(item)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        })}

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{total}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link to='/payment' href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Go To Payment</Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <Link to='/'>
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {products && <PaymentPage total={total}/>}
    </div>

  )
}

export default Cart