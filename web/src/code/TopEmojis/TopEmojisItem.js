
import React,{ useEffect } from "react";
import classNames from "classnames";

import TopEmojisData from "../../data/TopEmojisData";

import CounterAnimation from "../_scripts/counterAnimation";

import style from "./Styles.module.css";

function TopEmojisItem(){
    const data = TopEmojisData();
    return (
        <div className={style.TopEmojis}>
            <p className={style.Title}>TOP 3 EMOJIS</p>
            <div className={style.EmojisContainer}>
                <div className={style.TopTwo}>
                    <span className={style.TopOneEmoji}> {data.topEmojis[1] ? data.topEmojis[1].emoji : []}</span>
                    <p className={style.TopText}>Top 2 </p> <br/>
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[1] ? data.topEmojis[1].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopOne}>
                    <span className={style.TopOneEmoji}> {data.topEmojis[0] ? data.topEmojis[0].emoji : []}</span>
                    <p className={style.TopText}>Top 1 </p> <br/>
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[0] ? data.topEmojis[0].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopThree}>
                    <span className={style.TopOneEmoji}> {data.topEmojis[2] ? data.topEmojis[2].emoji : []}</span>
                    <p className={style.TopText}>Top 3 </p> <br/>
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[2] ? data.topEmojis[2].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
            </div>
        </div>
    )
}
export default TopEmojisItem;