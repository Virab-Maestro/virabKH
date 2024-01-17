type Prop = {
    text: string
}

const TitleComponent = ({text} : Prop)=>{
    return(
        <div>
            <h2 className="font-extrabold leading-10 text-3xl sm:text-4xl text-center uppercase mb-7">
                <span className="bg-clip-text bg-gradient-to-b from-[#FF8660] to-[#D5491D] text-transparent">{text}</span>
            </h2>
        </div>
    )
}

export default TitleComponent