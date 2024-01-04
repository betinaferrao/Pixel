import shared from '../../styles/Shared.module.css'
import styles from '../../styles/Blog.module.css'
import {getProjects} from '@/sanity/sanity-utils'
import Link from 'next/link';
import Card from '@/components/Card';
import Image from 'next/link';
import { SanityImage } from '@/components/sanity-image';
import { PortableText } from "@portabletext/react"; 


export default async function Blog() {

  const projects = await getProjects();
//   console.log(projects)

  return (
    <div className={`${shared.background1} ${shared.altura} ${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.justifyCenter}`}>
        <h1 className={`${shared.titulo}`} >Blog</h1>
        <div className={`${styles.area} ${shared.marginBottom}`} >
            {projects.map((project, index) => (
                <Card key={project._id} isFirst={index === 0}>
                    <div className={index === 0 ? styles.firstItem : `${shared.flex} ${shared.column}`}> 
                        {project.image && <SanityImage
                            className={styles.imagem}
                            asset={project.image}
                            alt='a'
                            quality={70}
                        />}
                        
                        <div className={index === 0 ? styles.first : ''}>
                        <Link href={`/projects/${project.slug}`} className={index === 0 ? styles.nomeFirst : `${styles.nome}`}>{project.name}</Link>
                        {index === 0 && (
                            <div className={index === 0 ? styles.firstContent : ''}>
                                <PortableText value={project.content} />
                            </div>
                        )}
                        </div>
                    </div>
                </Card>
            ))}      
        </div>
    </div>
  )
}
