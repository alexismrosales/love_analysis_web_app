
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
                    <span className={style.TopEmoji}> {data.topEmojis[1] ? data.topEmojis[1].emoji : []}</span>
                    <br/><span className={style.TopTitle}>Top 2</span> 
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[1] ? data.topEmojis[1].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopOne}>
                    <span className={style.TopEmoji}> {data.topEmojis[0] ? data.topEmojis[0].emoji : []}</span>
                    <br/><span className={style.TopTitle}>Top 1</span> 
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[0] ? data.topEmojis[0].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopThree}>
                    <span className={style.TopEmoji}> {data.topEmojis[2] ? data.topEmojis[2].emoji : []}</span>
                    <br/><span className={style.TopTitle}>Top 3</span> 
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[2] ? data.topEmojis[2].count : []} height={95} marginTop={4} /> </span> <span className="pt-3">veces</span></p>
                </div>
            </div>
            <div>
                    <ul>
                        <li>top 4</li>
                        <li>top 5</li>
                        <li>top 6</li>
                        <li>top 7</li>
                        <li>top 8</li>
                        <li>top 9</li>
                        <li>top 10</li>
                    </ul>
                </div>
        </div>
    )
}
export default TopEmojisItem;