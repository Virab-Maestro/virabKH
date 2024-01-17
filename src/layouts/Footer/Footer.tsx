import { Mail } from 'lucide-react'
import whatsapp from '../../assets/wh.svg'
import telegram from '../../assets/tg.svg' 
import twitter from '../../assets/x.svg'

import { useTranslation } from "react-i18next";

const Footer = ()=>{
    const {t} = useTranslation()

    return(
        <footer className="bg-[#191919]">
            <div className="max-w-[842px] mx-auto py-10 tg:py-20 px-4 text-left">
                <div className="text-3xl text-white font-bold mb-4 tg:mb-9">{t("footer")}</div>
                <p className="text-sm tg:text-base font-light max-w-[680px] mb-6">{t("footer_desc")}</p>
                <div className="flex items-center gap-2 mb-5 tg:mb-10">
                    <Mail size={18}/>
                    <div className="text-sm tg:text-base font-semibold">ed72akk@gmail.com</div>
                </div>
                <div className="flex items-center gap-2 tg:gap-6 -ml-1">
                    <a className="cursor-pointer" href="https://wa.me/79385114569"><img className=" w-[28px] tg:w-[40px] h-[20px] tg:h-[30px] " src={whatsapp} alt="soc" /></a>
                    <a className="cursor-pointer" href="https://t.me/KH_Virab"><img className=" w-[28px] tg:w-[40px] h-[20px] tg:h-[30px] " src={telegram} alt="soc" /></a>
                    <a className="cursor-pointer" href="https://twitter.com/virab_kh"><img className=" w-[28px] tg:w-[40px] h-[20px] tg:h-[30px] " src={twitter} alt="soc" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer