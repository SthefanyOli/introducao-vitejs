import { useState } from 'react';
import Botao from './botao'; 
import styles from './index.module.css';

function Atividade03() {
    const [resultado, setResultado] = useState('');

    const Cadastrar = () => setResultado('Cadastrar');
    const Editar = () => setResultado('Editar');
    const Listar = () => setResultado('Listar');
    const Excluir = () => setResultado('Excluir');
    const Cancelar = () => setResultado('Cancelar');

    return (
        <div className={styles.container}>
            <h1>Atividade 03 - Uso de componentes</h1>
            <h2>Ação selecionada: {resultado}</h2>

          
            <Botao texto="Cadastrar" aoClicar={Cadastrar} acao="Cadastrar" />
            <Botao texto="Editar" aoClicar={Editar} acao="Editar" />
            <Botao texto="Listar" aoClicar={Listar} acao="Listar" />
            <Botao texto="Excluir" aoClicar={Excluir} acao="Excluir" />
            <Botao texto="Cancelar" aoClicar={Cancelar} acao="Cancelar" />
        </div>
    );
}

export default Atividade03;