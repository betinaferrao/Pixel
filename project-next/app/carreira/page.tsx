"use client";
import shared from '../../styles/Shared.module.css'
import styles from '../../styles/Carreira.module.css'
import { useState } from 'react';

export default function Carreira() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [texto, setTexto] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            name: nome,
            email: email,
            link: link,
            texto: texto
        }
        console.log(data)

        if (nome.trim() === '' || email.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        };

        alert('Dados enviados com sucesso!');
    
        // Limpar os campos
        setNome('');
        setEmail('');
        setLink('');
        setTexto('');
    }

    return (
        <div>
            <div className={`${shared.altura} ${shared.flex} ${shared.alignCenter} ${shared.justifyCenter} ${shared.titulo}`}>
                <h1>Formulário de Vaga</h1>
            </div>
            <div className={`${shared.flex} ${shared.alignCenter} ${shared.justifyCenter} ${styles.divForm}`}>
                <form onSubmit={handleSubmit}  className={`${shared.flex} ${shared.column} ${shared.marginBottom} ${styles.forms}`} >
                    <div className={`${shared.flex} ${shared.column}`}>
                        <label className={`${styles.titulo}`}>
                            Nome:
                        </label>
                        <input
                            type="text"
                            className={`${styles.input}`}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className={`${shared.flex} ${shared.column}`}>
                        <label className={`${styles.titulo}`}>
                            Email:
                        </label>
                        <input
                        type="email"
                        className={`${styles.input}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`${shared.flex} ${shared.column}`}>
                        <label className={`${styles.titulo}`}>
                            Link para portfólio:
                        </label>
                        <input
                        type="url"
                        className={`${styles.input}`}
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className={`${shared.flex} ${shared.column}`}>
                        <label className={`${styles.titulo}`}>
                            Por que você quer fazer parte da Jojos?
                        </label>
                        <input
                        type="text"
                        className={`${styles.inputLast}`}
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        />
                    </div>
                    <button className={`${styles.botao}`} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}