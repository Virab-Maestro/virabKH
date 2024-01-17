import styles from "./Home.module.css"
import avatar from "../../assets/avatar.png"
import file from "../../download/cv_1.1.pdf"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-scroll";
import IconsComponent from "../../components/IconsComponent/IconsComponent"

const Home = ()=>{
    const {t} = useTranslation()
    const [buttons, setButtons] = useState([
        {id: 1, active: false, link: true, classes: []},
        {id: 2, active: false, link: false, classes: []}
    ])

    const handleClick = (buttonId: number)=>{
        setButtons((prevbuttons)=>
            prevbuttons.map((button)=>{
                if(buttonId !== button.id) return {...button, active: false}
                else return {...button, active: true}
            })
        )
    }

    return(
        <div className="pt-40 tg:pt-48 pb-16 tg:pb-20 text-center">
            <div className="mb-5 tg:mb-8 md:mb-10"><img className="mx-auto w-[213px] h-[213px] rounded-full object-cover" src={avatar} alt="avatar"/></div>
            <div className="text-4xl tg:text-5xl md:text-6xl font-extrabold max-w-2xl text-center mb-5 tg:mb-7 md:mb-9 mx-auto text-white ">{t("home")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8660] to-[#9A33FF]">{t("home_span")}</span></div>
            <p className="text-md tg:text-lg md:text-xl max-w-2xl text-center font-light mb-7 tg:mb-8 md:mb-14 mx-auto">{t("home_text")}</p>
            {/* Info block */}

            <div className="flex justify-between items-center gap-4 flex-nowrap max-w-md mx-auto mb-10 tg:mb-14 md:mb-20">
                {buttons.map((item, i)=>{
                    if(!item.link)
                        return(<a href={file} download="cv_1.1.pdf" className={`${styles["ripple-button"]} ${item.classes.join(' ')} ${item.active ? styles["active"]: ''}`} key={item.id} 
                            onClick={()=>handleClick(item.id)}
                            >{t("home_btn_"+(i+1))}</a>)
                    else 
                        return(<Link to="footer" smooth={true} duration={500} offset={0}><button className={`${styles["ripple-button"]} ${item.classes.join(' ')} ${item.active ? styles["active"]: ''}`} key={item.id} 
                            onClick={()=>handleClick(item.id)}
                            >{t("home_btn_"+(i+1))}</button></Link>)
                })}
            </div>
            {/* Buttons */}

            <div className="text-xl tg:text-2xl uppercase mb-5 tg:mb-7 font-semibold tracking-widest">{t("languages_title")}</div>
            <div className="flex justify-center flex-wrap items-center gap-y-5 tg:gap-y-7 gap-x-8 tg:gap-x-10 sm:gap-x-14">
                <IconsComponent/>
            </div>
            {/* Icons */}
        </div>
    )
}

export default Home