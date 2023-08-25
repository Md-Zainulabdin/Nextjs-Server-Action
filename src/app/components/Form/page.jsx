import { handleButton, handleForm } from "@/app/action";
import React from "react";

const Form = () => {
  return (
    <div className="w-[33%] p-4">
      <form action={handleForm} className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="Enter Product">Enter Product :</label>
          <input
            type="text"
            name="product"
            required
            className="border outline-none p-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Enter Price">Enter Price :</label>
          <input
            type="text"
            name="price"
            required
            className="border outline-none p-1"
          />
        </div>
        <div className="w-full mt-2">
          <button type="submit" className="w-full p-2 bg-blue-500 text-white">
            Add Product
          </button>
        </div>
      </form>

      <form action={handleButton}>
        <button className="mt-12 w-full p-2 bg-blue-500 text-white">
          handle button
        </button>
      </form>
    </div>
  );
};

export default Form;
