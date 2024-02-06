
import React from "react";
import { Twemoji } from "react-emoji-render";

import TopEmojisData from "../../data/TopEmojisData";

import CounterAnimation from "../_scripts/counterAnimation";

import style from "./Styles.module.css";
import './Styles.css'

function TopEmojisItem(){
    const top = [3, 4, 5, 6, 7, 8, 9]
    const data = TopEmojisData();
    return (
        <div className={style.TopEmojis}>
            <p className={style.Title}>TOP 3 EMOJIS</p>
            <br/>
            <p className={style.Text}>{data.main_text[0]}</p>
            <br/>
            <p className={style.TextQ}>{data.questions[0]}</p>
            <div className={style.EmojisContainer}>
                <div className={style.TopTwo}>  
                    <span className={style.TopTitle}>#2</span><br/>
                    <span className={style.TopEmoji}><Twemoji svg text={data.topEmojis[1] ? data.topEmojis[1].emoji : []} onlyEmojiClassName="emoji-span"/></span>
                    
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[1] ? data.topEmojis[1].count : []} height={95} marginTop={4} time={10} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopOne}>
                    <span className={style.TopTitle}>#1</span><br/>
                    <span className={style.TopEmoji}> <Twemoji svg text={data.topEmojis[0] ? data.topEmojis[0].emoji : []} onlyEmojiClassName="emoji-span" /></span>
                     
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[0] ? data.topEmojis[0].count : []} height={95} marginTop={4} time={8} /> </span> <span className="pt-3">veces</span></p>
                </div>
                <div className={style.TopThree}>
                    <span className={style.TopTitle}>#3</span> <br/>
                    <span className={style.TopEmoji}><Twemoji svg text={data.topEmojis[2] ? data.topEmojis[2].emoji : []} onlyEmojiClassName="emoji-span" /></span>
                    
                    <p className={style.TopText}>Se uso <br/><span className={style.Counter1}> <br/><CounterAnimation limit={data.topEmojis[2] ? data.topEmojis[2].count : []} height={95} marginTop={4} time={5} /> </span> <span className="pt-3">veces</span></p>
                </div>
            </div>
            <p className={style.TextQ}>{data.questions[1]}</p> <br/>
            <div className={style.divTable}> 
                    <table className={style.Table}>
                        <thead className={style.TableHead}>
                            <tr>
                                <th className="px-6 py-3"></th>
                                <th className="px-6 py-3">Emoji</th>
                                <th className="px-6 py-3">Veces</th>
                            </tr>
                            
                        </thead>
                        {top.map((item) => (
                            <tr className="text-xl">
                                <td className="text-orange-500">#{item+1}</td>
                                <th className="px-6 py-4">
                                    <span className={style.OtherEmoji}><Twemoji svg text={data.topEmojis[item] ? data.topEmojis[item].emoji : []} onlyEmojiClassName="emoji-span" /></span>
                                </th>
                                <td>
                                    <span>{data.topEmojis[item] ? data.topEmojis[item].count : []}</span>
                                </td>
                            </tr> 
                        ))}
                          
                    </table>
                </div>
        </div>
    )
}
export default TopEmojisItem;