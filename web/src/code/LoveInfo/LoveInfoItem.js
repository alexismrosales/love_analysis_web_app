import React,{ useEffect } from "react";
import classNames from "classnames";


import LoveInfoData from '../../data/LoveInfoData';

import CounterAnimation from "../_scripts/counterAnimation";


import style from "./Styles.module.css";




function LoveInfoItem(){
    const data = LoveInfoData();
    const tempData = 100;
    return (
        <div className={style.LoveInfo}>
             <div className={style.Animation}> 
                <div className={style.SVG_bg}>
                    <p className={style.MainTitle}>Alredor de  <span className={style.Counter}><CounterAnimation limit={tempData} /></span>veces nos hemos <br/> dicho que nos <br/> amamos</p>
                </div>   
            </div>
            <div className={style.Info}>
                <p className={style.SubTitle}>También nos hemos dicho mucho otras palabras bonitas como: </p>
                <ul className={style.List}>
                    <li className={style.ElementL}><span className={style.KeyWords}>"{data.key_words[0]}"</span> &nbsp; unas {tempData} veces</li>
                    <li className={style.ElementR}><span className={style.KeyWords}>"{data.key_words[1]}"</span> &nbsp; unas {tempData} veces</li>
                    <li className={style.ElementL}><span className={style.KeyWords}>"{data.key_words[2]}"</span> &nbsp; unas {tempData} veces </li>    
                    <li className={style.ElementR}><span className={style.KeyWords}>"{data.key_words[3]}"</span> &nbsp; unas {tempData} veces </li>    
                </ul>
            </div>
        </div>
    )
}
export default LoveInfoItem;