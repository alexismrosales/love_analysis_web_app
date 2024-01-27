import React,{ useState } from 'react';
import { Collapse } from '@material-tailwind/react'
import style from './Styles.module.css';


function NavMenu(){
    const [open, setOpen] = useState(false)

    return (
        <nav className={style.Navbar}>
            <div class={style.DivContainer}>
                <a className={style.LogoItem}>
                    <img src='img/heart-logo.png' className="h-8" alt="heart-logo" />
                    <span className={style.NavbarTitle}><p className={style.NavbarTitleP}>Análisis del amor</p></span>
                </a>
                <button  type="button" className={style.ButtonCollapse} 
                onClick={() => setOpen((cur) => !cur)}
                >
                    <span className="sr-only">Main Menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div  className={style.ItemsMD}>
                    <ul className={style.ListItems}>
                        <li><a href="#" className={style.ListItem}>Inicio</a></li>
                        <li><a href="#" className={style.ListItem}>Algunos Datos</a></li>
                        <li><a href="#" className={style.ListItem}>Para ti mi Hermosa!</a></li>
                    </ul>
                </div>
                <Collapse open={open}>
                    <div  className={style.ItemsSM}>
                        <ul className={style.ListItems}>
                            <li><a href="#" className={style.ListItem}>Inicio</a></li>
                            <li><a href="#" className={style.ListItem}>Algunos Datos</a></li>
                            <li><a href="#" className={style.ListItem}>Para ti mi Hermosa!</a></li>
                        </ul>
                    </div>
                </Collapse>
            </div>
        </nav>
    )
}
export default NavMenu;

    