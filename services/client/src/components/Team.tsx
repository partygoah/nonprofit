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
          subheader='Steig??jas | Pl??tros koordinatorius'
        />
        <CardMedia className={classes.media} image={Marius} title='Marius' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Bakalauras: Buhalterin?? apskaita ir finansai, Esekso universitetas
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
              Nors ir baigiau Apskaitos ir Finans?? studijas Esekso universitete,
              ??iuo metu esu duomen?? analitikas. Ilg?? laik?? bla??kiausi po
              Jungtin?? Karalyst??, Liuksemburg??, ta??iau kur?? laik?? apsisprend??iau
              pab??ti Lietuvoje. Vis tik tro??kimas ??stumti save ?? nepa????stam??
              viet?? ir suktis kaip i??eina dar n??ra ding??s. Laisvalaik?? karantino
              metu praleid??iu b??giodamas, mokydamasis pranc??z?? kalbos,
              gilindamas finans??, duomen?? analiz??s, bei programavimo ??inias. Na
              ir ??inoma ??? ??achmatai. Pasibaigus karantinui, prie laisvalaikio
              gal????iau prid??ti BBQ su draugais, ko begalo pasiilgau. Temos,
              kurios niekada neatsibosta: technologijos, finans?? rinka, lengvoji
              atletika, bet manau, su tinkamais ??mon??mis ??? n??ra nuobod??i?? tem??.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <IzeCard isTeamComponent />
      <Card className={classes.root}>
        <CardHeader
          title='Martyna Gajauskait??'
          subheader='Savanor?? | IT specialist??'
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
              Esu ???tiksliuk????? ir mane visada ypatingai z??ave??jo technologijos. Vis
              tik i??domiausias mechanizmas man ??? z??mogaus smegenys, tad vos radusi
              laisva?? minute?? skaitymui daz??nai renkuosi neuropsichologijos
              tematika??. Dz??iaugiuosi, kad galiu priside??ti prie projekto, kuris ne
              tik i??domus, bet ir padeda spre??sti s??iuolaikiniam z??mogui aktualias
              problemas. Manau, kad ???Jau dabar??? skaitytojams siunc??ia svarbia??
              z??inute??, jog nesi vienas, suteikia pripaz??inimo ir priklausymo
              bendruomenei poju??ti?? ??? manau, kad z??mogui tai yra vienas esminiu??
              emociniu?? poreikiu??. Laisva?? laika?? leidz??iu mis??ke, me??gstu i??vairu??
              sporta??, dievinu muzika?? ir moksline?? fantastika??.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          title='Julija Petrauskait??'
          subheader='Savanor?? | Komunikacij?? ir marketingo koordinator??'
        />
        <CardMedia className={classes.media} image={Julija} title='Julija' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Bakalauras: ??iniasklaida ir kultu??ra, Amsterdamo Universitetas
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
              Studijuoju ??iniasklaidos ir Kultu??ros bakalauro programoje
              Amsterdamo universitete. Esu dirbusi ne pelno siekianc??iose
              organizacijose ir reguliariai savanoriauju i??vairiose Lietuvos
              pacientu?? asociacijose, tad turiu patirties dirbant ties jautriomis
              temomis, kurioms svarbus z??inomumo skatinimas. Domiuosi
              psichologija, sena??ja lietuviu?? pagonybe ir paproc??iais ir gilinuosi
              i?? vakaru?? ezoterikos mokslus.
            </Typography>
            <Typography paragraph>
              Temos priverc??ianc??ios suklusti mano smalsumui: ??moniu?? tarpusavio
              santykiai, z??mogaus teise??s bei susijusios socialine??s problemos,
              prekybos z??mone??mis problematika.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
