import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_CONTEXT } from "../../context/productContext/ProductContext";

const ProductsPage = () => {
    const { products, loading, error } = useContext(PRODUCT_CONTEXT);

    const { id } = useParams();

    const singleProduct = products.find(
        (product) => product.id === Number(id)
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-2xl">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
                {error}
            </div>
        );
    }

    if (!singleProduct) {
        return (
            <div className="flex justify-center items-center h-screen text-2xl">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6">

                {/* Product Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.title}
                        className="h-96 object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center">

                    <span className="inline-block w-fit bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
                        {singleProduct.category}
                    </span>

                    <h1 className="text-3xl font-bold text-gray-800">
                        {singleProduct.title}
                    </h1>

                    <p className="text-gray-600 mt-5 leading-7">
                        {singleProduct.description}
                    </p>

                    <div className="mt-6 flex items-center gap-5">
                        <span className="text-4xl font-bold text-green-600">
                            ${singleProduct.price}
                        </span>

                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-semibold">
                            ⭐ {singleProduct.rating.rate}
                        </span>

                        <span className="text-gray-500">
                            ({singleProduct.rating.count} Reviews)
                        </span>
                    </div>

                    <button
                        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductsPage;