import styles from "./SingleComponent.module.css"
import "./Slick.scss"
import {X} from 'lucide-react'

type Props = {
    src: string
    title: string
    text: string
    isSingle: boolean
    isSingleHandle: ()=> void
}

const SingleComponent = ({src, title, text, isSingle, isSingleHandle} : Props)=>{

    return (
        <>
            <div className={`${styles["modal-overlay"]} ${isSingle? 'flex':'hidden'}`}>
                <div className={`${styles["modal"]} w-[350px] tg:w-[443px] relative h-auto rounded-xl pt-16 pb-6 tg:py-14 `}>
                    <div onClick={()=>isSingleHandle()} className="absolute top-5 right-6 tg:top-3 tg:right-4 cursor-pointer"><X/></div>
                        <img className="img mb-7 mx-auto tg:min-w-[390px] min-h-[235px]" src={src} alt="single-preview" /> 
                    <div className="text-xl text-white font-extrabold mb-4 capitalize">{title}</div>
                    <p className="text-sm text-white text-left leading-6 font-bold">{text}</p>
                </div>
            </div>
        </>
    )
}

export default SingleComponent