import React from 'react';
import './Operacao.css';
import Operacao from './Operacao'
import DialogOpContent from '../DialogOpContent/DialogOpContent'
import DialogBox from '../DialogBox/DialogBox';

const ListagemOperacoes = props => {

    const [openDialog, setOpenDialog] = React.useState(false);
    const [operacaoSelecionada, setOperacaoSelecionada] = React.useState(null);

    const onShowDialog = (operacao) => {
        setOpenDialog(true);
        setOperacaoSelecionada(operacao)
    }


    const renderCabecalho = () => (
      <div className="row cabecalho">
        <span>Operação</span>
        <span>SICAD</span>
        <span>Nome do Cliente</span>
        <span>GED</span>
        <span>S255</span>
        <span>Conta Ativa</span>
        <span>Ref. BACEN</span>
        <span>Dotação</span>
        <span>Detalhar</span>
      </div>);

    const renderRow = operacao => <Operacao key={operacao.codigoOperacao} operacao={operacao} onShowDialog={onShowDialog} />;

        return (
            <div className="ListagemOperacoes">
              {renderCabecalho()}
              {props.items.map(renderRow)}
              <DialogBox open={openDialog} onClose={() => setOpenDialog(false)} conteudo = {<DialogOpContent operacao ={operacaoSelecionada} />} >
              
                </DialogBox>
            </div>
        )

}

export default ListagemOperacoes