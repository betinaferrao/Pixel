import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Carreira } from "@/types/Carreira";
import clientConfig from "./config/client-config";



export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": Image.asset->,
            "alt": Image.alt->,
            content
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content
        }`,
        { slug }
    );
}




export async function getCarreiras(): Promise<Carreira[]> {
    // const client = createClient({
    //     projectId: 'n2d1aklf',
    //     dataset: 'sproduction',
    //     apiVersion: '2023-03-04',
    // });

    return createClient(clientConfig).fetch(
        groq`*[_type == "carreira"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            cargo,
            tipo_trabalho 
        }`
    );
}

