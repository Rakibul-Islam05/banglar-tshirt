import React from 'react';

const TShirt = ({ tshirt,handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='border border-gray-500 rounded-lg flex flex-col justify-between'>
            <div className=''>
                <img src={picture} alt="" className='w-full h-3/5 rounded-lg' />
                <div className='flex flex-col'>
                    <h3 className='text-xl'>{name}</h3>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;