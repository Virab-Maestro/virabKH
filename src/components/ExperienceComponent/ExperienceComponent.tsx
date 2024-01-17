type Props = {
    src: string
    name: string
    text: string
    desc: string
    date: string
}

const ExperienceComponent = ({src, text, desc, date} : Props)=>{
    return(
        <div className="w-full mb-12">
            <div className="flex gap-6 tg:gap-12 justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <img className="w-8 h-8" src={src} alt="experience-img" />
                    <div className="text-lg tg:text-xl md:text-2xl text-white font-bold max-w-[130px] tg:max-w-[300px] md:max-w-[470px]">{text}</div>
                </div>
                <div className="text-xs tg:text-sm md:text-base text-[#8491A0] uppercase leading-[150%]">{date}</div>
            </div>

            <p className="text-sm text-[#8491A0] leading-[150%]">{desc}</p>
        </div>
    )
}

export default ExperienceComponent