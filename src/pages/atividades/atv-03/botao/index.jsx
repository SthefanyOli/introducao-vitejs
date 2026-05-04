import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    
    const classeDinamica = styles[acao] || ''; 

    return (
        <button
            className={`${styles.botao} ${classeDinamica}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;