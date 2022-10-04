import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {

    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div>
                <h1>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                    </h1>
                <p className='text-3xl my-4'>{option.name}</p>
                {/* <Feature></Feature> */}
            </div>
            
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }

            <button className='bg-slate-600 text-white w-full rounded-md py-2 font-bold mt-4'>Buy Now</button>
        </div>
    );
};

export default PriceOption;