import { useState, useEffect } from 'react'; 
import FetchData from '../App/FetchData';


import style from "./Styles.module.css";

function SliderItem(){
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
    return (
        <div className={style.main_div}>
            
        </div>
    )
}
export default SliderItem;