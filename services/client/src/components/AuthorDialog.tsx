import React from 'react';
import { DomaCard } from './members/DomaCard';
import { IzeCard } from './members/IzeCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'space-between',
      maxWidth: '25vw',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
  })
);

interface AuthorDialogProps {
  isOpen: boolean;
  handleClose: any; ///fixme
  isEditor?: boolean;
}

export const AuthorDialog: React.FC<AuthorDialogProps> = (
  props: AuthorDialogProps
) => {
  const classes = useStyles();

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <div className={classes.container}>
            {props.isEditor ? <IzeCard /> : <DomaCard />}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color='primary'>
          Uždaryti
        </Button>
      </DialogActions>
    </Dialog>
  );
};
