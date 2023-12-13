
import React from 'react';
import shared from '../styles/Shared.module.css'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div className={`${styles.footer1} ${shared.backgroundBlue} ${shared.flex} ${shared.justifyCenter}`}>
            <p>© JOJOS GAME STUDIO. ALL RIGHTS RESERVED</p>
        </div>
    );
}

export default Footer;