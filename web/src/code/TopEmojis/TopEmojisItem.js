
import React,{ useEffect } from "react";
import classNames from "classnames";

import style from "./Styles.module.css";

function TopEmojisItem(){
    return (
        <div className={style.TopEmojis}>
            <p className={style.Title}>TOP 3 EMOJIS</p>
            <div className={style.EmojisContainer}>
                <div className={style.TopTwo}>
                    EMOJI 2
                </div>
                <div className={style.TopOne}>
                    EMOJI 1
                </div>
                <div className={style.TopThree}>
                    EMOJI 3
                </div>
            </div>
        </div>
    )
}
export default TopEmojisItem;