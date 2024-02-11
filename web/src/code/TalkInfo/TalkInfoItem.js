import React from "react";
import translate from "translate"
import classNames from "classnames";
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
                    <p className={Style.TitleDate}>¿ Cuando hablamos mas?</p>
                    <ul className={Style.DateList}>
                        <li className={Style.ListL}>¿Sabías que el día en que mas hablamos es el {translatedData?.day}? <Twemoji svg text={'😯'} className={Style.emoji_span}/> </li>
                        <li className={Style.ListR}>Y nuestro el mes donde más hablamos fue en {translatedData?.month} 😳</li>
                        <li className={Style.ListL}>Así como la hora donde hablamos más durante el día es a las {data.variousData[0]? data.variousData[0][1].hour : ""}:00 😚</li>
                    </ul>
                </div>
            </div>
            <div className={Style.WTMInfo}>
                <p className={Style.TitleWTM}>Y… ¿quien habla mas?</p>
                <br/>
                <p className={Style.EmojiTitle}><Twemoji svg text={'🤔'} className={Style.emoji_span}/></p>
                <div className={Style.WTMGrid}>
                    <p className={classNames(Style.TextWTM, 'col-span-3 md:col-span-1')}><span className={Style.Emmiter1}>Tú</span> has enviado un total de <br/>
                        <CounterAnimation limit={data.variousData[1]? data.variousData[1][1]["0"]["messages"] : ""} time={9}/> <br/>mensajes.
                    </p>
                    <h1 className={Style.VS}>VS</h1>
                    <p className={classNames(Style.TextWTM, 'col-span-3 md:col-span-1')}><span className={Style.Emmiter1}>Yo</span> he enviado un total de <br/>
                        <CounterAnimation limit={data.variousData[1]? data.variousData[1][1]["1"]["messages"] : ""} time={9}/> <br/>mensajes.
                    </p>
                </div>
                <p className={Style.WinnerText}>Y el ganador es...</p>
                {data.variousData[1] ?
                (data.variousData[1][1]["0"]["messages"] > data.variousData[1][1]["1"]["messages"] ? 
                (<p className={Style.WinnerText}>Tuuu <br/> me has ganado esta vez. <Twemoji svg text={'😭'} className={Style.emoji_span}/></p>) 
                :
                (<p className={Style.WinnerText}>Yoooo <br/>Jeje, facilito. <Twemoji svg text={'😎'} className={Style.emoji_span}/><Twemoji svg text={'👌'} className={Style.emoji_span}/></p>)
                ) : "" }
            </div>
            <div className={Style.WMInfo}>

                <div className={Style.WMText}>
                    <h1 className={Style.TitleWM}>Y al dia nos mandamos...</h1>
                    <p className={Style.WMData}>
                        Sabías que... en promedio enviamos {data.variousData[2]? data.variousData[2][1].byDay : ""} mensajes por día. <br/> <br/>
                        Donde tu envías {data.variousData[2]? data.variousData[2][1].Ara : ""} mensajes<br/> y <br/>yo {data.variousData[2]? data.variousData[2][1]["~Alexis M. Rosales"] : ""} mensajes promedio por día.  
                    </p> 
                </div>
                <div className={Style.WMImg}><img src={process.env.PUBLIC_URL+"/img/messages.png"} className={Style.WMImage} /></div>
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