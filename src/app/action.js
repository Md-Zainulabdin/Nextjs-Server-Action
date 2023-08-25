'use server';

export const handleForm = async (formData) => {
    let product = formData.get("product");
    let price = formData.get("price");

    console.log("product", product);
    console.log("price", price);
};

export const handleButton = async () => {
    console.log(1234);
};