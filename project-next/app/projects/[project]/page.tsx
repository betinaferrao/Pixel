import { getProject } from "@/sanity/sanity-utils";
import shared from '../../../styles/Shared.module.css'
import Image from "next/image";


type Props = {
    params: { project: string };
};


export default async function Project({ params }: Props){
    const slug = params.project;

    const project = await getProject(slug);


    return (
        <div className={`${shared.background1} ${shared.altura} ${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.justifyCenter}`}>
            <a href="">
                <img src={project.image} alt="" />
            </a>
            {project.name}
        </div>
    );
}
    
