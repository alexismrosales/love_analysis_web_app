import React,{ useState } from 'react';
import { Collapse } from '@material-tailwind/react'
import style from './Styles.module.css';


function NavMenu(){
    return (
        <nav>
            <div class={style.DivContainer}>
                <a className={style.LogoItem}>
                    <img src='img/heart-logo.png' className={style.Logo} alt="heart-logo"/>
                    <span className={style.NavbarTitle}>TE AMO</span>
                </a>
            </div>
        </nav>
    )
}
export default NavMenu;
