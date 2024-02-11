import { useEffect, useState } from "react";
import FetchData from "../code/App/Api/FetchData";

function TalkInfoData(){
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
    const various_data = data.various_data;

    const [variousData, setVariousData] = useState(various_data);
    useEffect(() => {
        // Update the state 
        setVariousData(data.various_data);
    }, [data]); 

    //Return data 
    return {
        variousData: variousData ? Object.entries(variousData) : []
    }
}
export default TalkInfoData;