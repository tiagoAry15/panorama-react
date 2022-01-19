import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import './DialogOpContent.css'
import DialogOpSection from './DialogOpSection'
import { render } from '@testing-library/react';
export default function DialogOpContent(props){

    const {operacao} = props 
    
    const RenderSection = (secao) =>{
        return<DialogOpSection elementos = {secao.elementos} section = {secao.section}/>
    }

    return(
        <div>
        <div className="dialogHead">DESEMBOLSO AUTOMÁTICO DE OPERAÇÕES<br />[Planilha de detalhamento]</div>
        {operacao && (
  
          <DialogContent>
            <div className="simpleData">
              <p>N° da OPERAÇÃO:</p>
  
              {operacao.codigoOperacao}
              <div>
                <p>SICAD:</p>
  
                {operacao.codigoCliente}
              </div>
              <div>
                <p>CPF/CNPJ:</p>
                <span>123.456.789-01</span>
              </div>
              <p>NOME DO CLIENTE:</p>
              {operacao.nomeCliente}
            </div>
  
          {operacao.resultadoValidacao.map(RenderSection)}
          </DialogContent>
        )}
     </div>
    )

}