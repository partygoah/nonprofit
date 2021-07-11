import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';

export const Disclaimer: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('disclaimer_closed', 'true');
  };

  const disclaimerStatus = sessionStorage.getItem('disclaimer_closed');
  if (disclaimerStatus) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        Prašome perskaityti prieš skaitant mūsų straipsnius.
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Informacija, skelbiama šiame puslapyje, neatstoja medicinos
          specialistų konsultacijų. Mes nesame medikai ir medicininių patarimų
          nedalijame. Mes dalijamės gelmių psichologijos idėjomis, įvairiais
          savipagalbos būdais ir praktikomis, tačiau negarantuojame jų
          veiksmingumo ir neatsakome už galimas pasekmes. Praktikų atlikimas ar
          teorinės informacijos pritaikymas sau yra kiekvieno asmeninė
          atsakomybė. Patiriant psichikos negalavimus rekomenduojame nedelsiant
          kreiptis į šios srities profesionalus. Neatidėkite kreipimosi tik
          todėl, kad kažką naudingo perskaitėte šiame puslapyje.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Supratau
        </Button>
      </DialogActions>
    </Dialog>
  );
};
