import React from 'react'
import Form from './components/Form/page'


const Home = async () => {

  const res = await fetch("https://64e7a21eb0fd9648b7903416.mockapi.io/products");
  let products = await res.json();

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-medium py-4'>Products WareHouse</h1>
      <Form />

      <div className='mt-12'>
        <div>
          <h1>Product List</h1>
        </div>
        <div className="products flex gap-4 flex-wrap">
          {
            products.map((prod) => (
              <div className='product p-4 shadow-sm border' key={prod.id}>
                <h1>{prod?.product}</h1>
                <span>{prod?.price}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home