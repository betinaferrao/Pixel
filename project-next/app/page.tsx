import {getProjects} from '@/sanity/sanity-utils'
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
        <Link href={`/projects/${project.slug}`}>{project.name}</Link></div>
      ))}      
    </div>
  )
}
