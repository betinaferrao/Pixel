import React, { ReactNode } from 'react';
import shared from '../styles/Shared.module.css'
import styles from '../styles/Card.module.css'


type CardProps = {
    estilo?: string;
    children: ReactNode;
    isFirst?: boolean; 
  };
  
  function Card(props: CardProps) {
    const { estilo, children, isFirst } = props;
  
    const cardClasses = `${styles.card} ${styles.cardBody} ${shared.flex} ${shared.column} ${isFirst ? styles.firstCard : ''}`;
  
    return (
      <div className={cardClasses}>
        {children}
      </div>
    );
  }
  
  export default Card;