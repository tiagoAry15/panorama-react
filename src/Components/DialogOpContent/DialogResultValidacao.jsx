import React from 'react';
import './DialogResultValidacao.css';
import checkIcon from '../../Assets/check.png'
import XIcon from '../../Assets/cross.png'

export default function DialogResultValidacao(props){

    const {result, titulo, subtitulo} = props 

    const checkImg = value => value ? checkIcon : XIcon
    return(

        <div className="validacao" >
        <img src={checkImg(result)} alt="" />
        <div>
        <span>{titulo}</span>
       <p>{subtitulo}</p>
        </div>
      
        </div>
        
    )

}
