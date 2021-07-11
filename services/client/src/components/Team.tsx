import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Marius from '../assets/Marius.jpg';
import Julija from '../assets/Julija.jpg';
import Martyna from '../assets/Martyna.jpg';
import { DomaCard } from '../components/members/DomaCard';
import { IzeCard } from '../components/members/IzeCard';

// const mediaquery = '@media only screen and (max-width: 600px)';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    root: {
      width: '32%',
      height: 'auto',

      marginBottom: '20px',
      //   alignSelf: 'center',
      //   mediaquery: { maxWidth: '100%' },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    expanded: {
      fontSize: '20px',
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
  })
);

export const Team: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //   const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      <DomaCard isTeamComponent />
      <Card className={classes.root}>
        <CardHeader
          title='Marius Vaitaitis'
          subheader='Steigėjas | Plėtros koordinatorius'
        />
        <CardMedia className={classes.media} image={Marius} title='Marius' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Bakalauras: Buhalterinė apskaita ir finansai, Esekso universitetas
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
              Nors ir baigiau Apskaitos ir Finansų studijas Esekso universitete,
              šiuo metu esu duomenų analitikas. Ilgą laiką blaškiausi po
              Jungtinę Karalystę, Liuksemburgą, tačiau kurį laiką apsisprendžiau
              pabūti Lietuvoje. Vis tik troškimas įstumti save į nepažįstamą
              vietą ir suktis kaip išeina dar nėra dingęs. Laisvalaikį karantino
              metu praleidžiu bėgiodamas, mokydamasis prancūzų kalbos,
              gilindamas finansų, duomenų analizės, bei programavimo žinias. Na
              ir žinoma – šachmatai. Pasibaigus karantinui, prie laisvalaikio
              galėčiau pridėti BBQ su draugais, ko begalo pasiilgau. Temos,
              kurios niekada neatsibosta: technologijos, finansų rinka, lengvoji
              atletika, bet manau, su tinkamais žmonėmis – nėra nuobodžių temų.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <IzeCard isTeamComponent />
      <Card className={classes.root}>
        <CardHeader
          title='Martyna Gajauskaitė'
          subheader='Savanorė | IT specialistė'
        />
        <CardMedia className={classes.media} image={Martyna} title='Martyna' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Bakalauras: Informatika, Vilniaus Universitetas
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
              Esu „tiksliukė“ ir mane visada ypatingai žavėjo technologijos. Vis
              tik įdomiausias mechanizmas man – žmogaus smegenys, tad vos radusi
              laisvą minutę skaitymui dažnai renkuosi neuropsichologijos
              tematiką. Džiaugiuosi, kad galiu prisidėti prie projekto, kuris ne
              tik įdomus, bet ir padeda spręsti šiuolaikiniam žmogui aktualias
              problemas. Manau, kad „Jau dabar“ skaitytojams siunčia svarbią
              žinutę, jog nesi vienas, suteikia pripažinimo ir priklausymo
              bendruomenei pojūtį – manau, kad žmogui tai yra vienas esminių
              emocinių poreikių. Laisvą laiką leidžiu miške, mėgstu įvairų
              sportą, dievinu muziką ir mokslinę fantastiką.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          title='Julija Petrauskaitė'
          subheader='Savanorė | Komunikacijų ir marketingo koordinatorė'
        />
        <CardMedia className={classes.media} image={Julija} title='Julija' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Bakalauras: Žiniasklaida ir kultūra, Amsterdamo Universitetas
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
              Studijuoju Žiniasklaidos ir Kultūros bakalauro programoje
              Amsterdamo universitete. Esu dirbusi ne pelno siekiančiose
              organizacijose ir reguliariai savanoriauju įvairiose Lietuvos
              pacientų asociacijose, tad turiu patirties dirbant ties jautriomis
              temomis, kurioms svarbus žinomumo skatinimas. Domiuosi
              psichologija, senąja lietuvių pagonybe ir papročiais ir gilinuosi
              į vakarų ezoterikos mokslus.
            </Typography>
            <Typography paragraph>
              Temos priverčiančios suklusti mano smalsumui: Žmonių tarpusavio
              santykiai, žmogaus teisės bei susijusios socialinės problemos,
              prekybos žmonėmis problematika.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
