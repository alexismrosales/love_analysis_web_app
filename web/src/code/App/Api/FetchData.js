import { getData } from './Service';

async function FetchData() { 
    try {
        //Wait until getData() is solved
        const response = await getData();
        // Saving data
        const data = response.data.data;
        // Return data
        return data;
    } catch (error) {
        // If error, show it in console
        console.error(error);
    }
}
export default FetchData;