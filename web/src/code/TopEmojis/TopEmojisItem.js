
import React,{ useEffect } from "react";
import classNames from "classnames";

import style from "./Styles.module.css";

function TopEmojisItem(){
    return (
        <div className={style.TopEmojis}>
            <div className={style.EmojisContainer}>
                <p className={style.Title}>Los emojis que más nos hemos enviado</p>
            </div>
        </div>
    )
}
export default TopEmojisItem;