import React,{ useEffect } from "react";

import LoveInfoData from '../../data/LoveInfoData';

import CounterAnimation from "../_scripts/counterAnimation";


import style from "./Styles.module.css";




function LoveInfoItem(){
    const data = LoveInfoData();
    return (
        <div className={style.LoveInfo}>
             <div className={style.Animation}> 
                <div className={style.SVG_bg}>
                    <p className={style.MainTitle}>Alredor de  <span className={style.Counter}><CounterAnimation limit={data.cuteWords[2] ? data.cuteWords[2][1] : []} /></span>veces nos hemos <br/> dicho que nos <br/> amamos</p>
                </div>   
            </div>
            <div className={style.Info}>
                <p className={style.SubTitle}>También nos hemos dicho mucho otras palabras bonitas como: </p>
                <ul className={style.List}>
                    <li className={style.ElementL}><span className={style.KeyWords}>"{data.key_words[0]}"</span> &nbsp; unas {data.cuteWords[0] ? data.cuteWords[0][1] : []} veces.</li>
                    <li className={style.ElementR}><span className={style.KeyWords}>"{data.key_words[1]}"</span> &nbsp; unas {data.cuteWords[3] ? data.cuteWords[3][1] : []} veces.</li>
                    <li className={style.ElementL}><span className={style.KeyWords}>"{data.key_words[2]}"</span> &nbsp; unas {data.cuteWords[4] ? data.cuteWords[4][1] : []} veces.</li>    
                    <li className={style.ElementR}><span className={style.KeyWords}>"{data.key_words[3]}"</span> &nbsp; unas {data.cuteWords[1] ? data.cuteWords[1][1] : []} veces.</li>    
                </ul>
            </div>
        </div>
    )
}
export default LoveInfoItem;