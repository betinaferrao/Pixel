import React, { ReactNode } from 'react';
import shared from '../styles/Shared.module.css'
import styles from '../styles/CarreiraCard.module.css'

type CarreiraCardProps = {
    children: ReactNode;
  };

function CarreiraCard(props: CarreiraCardProps ) {
    return (
        <div className={`${ styles.CarreiraCard} ${shared.flex} ${shared.wrap}`}>
            {props.children}
        </div>
    );
}

export default CarreiraCard;