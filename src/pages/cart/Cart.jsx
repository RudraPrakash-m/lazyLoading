import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id,
        });
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR",
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                    🛒 Shopping Cart ({cartItems.length})
                </h1>

                {cartItems.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300"
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <h2 className="text-2xl font-semibold text-gray-500">
                        🛍️ Cart is Empty
                    </h2>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="bg-gray-100 p-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-52 object-contain"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5 flex flex-col flex-1">

                                <span className="self-start bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                    {item.category}
                                </span>

                                <h2 className="mt-3 text-lg font-bold text-gray-800 min-h-[56px]">
                                    {item.title}
                                </h2>

                                <p className="mt-2 text-sm text-gray-600 h-20 overflow-hidden">
                                    {item.description}
                                </p>

                                {/* Price & Rating */}
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-green-600">
                                        ₹{item.price}
                                    </span>

                                    <span className="text-sm font-semibold text-yellow-500">
                                        ⭐ {item.rating.rate}
                                        <span className="text-gray-500">
                                            {" "}({item.rating.count})
                                        </span>
                                    </span>
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-5">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm text-gray-500">
                                            ID: {item.id}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition duration-300"
                                    >
                                        Remove
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default Cart;