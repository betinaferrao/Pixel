import { ImageAsset, PortableTextBlock } from "sanity";

export type Jogo = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    valor: string;
    image: ImageAsset | null;
    content: PortableTextBlock[];
}