import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Izabele from '../../assets/Izabele.jpg';
import clsx from 'clsx';
import useStyles from '../Card.styles';

interface IzeCardProps {
  isTeamComponent?: boolean;
}

export const IzeCard: React.FC<IzeCardProps> = (props: IzeCardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={props.isTeamComponent ? classes.teamRoot : classes.root}>
      <CardHeader
        title='Izabelė Kačinskaitė'
        subheader='Savanorė | Redaktorė'
      />
      <CardMedia className={classes.media} image={Izabele} title='Izabele' />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          Bakalauras: Žurnalistika, Vilniaus universitetas
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Kai žmonės nori padėti kitiems, dažniausiai stoja į mediciną. O štai
            aš alpdama vien nuo minties apie adatą, supratau, kad šis kelias –
            ne man. Taip nusprendžiau tapti tuo, kas galės papasakoti tų žmonių
            istorijas ar kalbėti apie jiems rūpimus, tačiau dažnai visuomenėje
            nutylimus dalykus. Tokius kaip psichinė ir emocinė sveikata. Pati
            gyvendama su nerimo sutrikimu supratau, kaip mažai apie tai kalbama
            ir kokia stigmatizuota yra psichikos sveikata. Tikiu, kad „Jau
            Dabar“ gali tapti reikalingu pokyčiu visuomenei keliaujant geresnės
            emocinės būklės ir drąsos kalbėti apie savo problemos link. Ir
            džiaugiuosi, kad prisidėdama prie šio puslapio pagaliau galėsiu
            išpildyti savo svajonę padėti žmonėms.
          </Typography>
          <Typography paragraph>
            Temos priverčiančios suklusti mano smalsumui: žmonių tarpusavio
            santykiai, psichinė sveikata, istorija ir visi negirdėti dalykai.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
