import { getCarreira} from "@/sanity/sanity-utils";
import shared from '../../../styles/Shared.module.css'
import styles from '../../../styles/CarreiraPage.module.css'


type Props = {
    params: { carreira: string };
};


export default async function Jogo({ params }: Props){
    const slug = params.carreira;

    const carreira = await getCarreira(slug);

    if (carreira) {
        return (
            <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
                <div className={`${shared.flex} ${shared.alignCenter} ${shared.column} ${shared.altura} ${shared.marginBottom}`}>              
                    <p className={`${styles.titulo}`}>{carreira.name}</p>
                    <div className={`${styles.container}`}>
                        <p><span className={`${styles.span}`}>Cargo:</span> {carreira.cargo}</p>
                        <p><span className={`${styles.span}`}>Tipo de trabalho:</span> {carreira.tipo_trabalho}</p>
                    </div>
                </div>
            </div>
        );
    }
}
    
