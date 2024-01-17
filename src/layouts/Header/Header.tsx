import styles from "./Header.module.css"
import "./Select.scss"
import logo from '../../assets/logo.svg'

import {LANGUAGES} from "../../constants/index"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import {Link} from "react-scroll"

import Select from "react-select"
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

const Header = ()=>{
    const [currentValue, setCurrentValue] = useState<string>(()=>{
        const localLang = localStorage.getItem('lang')
        return localLang !== null ? localLang : 'en';
    })
    // const [isFixed, setIsFixed] = useState<boolean>(true)
    const { i18n, t } = useTranslation();

    const onChangeLang = (newValue: any) => {
      const lang_code = newValue.value
      i18n.changeLanguage(lang_code)
      localStorage.setItem('lang', lang_code)
      setCurrentValue(lang_code)
    };
    const getValue = ()=> LANGUAGES.find(c=> c.value === currentValue)

    // useEffect(()=>{
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const fixedThreshold = 80; // Adjust this threshold as needed
    //         const fixedThreshold2 = 550; // Adjust this threshold as needed
    //         if(scrollPosition > fixedThreshold && scrollPosition < fixedThreshold2) setIsFixed(scrollPosition < fixedThreshold)
    //         else if(scrollPosition > fixedThreshold && scrollPosition > fixedThreshold2) setIsFixed(scrollPosition > fixedThreshold2)
    //         else setIsFixed(true)
    //       };
      
    //       window.addEventListener('scroll', handleScroll);
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    // }, [])
    // ${isFixed? 'translate-y-0':'-translate-y-24'} line -51

    useEffect(()=>{
        i18n.changeLanguage(currentValue)
    },[currentValue])

    return(
        <header className={`${styles["header"]} fixed z-10 top-0 left-0 right-0 bg-[#222] transition duration-300`}>
            <div className="flex justify-between items-center gap-12 min-[850px]:gap-24 max-w-[880px] py-6 px-4 mx-auto text-white">
                <div className="flex-shrink-0 sm:mx-0 cursor-pointer">
                    <Link to="home" smooth={true} duration={500} offset={0}>
                        <img className="h-9 w-44" src={logo} alt="logo" />
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-12 md:gap-14 font-semibold">
                    <li className={`${styles['nav-item']} relative transition duration-1000 cursor-pointer`}> <Link to="home" smooth={true} duration={500} offset={0}>{t("nav1")}</Link> </li>
                    <li className={`${styles['nav-item']} relative transition duration-300 cursor-pointer`}> <Link to="projects" smooth={true} duration={500} offset={-100}>{t("nav2")}</Link> </li>
                    <li className={`${styles['nav-item']} relative transition duration-300 cursor-pointer`}> <Link to="experience" smooth={true} duration={500} offset={-100}>{t("nav3")}</Link> </li>
                    <li className={`${styles['nav-item']} relative transition duration-300 cursor-pointer`}> <Link to="footer" smooth={true} duration={500} offset={0}>{t("nav4")}</Link> </li>
                </ul>

                <Select
                    classNamePrefix='custom-select'
                    components={animatedComponents}
                    onChange={onChangeLang}
                    value={getValue()}
                    options={LANGUAGES}
                    placeholder={getValue()?.value}
                />
            </div>
        </header>
    )
}

export default Header