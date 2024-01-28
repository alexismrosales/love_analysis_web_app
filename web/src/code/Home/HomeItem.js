import classNames from "classnames";

import HomeData from '../../data/HomeData';

import style from "./Styles.module.css";
import './HeartAnimation.css'


function HomeItem(){
    const data = HomeData()
    const hearts = Array.from({length: 4}, (_, i) => i + 1)
    
    return (
        <section className='Home'>
            <div className={style.Home}>
                <div className={style.Animation}>
                    <span className={style.MainTitle}>{data.title}</span>
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
                        <ul>
                            <li>
                                {data.content[0]}
                            </li>
                            <li>
                                {data.content[1]}
                            </li>
                            <li>
                                {data.content[2]}
                            </li>
                            <li>
                                {data.content[3]}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default HomeItem;