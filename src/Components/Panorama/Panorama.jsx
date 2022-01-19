import React from 'react';
import './Panorama.css';
import ListagemTipo from  '../ListagemTipo/ListagemTipo'
import ListagemOperacoes from '../ListagemOperacoes/ListagemOperacoes'
import data  from "../../dados.json"
const Panorama = props => (

    <div className = "Panorama">
        <h3>PANORAMA DO DIA</h3>
        <ListagemTipo/>
        <ListagemOperacoes items={data}/>
        
    </div>
)

export default Panorama