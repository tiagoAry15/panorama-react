import React from 'react';

import './Operacao.css';

import greenBall from '../../Assets/ball_green.png'
import redBall from '../../Assets/ball_red.png'
import search from '../../Assets/search_icon.png'
import data  from "../../dados.json"
import Button from '@material-ui/core/Button';

const Operacao = props => {

    const { operacao, onShowDialog } = props;

   
        console.log(data)
       
    
    const renderBall = valido => valido ? greenBall : redBall;

    return (
        <div className="row">
            <span>{operacao.codigoOperacao}</span>
            <span>{operacao.codigoCliente}</span>
            <span className="nome">{operacao.nomeCliente}</span>
            <span><img key="ged" alt="ball" src={renderBall(operacao.resultadoValidacao[0].validacao)} /></span>
            <span><img key="s255" alt="ball" src={renderBall(operacao.resultadoValidacao[1].validacao)} /></span>
            <span><img key="conta" alt="ball" src={renderBall(operacao.resultadoValidacao[2].validacao)} /></span>
            <span><img key="refbacen" alt="ball" src={renderBall(operacao.resultadoValidacao[3].validacao)} /></span>
            <span><img key="dotacao" alt="ball" src={renderBall(operacao.resultadoValidacao[4].validacao)} /></span>
            
            <Button onClick={() => onShowDialog(operacao)} >
                <img className="search" alt="search" src={search} />
            </Button>
        </div>
    )

}

export default Operacao;