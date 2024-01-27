import React, { useState, useEffect } from 'react';
import FetchData from '../code/App/FetchData';

function HomeData()
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
    return {
        title: (
            <span>
                AN<span className='text-7xl md:text-8xl'>Á</span>LISIS <br/>DE<br/> AMOR
            </span>
        ),
        api_data: (
            <p>{value}</p>
        ),
        svg_shape:(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#f3f4f6" fill-opacity="1" d="M0,32L40,69.3C80,107,160,181,240,213.3C320,245,400,235,480,245.3C560,256,640,288,720,261.3C800,235,880,149,960,133.3C1040,117,1120,171,1200,202.7C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        )
    }
}
export default HomeData;