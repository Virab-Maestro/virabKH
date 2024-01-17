import {ArrowUpRight} from "lucide-react"
import SingleComponent from "../SingleComponent/SingleComponent"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

type Props = {
    src: string,
    title: string,
    text: string
}

const ProjectComponent = ({src, title, text} : Props)=>{
    const {t}  = useTranslation()
    const [isSingle, setIsSingle] = useState(false)

    const isSingleHandle = ()=>{
        setIsSingle((prevIsSingle)=> !prevIsSingle)
    }

    useEffect(()=>{
        if(isSingle) document.documentElement.style.overflowY = "hidden"
        else document.documentElement.style.overflowY = "auto"
    },[isSingle])

    return(
        <>
            <div onClick={()=>isSingleHandle()} className=" rounded-2xl transition duration-300 hover:shadow-[6px_8px_25px_1px_rgba(255,255,255,0.2)] cursor-pointer">
                <img className="w-[390px] h-[235px] object-cover" src={src} alt="project-img" />
                <div className="flex items-center justify-between gap-4 py-3 px-6 w-full bg-[#2A2A2A] rounded-b-2xl">
                    <div className="">
                        <div className="uppercase text-xs font-bold tg:font-extrabold leading-5 mb-0.5">{t("pr_item_title")}</div>
                        <div className="uppercase text-lg font-bold tg:font-extrabold leading-5 text-white">{title}</div>
                    </div>
                    <div   className=" cursor-pointer "><ArrowUpRight /></div>
                </div>
            </div>

            <SingleComponent isSingleHandle={isSingleHandle} isSingle={isSingle} src={src} title={title} text={text}/>
        </>
    )
}

export default ProjectComponent