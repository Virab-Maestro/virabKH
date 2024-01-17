import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent"
import TitleComponent from "../../components/TitleComponent/TitleComponent"
import exp1 from "../../assets/exp-1.png"
import exp2 from "../../assets/exp-2.png"

import { useTranslation } from "react-i18next";

const Experience = ()=>{
    const {t} = useTranslation()

    return(
        <div className="pb-10 tg:pb-24">
            <TitleComponent text={t("experience")} />
            <div>
                <ExperienceComponent src={exp2} name="Google" text="Front-end Developer" desc={t("exp_desc_1")} date="Jan 2022 - Jan 2024"/>
                <ExperienceComponent src={exp1} name="Google" text="Fullstack Developer" desc={t("exp_desc_2")} date="Jan 2021 - Jan 2022"/>
            </div>
        </div>
    )
}

export default Experience