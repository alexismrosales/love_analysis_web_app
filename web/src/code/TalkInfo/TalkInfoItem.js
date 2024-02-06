import React from "react";

import Style from "./Styles.module.css";

function TalkInfoItem()
{
    return(
        <div>
            <div className={Style.DateInfo}>
                <div className={Style.DateImgDiv}><img src={process.env.PUBLIC_URL+"/img/hourglass.png"} className={Style.DateImg}/></div>
                <div>text</div>
            </div>
            <div className={Style.WTMInfo}>
                <div>text</div>
                <div>img</div>
            </div>
            <div className={Style.WMInfo}>
                <div>img</div>
                <div>text</div>
            </div>
        </div>
    )
}
export default TalkInfoItem;