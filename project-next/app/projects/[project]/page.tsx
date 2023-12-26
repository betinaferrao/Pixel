import { getProject } from "@/sanity/sanity-utils";
import shared from '../../../styles/Shared.module.css'
import styles from '../../../styles/ProjectPage.module.css'
import Image from "next/image";
import { PortableText } from "@portabletext/react"; 
import { SanityImage } from "@/components/sanity-image";
import { ImageAsset, PortableTextBlock } from "sanity";


type Props = {
    params: { project: string };
};


export default async function Project({ params }: Props){
    const slug = params.project;

    const project = await getProject(slug);
    

    return (
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
            <div className={`${shared.flex} ${shared.column} ${styles.container} ${shared.altura} ${shared.marginBottom}`}>
                {project.image && <SanityImage
                                    className={styles.imagem}
                                    asset={project.image}
                                    alt='a'
                                    quality={70}
                                />}              
                <p className={`${styles.tituloPage}`}>{project.name}</p>
                <div className={`${styles.cardNomeData}`}>
                    {project.autor && (
                        <div className={`${styles.cardNomeData}`}>
                            <p>Por {project.autor}, </p>
                            <p className={`${styles.data}`}>{project.data}</p>
                        </div>
                        )}
                </div>
                <div className={`${styles.content}`}><PortableText value={project.content} /></div>
            </div>
        </div>
    );
}
    
