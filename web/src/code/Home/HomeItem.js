import HomeData from '../../data/HomeData';
import style from "./Styles.module.css";

function HomeItem(){
    const data = HomeData()
    return (
        <section className='Home'>
            <div className={style.Home}>
                <div className={style.Intro}>
                    <span className={style.MainTitle}>{data.title}</span>
                    {data.svg_shape}
                </div>
            </div>
        </section>
        
    )
}
export default HomeItem;