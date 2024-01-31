import React,{ useEffect } from "react";
import classNames from "classnames";


import LoveInfoData from '../../data/LoveInfoData';

import CounterAnimation from "../scripts/counterAnimation";


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
                    <li style={style.ElementL}>"{data.key_words[0]}" unas {tempData} veces</li>
                    <li style={style.ElementR}>"{data.key_words[1]}" unas {tempData} veces</li>
                    <li style={style.ElementL}>"{data.key_words[2]}" unas {tempData} veces </li>    
                    <li style={style.ElementR}>"{data.key_words[3]}" unas {tempData} veces </li>    
                </ul>
            </div>
        </div>
    )
}
export default LoveInfoItem;