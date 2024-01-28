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
        ]
    }
}
export default LoveInfoData;