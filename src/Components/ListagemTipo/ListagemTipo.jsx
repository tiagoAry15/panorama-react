import React from 'react';
import './ListagemTipo.css'
import OperacaoTipo from "../OperacaoTipo/OperacaoTipo"
import greenBall from '../../Assets/ball_green.png'
import  yellowBall from '../../Assets/ball_yellow.png'


class ListagemTipo  extends React.Component{

    renderRow(item){
        return(<OperacaoTipo quant = {item.quant} color = {item.ball} text = {item.text}/>)

    }



    getTotal(values){
        var final = 0;
        for(var i = 0; i < values.length;i++){
            final += values[i]
        }
        return final
    }


    render(){
    
         const values = [248,227,36,56,15,15]

        return(
            <div className = "ListagemTipo">
                 <p>Hoje temos <b>{this.getTotal(values)}</b> operações passíveis de desembolso na rotina automática</p>
                <div className = "collumns">
                <div>
            <OperacaoTipo quant = "248" color = {greenBall} text = "operações já foram reembolsadas" />
            <OperacaoTipo quant = "227" color = {yellowBall} text = "estão pendentes com restrições" />
            <OperacaoTipo quant = "36" color = {yellowBall}  text = "estão pendentes de instrumentos de crédito" />
            </div>
            <div>
            <OperacaoTipo quant = "56" color = {yellowBall} text = "estão pendentes de conta ativa" />
            <OperacaoTipo quant = "15" color = {yellowBall} text = "estão pendentes de referência BACEN" />
            <OperacaoTipo quant = "15" color = {yellowBall}  text = "estão pendentes de dotação" />
            </div>
            </div>
            </div>
        )
            
            
        }
    }

export default ListagemTipo