import React, { ReactNode } from 'react';
import shared from '../styles/Shared.module.css'
import styles from '../styles/Card.module.css'

type CardProps = {
    estilo?: string;
    children: ReactNode;
  };

function Card(props: CardProps) {
    return (
        <div className={`${props.estilo ? props.estilo : styles.card} ${styles.cardBody} ${shared.flex} ${shared.column}`}>
            {props.children}
        </div>
    );
}

export default Card;