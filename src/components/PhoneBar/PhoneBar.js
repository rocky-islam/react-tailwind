import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from 'autoprefixer';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            // console.log(phonesLoaded);
            const phoneData = phonesLoaded.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone;
            })
            console.log(phoneData);
            setPhones(phoneData);
            
            
        });
    },[])
    return (
      <div>
        <BarChart width={900} height={200} data={phones}>
          <Bar dataKey="price"></Bar>
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip dataKey='name'></Tooltip>
        </BarChart>
      </div>
    );
};

export default PhoneBar;