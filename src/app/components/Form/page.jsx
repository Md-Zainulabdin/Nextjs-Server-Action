import React from "react";

const Form =  () => {

    const addProductToDatabase = async (e) => {
        "use server"

        const product = e.get("product")?.toString();
        const price = e.get("price")?.toString();

        if (!product || !price) return;
        const newProduct = {
            product,
            price,
        }

        await fetch('https://64e7a21eb0fd9648b7903416.mockapi.io/products', {
          method: "POST",
          body: JSON.stringify(newProduct),
          headers: {
            "Content-Type": 'application/json'
          },
        })
    }
  return (
    <div className="w-[33%] p-4">
      <form action={addProductToDatabase} 
      className="flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="Enter Product">Enter Product :</label>
          <input type="text" name="product" className="border outline-none p-1"/>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Enter Price">Enter Price :</label>
          <input type="text" name="price" className="border outline-none p-1"/>
        </div>
        <div className="w-full mt-2">
            <button type="submit" className="w-full p-2 bg-blue-500 text-white">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
