import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const newCart = [...cart, tshirt];
        setCart(newCart)
    }
    return (
        <div className='grid sm:grid-cols-4 sm:gap-5 '>
            <div className='grid sm:col-span-3 sm:grid-cols-3 gap-6'>
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
                ></Cart>
            </div>
        </div>
    );
};

export default Home;