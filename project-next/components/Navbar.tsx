    "use client";

    import Link from 'next/link'
    import NavLink from './Navigation'
    import shared from '../styles/Shared.module.css'
    import styles from '../styles/Navbar.module.css'
    import { useState } from 'react';

    const NavLinks = [
        {
            title: "Jogos",
            path: "/#jogos",
        },
        {
            title: "Sobre",
            path: "/#sobre",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Carreira",
            path: "/carreira",
        }
    ]


    export default function Navbar() {
        const [showMenu, setShowMenu] = useState(false);

        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };

        
        return (
            <div className={`${shared.backgroundBlue} ${styles.navbar}`}>
                <div className={`${styles.container} ${shared.flex} ${shared.alignCenter} ${shared.spaceBetween}`}> 
                    <img className={`${styles.logo}`}src="logo.png" alt="Logo" />
                    <nav >
                        <button className={`${styles.toggle_btn}`} onClick={toggleMenu}>
                            ☰
                        </button>
                        <ul className={`${styles.ul} ${showMenu ? styles.showMenu : ''}`}>
                            {
                                NavLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className={`${shared.listStyleNone}`}
                                    >
                                        {index === NavLinks.length - 1 ? (
                                            <button className={styles.lastButton}>
                                                <NavLink href={link.path} title={link.title} />
                                            </button>
                                        ) : (
                                            <NavLink href={link.path} title={link.title} />
                                        )}
                                    </li>
                                ))   
                            }
                        </ul>
                        
                    </nav>
                </div>
            </div>
        )
    }
