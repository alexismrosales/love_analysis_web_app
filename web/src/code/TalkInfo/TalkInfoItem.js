import React from "react";
import translate from "translate"

import TalkInfoData from "../../data/TalkInfoData";

import Style from "./Styles.module.css";



function TalkInfoItem()
{
    
    // Mover el hook a esta función
    const [translatedData, setTranslatedData] = React.useState(null);

    // Obtener los datos de TalkInfoData
    const data = TalkInfoData();

    React.useEffect(() => {
        // Llamar a la función asíncrona y actualizar el estado
        getTranslatedData(data).then(data => setTranslatedData(data));
    }, []);

    return(
        <div>
            <div className={Style.DateInfo}>
                <div className={Style.DateImgDiv}><img src={process.env.PUBLIC_URL+"/img/hourglass.png"} className={Style.DateImg}/></div>
                <div>
                    <p>¿Cuando hablamos más? </p>
                    <ul>
                        <li>¿Sabías que el día en que mas hablamos es el {translatedData?.day}? 😯 </li>
                        <li>Y nuestro el mes donde más hablamos fue en {translatedData?.month} 😳</li>
                        <li>Así como la hora donde hablamos más durante el día es a las {data.variousData[1] ? data.variousData[1].hour : []}:00 😚</li>
                    </ul>
                </div>
            </div>
            <div className={Style.WTMInfo}>
                <div>text</div>
                <div>img</div>
            </div>
            <div className={Style.WMInfo}>
                <div>img</div>
                <div>text</div>
            </div>
        </div>
    )
}


async function getTranslatedData(data) {
    translate.engine = "google";
  
    const day = await translate(
      data.variousData[0] ? data.variousData.day : "sunday",
      "es"
    );
    const month = await translate(
      data.variousData[2] ? data.variousData.month : "august",
      "es"
    );
    return { day, month };
}

export default TalkInfoItem;