import React from "react";

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 my-4">
            <div className="bg-red-50 p-6 rounded-full flex items-center justify-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                    alt="Empty Cart"
                    className="w-30 h-30"
                />
            </div>
            <h2 className="text-2xl font-bold text-red-900 mt-4">YOUR CART IS EMPTY</h2>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="px-7 py-2 border border-red-900 text-red-900 rounded-lg hover:bg-red-100 transition cursor-pointer">
                    Continue Shopping
                </button>
                <button className="px-7 py-4 bg-red-900 text-white rounded-lg hover:bg-red-800 transition cursor-pointer">
                    Login To View Your Cart
                </button>
            </div>
        </div>
    );
};

export default EmptyCart;