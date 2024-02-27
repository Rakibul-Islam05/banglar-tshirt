import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {

        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast('you have already added this t-shirt')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }

    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    return (
        <div className='grid md:grid-cols-4 gap-5 grid-cols-3 mr-'>
            <div className='grid md:col-span-3 md:grid-cols-3 gap-6 col-span-2'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;