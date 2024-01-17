import project1 from "../../assets/project-1.png"
import project2 from "../../assets/project-2.png"

import TitleComponent from "../../components/TitleComponent/TitleComponent"
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent"

import { useTranslation } from "react-i18next"

const Projects = ()=>{
    const {t}  = useTranslation()

    return (
        <div id="projects" className=" pb-16 tg:pb-24 ">
            <TitleComponent text={t("project")} />
            <div className="flex flex-wrap justify-center items-center gap-8">
                <ProjectComponent src={project1} title={t("pr_item_subtitle_1")} text={t("pr_item_text_1")}/>
                <ProjectComponent src={project2} title={t("pr_item_subtitle_2")} text={t("pr_item_text_2")}/>
            </div>
        </div>
    )
}

export default Projects