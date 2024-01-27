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
                        <span>{data.nice_words}</span>
                        <br/>
                        <span>{data.congrats}</span>
                    </div>
                    <div className={style.IntroList}>

                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default HomeItem;