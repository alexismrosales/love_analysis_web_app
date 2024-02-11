import React from 'react';

import LastWordsData from '../../data/LastWordsData';

import style from './Styles.module.css';


function LastWordsItem(){
    const data = LastWordsData();
    return(
        <div className={style.LastWordItem}>
            <p className={style.MainTitle}>Para ti</p>
            <p className={style.Subtext}>
                {data.sub_text[0]}
            </p>
            <div className={style.Pics}>
                <span className={style.PicSpanL}><img src={data.images[0]} alt="our_pics0" className={style.Pic1}/></span>
                <span className={style.PicSpanR}><img src={data.images[1]} alt="our_pics1" className={style.Pic2}/></span>
                <span className={style.PicSpanL}><img src={data.images[2]} alt="our_pics2" className={style.Pic3}/></span>
                <span className={style.PicSpanR}><img src={data.images[4]} alt="our_pics4" className={style.Pic4}/></span>
            </div>
            <p className={style.Subtext}>
                {data.sub_text[1]} 
            </p>
            <p className={style.Title}>TE AMOOOO </p>
            <span className="flex justify-center"><img src={ process.env.PUBLIC_URL+"/img/heart-logo.png"} alt="heart"  className={style.Heartimg}/></span>
            <span className={style.Footer}>© 2024 por Alexis Márquez</span>
        </div>
    )
}
export default LastWordsItem;