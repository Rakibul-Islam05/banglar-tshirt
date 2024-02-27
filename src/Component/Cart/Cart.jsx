import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let massage;
    if (cart.length === 0) {
        massage = <p className='p-3 font-light'>Please add some product</p>
    }
    else {
        massage = <div className='mt-5 font-light'>Thanks to cart your product</div>
    }

    return (
        <div>
            <h2 className={`text-2xl font-semibold ${cart.length === 5 ? 'bg-red-500 p-2 rounded-lg mb-5' : 'bg-gray-400 p-2 rounded-lg mb-5'}`}>order summery:</h2>

            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {massage}
        </div>
    );
};

export default Cart;