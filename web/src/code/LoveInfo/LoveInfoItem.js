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
                <p className={style.SubTitle}>¿Sabias que?</p>
                
            </div>
        </div>
    )
}
export default LoveInfoItem;