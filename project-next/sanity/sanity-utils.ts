import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Carreira } from "@/types/Carreira";
import clientConfig from "./config/client-config";
import { Jogo } from "@/types/Jogo";



export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            autor,
            data,
            "slug": slug.current,
            "image": image.asset->,
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
            autor,
            data,
            "slug": slug.current,
            "image": image.asset->,
            "alt": image.alt->,
            content
        }`,
        { slug }
    );
}




export async function getCarreiras(): Promise<Carreira[]> {
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


export async function getJogos(): Promise<Jogo[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "jogo"]{
            _id,
            _createdAt,
            name,
            valor,
            "slug": slug.current,
            "image": image.asset->,
            "alt": image.alt->,
            content
        }`
    )
}

export async function getJogo(slug: string): Promise<Jogo> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "jogo" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            valor,
            "slug": slug.current,
            "image": image.asset->,
            "alt": image.alt->,
            content
        }`,
        { slug }
    );
}