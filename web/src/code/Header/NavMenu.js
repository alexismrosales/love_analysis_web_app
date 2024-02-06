import React from 'react';
import style from './Styles.module.css';


function NavMenu(){
    return (
        <nav>
            <div class={style.DivContainer}>
                <a className={style.LogoItem}>
                    <img src={process.env.PUBLIC_URL+"/img/heart-logo.png"} className={style.Logo} alt="heart-logo"/>
                    <span className={style.NavbarTitle}>TE AMO</span>
                </a>
            </div>
        </nav>
    )
}
export default NavMenu;
