import { useState, useEffect } from 'react';
import FetchData from '../code/App/Api/FetchData';



function TopEmojisData(){
    //Fetching data from API
    const [data, setData] = useState({});
    useEffect(() => {
        // Get data using async function 
        const getData = async () => { 
            //Wait until FetchData() is solved
            const data = await FetchData(); 
            // Set data to the value
            setData(data);
        };
        getData();
    }, []); 
    const top_emojis = data.top_emojis;

    const [topEmojis, setTopEmojis] = useState(top_emojis);
    useEffect(() => {
        // Actualizar el estado cuteWords con el valor de data.cute_words
        setTopEmojis(data.top_emojis);
      }, [data]);

    //Returning data
    return {
        topEmojis: topEmojis ?  Object.values(topEmojis) : []
    }
}
export default TopEmojisData;