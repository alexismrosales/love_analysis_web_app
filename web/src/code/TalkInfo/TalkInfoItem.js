import React from "react";
import translate from "translate"
import { Twemoji } from "react-emoji-render";

import CounterAnimation from "../_scripts/counterAnimation";

import TalkInfoData from "../../data/TalkInfoData";

import Style from "./Styles.module.css";



function TalkInfoItem()
{
    // Hook call
    const [translatedData, setTranslatedData] = React.useState(null);

    // Get data
    const data = TalkInfoData();
  
    React.useEffect(() => {
        getTranslatedData(data).then(data => setTranslatedData(data));
    }, []);

    return(
        <div>
            <div className={Style.DateInfo}>
                <div className={Style.DateImgDiv}><img src={process.env.PUBLIC_URL+"/img/hourglass.png"} className={Style.DateImg}/></div>
                <div className={Style.DateInfoData}>
                    <p className={Style.TitleDate}>¿ Cu<span className={Style.Accent}>á</span>ndo hablamos m<span className={Style.Accent}>á</span>s?</p>
                    <ul>
                        <li className={Style.ListL}>¿Sabías que el día en que mas hablamos es el {translatedData?.day}? <Twemoji svg text={'😯'} className={Style.emoji_span}/> </li>
                        <li className={Style.ListR}>Y nuestro el mes donde más hablamos fue en {translatedData?.month} 😳</li>
                        <li className={Style.ListL}>Así como la hora donde hablamos más durante el día es a las {data.variousData[0]? data.variousData[0][1].hour : ""}:00 😚</li>
                    </ul>
                </div>
            </div>
            <div className={Style.WTMInfo}>
            <p className={Style.TitleWTM}>Y… ¿qui<span className={Style.Accent}>é</span>n habla m<span className={Style.Accent}>á</span>s?</p>
                <div className="grid grid-cols-3 text-center pt-[5rem]">
                    <p className={Style.TextWTM}><span className={Style.Emmiter2}>Tú</span> has enviado un total de <br/><CounterAnimation limit={data.variousData[1]? data.variousData[1][1]["0"]["messages"] : ""}/> <br/>mensajes.</p>
                    <p className={Style.VS}>VS</p>
                    <p className={Style.TextWTM}><span className={Style.Emmiter2}>Yo</span> he enviado un total de <br/><CounterAnimation limit={data.variousData[1]? data.variousData[1][1]["1"]["messages"] : ""}/> <br/>mensajes.</p>
                </div>
            </div>
            <div className={Style.WMInfo}>

                <div>
                    <p>
                        En promedio enviamos {data.variousData[2]? data.variousData[2][1].byDay : ""} mensajes por día. <br/>
                        Donde tu envías {data.variousData[2]? data.variousData[2][1].Ara : ""} mensajes y yo {data.variousData[2]? data.variousData[2][1]["~Alexis M. Rosales"] : ""} mensajes promedio por día 😎👌.
                    </p> 
                </div>
                <div>img</div>
            </div>
        </div>
    )
}


async function getTranslatedData(data) {
    translate.engine = "google";
  
    const day = await translate(
      data.variousData[0] ? data.variousData[0][1].day : "Sunday",
      "es"
    );
    const month = await translate(
      data.variousData[0] ? data.variousData[0][1].month : "August",
      "es"
    );
    return { day, month };
}

export default TalkInfoItem;