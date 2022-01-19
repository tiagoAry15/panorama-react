import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';


import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import './DialogBox.css';

export default function DialogBox(props) {

  const { open, onClose, conteudo} = props;
  


const StyledPaper = styled(Paper)`
        
        max-height: '100vh',
`;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      scroll = "body"
      maxWidth= "sm"
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperComponent={StyledPaper}
    >
  
    {conteudo}

      <DialogActions>
        <button onClick={onClose} color="primary">
          Fechar
          </button>
      </DialogActions>
    </Dialog>

  );
}


