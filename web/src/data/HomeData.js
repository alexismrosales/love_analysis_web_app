import React, { useState, useEffect } from 'react';
import FetchData from '../code/App/Api/FetchData';

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
                ANALISIS <br/>DE<br/> AMOR
            </span>
        ),
        api_data:[
            value
        ],
        svg_shape:(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#f3f4f6" fill-opacity="1" d="M0,32L40,69.3C80,107,160,181,240,213.3C320,245,400,235,480,245.3C560,256,640,288,720,261.3C800,235,880,149,960,133.3C1040,117,1120,171,1200,202.7C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        ),
        nice_words: [
            "Hola Ara!, hice esta página para mostrarte algunos datos que obtuve de la API de Love Analysis de nuestra conversaciones que hemos tenido en WhatsApp, espero que te guste. Hice un recuento de mensajes que considero especiales y algunos otros datos interesantes. Te amo mucho y espero poder verte pronto! <3."
        ],
        congrats: [
            "Feliz San Valentín hermosa!"
        ],
        text_sample: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin et tellus ac vestibulum. Integer sit amet lobortis urna, id suscipit ex. Donec sed laoreet nulla, vel tempus sem. Integer aliquam eget sem et hendrerit. Maecenas id tellus ipsum. Donec cursus est sit amet odio bibendum mollis. Quisque a erat eget nisl placerat imperdiet in porta diam. Vestibulum sed venenatis lectus. Nulla volutpat purus eu maximus consectetur.

                Pellentesque non nisi a erat gravida elementum a et mauris. Duis pretium maximus facilisis. Fusce tortor odio, semper ut tellus et, porttitor dignissim arcu. Pellentesque non massa vestibulum felis finibus interdum. Phasellus iaculis accumsan tincidunt. Sed nibh turpis, faucibus non lorem sit amet, rhoncus vestibulum lorem. Phasellus lectus neque, tincidunt sit amet risus sed, imperdiet ornare nibh. Pellentesque vestibulum pellentesque velit in fermentum. Ut interdum ante eget ipsum elementum, nec convallis velit feugiat. Nunc et leo sit amet felis interdum aliquet.

                Nullam semper ex sit amet velit maximus luctus. Etiam iaculis eu massa id imperdiet. Phasellus semper diam tellus, et pulvinar dui tincidunt sit amet. Aliquam at ullamcorper ex. Curabitur placerat eros magna, eget placerat leo placerat sed. Aliquam nec congue nunc. Fusce feugiat eros eu gravida lobortis. Sed lacinia eros eros, at tincidunt nulla faucibus nec. Cras placerat sapien vitae purus laoreet, at ornare tortor tempus. Ut venenatis bibendum nulla fermentum consectetur. Quisque tincidunt lorem non sapien ornare hendrerit. Nunc ullamcorper consequat sodales. Aliquam sit amet justo leo.

                Donec molestie aliquet ante eget venenatis. Nulla mauris augue, varius vel pretium sed, rutrum ac turpis. Nulla fermentum arcu quis est eleifend, at dignissim nisi convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et vestibulum nisl. Nunc cursus tincidunt tellus, eget pellentesque justo congue ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vitae commodo libero. Donec placerat, libero in commodo molestie, libero nisi tempor dui, in dignissim purus magna vel dui. Fusce efficitur viverra dignissim. In suscipit laoreet justo, id aliquam nunc venenatis ac.
            </p>
        )
    }
}
export default HomeData;