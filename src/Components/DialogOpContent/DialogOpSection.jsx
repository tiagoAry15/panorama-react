import React from 'react';
import DialogResultValidacao from './DialogResultValidacao';
import "./DialogResultValidacao.css"
export default function DialogOpSection(props){

    const {elementos,section} = props 

    
    const RenderLine = (Element) =>{
      return <DialogResultValidacao result = {Element.validacao} titulo = {Element.titulo} subtitulo = {Element.subtitulo}/>
    }


    return(
    
      <div className = "content">
        <div className = "header"><p>{section}</p></div>
        <div className = "elementos">
     {elementos.map(RenderLine)}
        </div>
    
          
            

  
        
      
     </div>
    )

}