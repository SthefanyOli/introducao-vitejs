import { Link } from "react-router";
import styles from './index.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Aula React com VITE JS</h1>            
            <div className={styles.containerItens}>
                <h2>Exemplos</h2>

                <Link to= "/exemplo/01"> Exemplo 1 - Componente básico</Link>
                <Link to= "/exemplo/02"> Exemplo 2 - Uso de estilização com module</Link>
                <Link to= "/exemplo/03"> Exemplo 3 - Contador </Link>
                <Link to= "/exemplo/04"> Exemplo 4 - Componentes </Link>
            </div>
            <div className={styles.containerItens}>
                <h2>Atividades</h2>

                  <Link to= "/atividade/01"> Atividade 1 - Uso CSS </Link>
                  <Link to= "/atividade/02"> Atividade 2 - Contador </Link>
                  <Link to= "/atividade/03"> Atividade 3 - Componentes </Link>
            </div>
        </div>
    )
}

export default Home;