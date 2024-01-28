import { useEffect } from "react";
import classNames from "classnames";

import LoveInfoData from '../../data/LoveInfoData';

import style from "./Styles.module.css";

function LoveInfoItem(){
    const data = LoveInfoData()
    return (
        <div className={style.LoveInfo}>
            
            <div className={style.Animation}>
            <h1>{data.api_data}</h1>
            </div>
            <div>XD</div>
        </div>
    )
}
export default LoveInfoItem;