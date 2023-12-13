import shared from '../../styles/Shared.module.css'
import styles from '../../styles/Blog.module.css'
import {getProjects} from '@/sanity/sanity-utils'
import Link from 'next/link';
import Card from '@/components/Card';
import Image from 'next/link';


export default async function Blog() {

  const projects = await getProjects();

  return (
    <div className={`${shared.background1} ${shared.altura} ${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.justifyCenter}`}>
        <h1 className={`${shared.titulo}`} >Blog</h1>
        <div className={`${styles.area} ${shared.marginBottom}`} >
            {projects.map((project) => (
                <Card>
                    <div key={project._id} className={`${shared.flex} ${shared.column}`}> 
                        <a>
                            <img src={project.image} alt="" width={300} height={200} />
                        </a>
                        
                        <Link href={`/projects/${project.slug}`} className={`${styles.nome}`}>{project.name}</Link>
                    </div>
                </Card>
            ))}      
        </div>
    </div>
  )
}
