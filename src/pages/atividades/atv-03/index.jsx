import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';


function Atividade03() {
    // O hook useState gerencia o valor do contador
    const [resultado, setResultado ] = useState(0);

    const Cadastrar = () => setResultado (resultado === 'Cadastrar');
    const Editar = () => setResultado (resultado === 'Editar');
    const Listar = () => setResultado (resultado === 'Listar');
    const Excluir = () => setResultado (resultado === 'Excluir');
    const Cancelar = () => setResultado (resultado === 'Cancelar');
    

    return (
        <div className={styles.container}>
            <h1>Atividade 03- Uso de componentes</h1>
            <h2>: {resultado}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Cadastrar" aoClicar={Cadastrar} acao={'Cadastrar'} />
            <Botao texto="Editar" aoClicar={Editar} acao={'Editar'} />
            <Botao texto="Listar" aoClicar={Listar} acao={'Listar'} />
            <Botao texto="Excluir" aoClicar={Excluir} acao={'Excluir'} />
            <Botao texto="Cancelar" aoClicar={Cancelar} acao={'Cancelar'} />
        </div>
    );
}

export default Atividade03;