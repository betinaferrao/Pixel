import { ImageAsset, PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    autor: string;
    data: string;
    slug: string;
    image: ImageAsset | null;
    alt: string;
    content: PortableTextBlock[];
}