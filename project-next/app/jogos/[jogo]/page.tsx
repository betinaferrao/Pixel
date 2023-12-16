import { getJogo, getProject } from "@/sanity/sanity-utils";
import shared from '../../../styles/Shared.module.css'
import styles from '../../../styles/JogoPage.module.css'
import Image from "next/image";
import { PortableText } from "@portabletext/react"; 
import { SanityImage } from "@/components/sanity-image";


type Props = {
    params: { jogo: string };
};


export default async function Jogo({ params }: Props){
    const slug = params.jogo;

    const jogo = await getJogo(slug);


    return (
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
            <div className={`${shared.flex} ${shared.alignCenter} ${shared.column} ${styles.container} ${shared.altura} ${shared.marginBottom}`}>              
                <p className={`${styles.titulo}`}>{jogo.name}</p>
                <div>
                    {jogo.image && <SanityImage
                                className={styles.imagem}
                                asset={jogo.image}
                                alt='a'
                                quality={70}
                            />}
                </div>
                <div className={`${styles.containerr}`}>
                    <div className={`${shared.flex} ${shared.alignCenter} ${shared.bigGap} ${styles.estiloValorComprar}`}>
                        <p className={`${styles.valor}`}>Valor: R$ {jogo.valor}</p>
                        <button className={`${shared.botaogeral}`}>Comprar</button>
                    </div>
                    <div className={`${styles.content}`}><PortableText value={jogo.content} /></div>
                </div>
            </div>
        </div>
    );
}
    
