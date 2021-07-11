import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  expanded: {
    fontSize: '20px',
  },
  root: {
    height: 'auto',
    marginBottom: '20px',
  },
  teamRoot: {
    // gridColumnEnd: 'div 3',

    height: 'auto',
    width: '32%',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
    // flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '90%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
