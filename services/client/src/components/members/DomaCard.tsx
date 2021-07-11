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
import Doma from '../../assets/Doma.jpg';
import clsx from 'clsx';
import useStyles from '../Card.styles';

interface DomaCardProps {
  isTeamComponent?: boolean;
}

export const DomaCard: React.FC<DomaCardProps> = (props: DomaCardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={props.isTeamComponent ? classes.teamRoot : classes.root}>
      <CardHeader title='Dominyka Bodrije' subheader='Steigėja | Vadovė' />
      <CardMedia className={classes.media} image={Doma} title='Dominyka' />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          <div>
            Bakalauras: Politika ir Žmogaus teisės, Esekso universitetas
          </div>
          <div>
            Magistras: Jungistinės ir Post-Jungistinės studijos, Esekso
            universitetas
          </div>
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
          <Typography className='expanded' paragraph>
            Su didele vaikiška svajone pakeisti pasaulį išvažiavau mokytis į
            Jungtinę Karalystę. Nuo pat pirmo kurso rinkausi psichoanalitikos
            fakulteto siūlomus modulius, kol galiausiai apsisprendžiau, kad
            studijas tęsiu Jungistinės psichologijos srityje. Visą magistrą su
            malonumu „maudžiausi“ man be galo įdomiose temose apie žmogaus
            psichiką, psichoterapijos praktiką, pasąmonę, taip pat visuomenės,
            meno, religijos, politikos ir filosofijos psichologiją. Susidūrimas
            su psichologiniais sunkumais pastūmėjo mane ne tik kreiptis
            pagalbos, bet ir savarankiškai domėtis asmeniniu tobulėjimu. Kadangi
            sunkus mano darbas su savimi neįkainojamai atsipirko, norėčiau
            įkvėpti tuo domėtis ir kitus. Mano pagrindinis tikslas yra
            pritaikyti įgytas žinias ir išmoktus įgūdžius padedant Lietuvos
            žmonėms.
          </Typography>
          <Typography paragraph>
            Laisvalaikiu daug tapau, rašau, mokausi groti gitara. Temos
            priverčiančios suklusti mano smalsumui: menai, žmogaus ir sociumo
            psichika, struktūralizmas, joga, metafizika, sisteminis mąstymas,
            įv. asmenybės raidos teorijos, epistemologija, mirtis, religija ir
            dvasingumas, muzika.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
