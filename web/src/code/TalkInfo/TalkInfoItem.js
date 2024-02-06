import React from "react";

import style from "./Styles.module.css";

function TalkInfoItem()
{
    return(
        <div>
            <div className={style.DateInfo}>
                <div>img</div>
                <div>text</div>
            </div>
            <div className={style.WTMInfo}>
                <div>text</div>
                <div>img</div>
            </div>
            <div className={style.WMInfo}>
                <div>img</div>
                <div>text</div>
            </div>
        </div>
    )
}
export default TalkInfoItem;