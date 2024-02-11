import { useEffect } from "react";
import classNames from "classnames";

import HomeData from '../../data/HomeData';

import style from "./Styles.module.css";
import './HeartAnimation.css'

const { smoothScroll } = require("../_scripts/smoothScroll");


function HomeItem(){
    const data = HomeData()
    const hearts = Array.from({length: 4}, (_, i) => i + 1)

    //Scroll to the href section
    useEffect(() => {
        smoothScroll(".scroll-link");
      }, []);
      
    return (
        <div className={style.Home}>
            <div className={style.Animation}>
                <p className={style.MainTitle}>{data.title}</p>
                {data.svg_shape}
                <div className={style.HeartsContainer}>
                    {hearts.map((item) => (
                        <div  className={classNames(style.Heart, 'Heart', `Heart${item}`)}>
                            <div className= {classNames(style.HeartCircle, 'HeartCircle')}></div>
                            <div className={style.HeartHalfMoon}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.Intro}>
                <div className={style.IntroText}>
                    <p className={style.Text}>{data.nice_words}</p>
                    <br/>
                    <p className={style.TextCongrats}>{data.congrats}</p>
                </div>
                <div className={style.IntroList}>
                    <p className={style.IntroListText}>Contenido</p>
                    <ul className={style.List}>
                        <li className={style.Item}><a href="#LoveInfo" className="scroll-link">{data.content[0]}</a></li>
                        <li className={style.Item}><a href="#TopEmojis" className="scroll-link">{data.content[1]}</a></li>
                        <li className={style.Item}><a href="#TalkInfo" className="scroll-link">{data.content[2]}</a></li>
                        <li className={style.Item}><a href="#LastWords" className="scroll-link">{data.content[3]}</a></li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}
export default HomeItem;
