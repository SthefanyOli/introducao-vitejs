import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} 
            ${acao === 'Cadastrar' ? styles.mais : 'Cadastrar'}
            ${acao === 'Editar' ? styles.mais : 'Editar'}
            ${acao === 'Listar' ? styles.mais : 'Listar'}
            ${acao === 'Excluir' ? styles.mais : 'Excluir'}
            ${acao === 'Cancelar' ? styles.mais : 'Cancelar'}
            `}
            
            onClick={aoClicar}
        >
            {texto}
        </button>
        
    );
}

export default Botao;