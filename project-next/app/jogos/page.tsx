
import shared from '../../styles/Shared.module.css'
import styles from '../../styles/Jogos.module.css'
import CarreiraCard from '@/components/CarreiraCard'

export default function Jogos() {
  return (
    <div className={`${shared.background1} ${shared.altura} ${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.justifyCenter}`}>
        <div>
          <img src="pacman.png" alt="" />
          <div className={`${styles.margin} ${shared.flex} ${shared.gap} ${shared.alignCenter} ${shared.justifyCenter}`}>
            <img src="jogos1.png" alt="" />
            <img src="jogos2.png" alt="" />
            <img src="jogos3.png" alt="" />
          </div>
        </div>

        <div className={`${styles.sobre} ${shared.alturaMenor}`}>
          <h1 className={`${shared.flex} ${shared.alignCenter} ${shared.justifyCenter} ${shared.titulo}`}>Sobre Nós</h1>
          <div className={`${shared.flex} ${shared.alignCenter} ${shared.justifyCenter} ${styles.gap} `}>
            <p className={`${styles.paragrafo}`}> 
              Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.<br></br><br></br>
              Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.<br></br><br></br>
              Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!</p><br></br><br></br>
            <img src="imagem1.png" className={`${styles.imagem}`} alt="" />
          </div>
        </div>

        <div className={`${styles.cardCarr} `}>
          <h1 className={`${shared.flex} ${shared.alignCenter} ${shared.justifyCenter} ${shared.titulo}`}>Carreira</h1>
          <div className={`${styles.carreira}`}>
            <CarreiraCard>
                <p>Oi</p>
            </CarreiraCard>
            <CarreiraCard>
                <p>Ola</p>
            </CarreiraCard>
            <CarreiraCard>
                <p>Oi</p>
            </CarreiraCard>
            <CarreiraCard>
                <p>Oi</p>
            </CarreiraCard>
            <CarreiraCard>
                <p>Oi</p>
            </CarreiraCard>
          </div>
        </div>
    </div>
  )
}
