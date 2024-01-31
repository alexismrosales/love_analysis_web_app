import React, { useState, useEffect } from 'react';
import FetchData from '../code/App/Api/FetchData';

function LoveInfoData()
{
    //Fetching data from API
    const [value, setValue] = useState('');
    useEffect(() => {
        // Get data using async function 
        const fetchData = async () => { 
            //Wait until FetchData() is solved
            const data = await FetchData(); 
            // Set data to the value
            setValue(data);
        };
        fetchData();
    }, []);
    //Returning data
    return {
        api_data: [
            value
        ],
        heart_svg: (
            <svg  viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.00024000000000000003">
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#F9FAFB"></path>
            </svg>
        )
    }
}
export default LoveInfoData;