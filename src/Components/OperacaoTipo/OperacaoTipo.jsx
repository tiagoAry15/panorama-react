import React from 'react';
import './OperacaoTipo.css';

class OperacaoTipo extends React.Component{
    render(){
        return(
            <div className = "OperacaoTipo">        
   <p className = "quant">{this.props.quant}</p>
   <img alt = "ball" src = {this.props.color}/>
   <p>{this.props.text}</p>
  
    </div>
        )
            
            
        }
    }

export default OperacaoTipo
