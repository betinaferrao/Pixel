import Link from 'next/link'
import NavLink from './Navigation'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Navbar.module.css'

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
    return (
        <div className={`${shared.backgroundBlue} ${styles.navbar}`}>
            <div className={`${styles.container} ${shared.flex} ${shared.alignCenter} ${shared.spaceBetween}`}> 
                <img src="logo.png" alt="Logo" />
                <nav >
                    <ul className={`${styles.ul}`}>
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
