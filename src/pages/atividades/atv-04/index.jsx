/**
 * @file   src\pages\atividades\atv-04\index.jsx
 * @author Ewerton
 * @date   2026-04-14
 * @desc   [Descrição do componente ou arquivo]
 */

import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    
    const [Qtd, setQtd] = useState('');
    const [Produto, setProduto] = useState(''); 
    const [Lista, setLista] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
       setLista([...Lista, { Qtd, Produto }]); 
    };
    
    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de compras </h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
             
              
                <input
                    id="qtd"
                    type="text"
                    placeholder='Qtd'
                    value={Qtd}
                    onChange={e => setQtd(e.target.value)}
                />

              
              
                <input
                    id="user"
                    type="text"
                    placeholder='Produto...'
                    value={Produto}
                    onChange={e => setProduto(e.target.value)}
                />
                
                {/* exemplo uso real */}
                {/* <input
                    id="user"
                    type="text"
                    placeholder='Insira seu nome aqui'
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                /> */}
                
                <button type="submit">Adicionar</button>
            </form>
            <br></br>
            <h2>Lista</h2>
            {
               <div className={styles.listaContainer}>
    
            {Lista.map((item, index) => (
        <div key={index} className={styles.itemLista}>
             
             {item.Qtd}x {item.Produto}

        </div>
    ))}
        </div>
    }
        </div>
    );
}