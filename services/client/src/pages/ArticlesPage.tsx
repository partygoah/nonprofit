import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Article1Card from '../assets/Article1Card.jpg';
import Article2Card from '../assets/Article2Card.jpg';
import Article3Card from '../assets/Article3Card.jpg';
import Article4Card from '../assets/Article4Card.jpg';
import Article5Card from '../assets/Article5Card.jpg';
import Article6Card from '../assets/Article6Card.jpg';
import Article7Card from '../assets/Article7Card.jpg';
import Article8Card from '../assets/Article8Card.jpg';
import Article9Card from '../assets/Article9Card.jpg';
import Article10Card from '../assets/Article10Card.jpg';
import Article11Card from '../assets/Article11Card.jpg';
import Article12Card from '../assets/Article12Card.jpg';
import Article13Card from '../assets/Article13Card.jpg';
import Article14Card from '../assets/Article14Card.jpg';

const useStyles = makeStyles({
  card: { maxWidth: 345, marginBottom: '30px' },
  media: { height: 180 },
  content: { height: '100%' },
  header: {},
});

export const ArticlesPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className='page-content'>
      <div className='articles-page' style={{ paddingBottom: '70px' }}>
        <Card className={classes.card}>
          <Link to='/straipsniai/pasamone-2' style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Article14Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Už mus gudresnė pasąmonė, kurioje slepiasi ir visa ateities
                  informacija
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Pasąmonė - II dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-07-07
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/audio-pokalbis-su-LRT-06-24'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article13Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  „Jau Dabar‘‘ vadovė: „Kaip nuspręsime, kad Lietuvoje apie
                  psichikos sveikatą kalbame pakankamai?‘‘
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Interviu su LRT radiju
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-07-01
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/samokslo-teorijos-3'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article12Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Ką turi bendro pasąmonė ir sąmokslo teorijos?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Sąmokslo teorijos - III dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-06-23
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/samokslo-teorijos-2'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article11Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kognicija, mokslinis raštingumas ir kodėl vakcinos vis dėlto
                  nesukelia autizmo
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Sąmokslo teorijos - II dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-06-16
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/samokslo-teorijos-1'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article10Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Sąmokslo teorijos: kodėl svarbu iš jų ne tik juoktis?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Sąmokslo teorijos - I dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-06-09
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link to='/straipsniai/pasamone-1' style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Article9Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Nematoma mūsų dalis – pasąmonė: kodėl ji svarbesnė nei
                  įsivaizduojame?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Pasąmonė - I dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-05-26
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/praktiku-prasme-asmeniniame-tobulejime-1'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article8Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kodėl geriau vieną kartą išbandyti nei 10 kartų išgirsti?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Praktikų prasmė asmeniniame tobulėjime - I dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-05-19
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/gelmiu-psichologija'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article7Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kas per „daiktas“ ta gelmių psichologija?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichologijos ABC
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-05-12
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichoterapijos-galia'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article6Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Psichoterapija – tik sergantiems: bet ar tikrai?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichoterapijos galia
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-05-04
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichologiniai-patarimai-ir-asmenine-atsakomybe'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article5Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  „Man viskas gerai“ arba trumpai apie saviapgaulę
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichologiniai patarimai ir asmeninė atsakomybė
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-04-28
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichika-ir-jos-reiksme-3'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article4Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kodėl kartais padėti sau reiškia kreiptis į specialistą?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichika ir Jos Reikšmė - III dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-04-21
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichika-ir-jos-reiksme-2'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article3Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  101 priežastis, kodėl nereikia ignoruoti savo vidinio balso{' '}
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichika ir Jos Reikšmė - II dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-04-14
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link to='/straipsniai/pagalba' style={{ textDecoration: 'none' }}>
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article2Card} />
              <CardContent className={classes.content}>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Pirmas žingsnis – nuspręsti kreiptis pagalbos.
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  O kas toliau?
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-04-07
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichika-ir-jos-reiksme-1'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article1Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kodėl svarbu skirti dėmesio savo vidiniam pasauliui?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichika ir Jos Reikšmė - I dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-03-31
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    </div>
  );
};
