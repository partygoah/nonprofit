import React from 'react';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article4Card from '../assets/Article4Card.jpg';
import Article4Pic2 from '../assets/Article4Pic2.jpg';
import Article2Card from '../assets/Article2Card.jpg';
import Article3Card from '../assets/Article3Card.jpg';
import Article5Card from '../assets/Article5Card.jpg';
import Article6Card from '../assets/Article6Card.jpg';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
    marginBottom: '30px',
  },
  media: { height: 150 },
  content: { height: '100%' },
});

export const Article4: React.FC = () => {
  const classes = useStyles();

  const [isOpenDoma, toggleDomaDialog] = React.useState(false);
  const [isOpenIze, toggleIzeDialog] = React.useState(false);

  const handleCloseDoma = () => {
    toggleDomaDialog(false);
  };

  const handleOpenDoma = () => {
    toggleDomaDialog(true);
  };

  const handleCloseIze = () => {
    toggleIzeDialog(false);
  };

  const handleOpenIze = () => {
    toggleIzeDialog(true);
  };

  return (
    <div className='page-content article'>
      <Disclaimer />
      <AuthorDialog isOpen={isOpenDoma} handleClose={handleCloseDoma} />
      <AuthorDialog isEditor isOpen={isOpenIze} handleClose={handleCloseIze} />
      {isMobile ? (
        <h2>Kodėl kartais padėti sau reiškia kreiptis į specialistą?</h2>
      ) : (
        <h1>Kodėl kartais padėti sau reiškia kreiptis į specialistą?</h1>
      )}
      <h4>Psichika ir Jos Reikšmė – III dalis</h4>
      <div
        // className='authors'
        style={{ fontStyle: 'italic', fontSize: 18 }}
        onClick={handleOpenDoma}
      >
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div
        // className='authors'
        style={{ fontStyle: 'italic', fontSize: 18 }}
        onClick={handleOpenIze}
      >
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Kartu ankstesniuose tekstuose jau supratome,{' '}
        <Link
          to='/straipsniai/psichika-ir-jos-reiksme-1'
          style={{ color: 'inherit' }}
        >
          kodėl psichika mūsų gyvenime yra svarbi
        </Link>
        , ir{' '}
        <Link to='/straipsniai/pagalba' style={{ color: 'inherit' }}>
          ką reikia daryti, nusprendus imtis iniciatyvos ja pasirūpinti
        </Link>
        . Tad natūraliai iškyla du klausimai: ką aš galiu dėl to padaryti, ir ar
        tai darysiu vienas?
      </p>
      <p>
        Šiandien aptarsime tiek savipagalbą, tiek pagalbos prašymą iš
        profesionalų. Diskutuosime, kaip apsispręsti, ar mums reikia kreiptis
        pagalbos, ar norime dirbti su savimi vieni.
      </p>
      <h3>
        Nusprendžiau, kad man rūpi psichikos sveikata, – ką aš galiu dėl to
        padaryti?
      </h3>
      <p>
        Pažinti save! Gelmių psichologijos paradigmos tvirtai tiki, jog visi
        atsakymai slypi viduje, tereikia išmokti pažvelgti į save. Būtent tuo
        remdamiesi mes galime pasitelkti į pagalbą dešimtis įvairiausių būdų,
        tam, kad pradėtume eiti savęs pažinimo keliu. Įvairios praktikos
        (psichoterapija, dienoraščio rašymas, įgūdžių įvardinti jausmus ugdymas,
        savianalizė, meditacija, intuityvus šokis ir kt.) sujungtos kartu su
        teorinėmis žiniomis, mums gali atverti duris į spalvingesnį, gilesnį ir
        ramybės kupiną pasaulį. Tolimesniuose straipsniuose pristatysime
        įvairius būdus ir praktikas, aptardami tiek jų galimas naudas, tiek
        pavojus.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Article4Pic2}
          alt='image'
          className='article-image'
          style={{ transform: 'rotate(-90deg)' }}
        />
      </div>
      <p>
        Svarbu suprasti, jog darbas su savimi (nesvarbu kurioje srityje) atneša
        vaisius tuomet, kai žiūrime į ilgalaikius problemų sprendimų būdus.
        Neretai esame įpratę ieškoti paprastų atsakymų ir tikimės greitų
        rezultatų nesuvokdami, kad taip galime netyčia ne tik bėgti nuo
        problemos, bet ir ją pasunkinti.
      </p>
      <h3>Savipagalba</h3>
      <p>
        Savipagalba – tai kai mes nusprendžiame, jog imsimės veiksmų vieni.
        Bandysime tam tikras praktikas ar įvesime naujus įpročius, su tikslu
        išspręsti kokią nors problemą arba patobulėti kurioje nors srityje. Nors
        savipagalba yra be galo naudinga, o bet kokiam tobulėti siekiančiam
        žmogui – svarbi gyvenimo dalis, ji taip pat turi nemažai įvairių spąstų,
        galinčių pasunkinti ar prailginti procesą.
      </p>
      <p>
        Kai kurie iš sunkumų, su kuriais potencialiai galime susidurti
        savipagalboje yra: idėjų ar praktikų pritaikymas, netinkamų mūsų
        problemai, neteisingas savidiagnozavimas, aklas praktikų darymas be
        reikiamo konteksto ar nepakankamų teorinių žinių, nesugebėjimas
        atsirinkti iš tikrųjų naudingos informacijos, gilesnių problemų vengimas
        fokusuojantis į tai, ką mes manome esant „tikrąja problema‘‘, ir daug
        kitų. Vienas didžiausių ne tik savipagalbos, bet ir viso darbo su savimi
        spąstų – savęs apgaudinėjimas.
      </p>
      <p>
        Šias kliūtis aptarsime tolimesniuose straipsniuose, o kol kas svarbu
        būti pastabiems savo motyvams (kokiu tikslu noriu daryti tai, ką darau),
        informacijai, kuria naudojamės ir praktikoms, kurias norime pradėti
        praktikuoti (negailėti laiko patyrinėti įvairius šaltinius, paklausyti
        kuo įvairesnių patirčių). Taip pat svarbu minėtų spąstų ar kliūčių
        neišsigąsti – jie visuomet buvo ir bus mūsų kasdienio gyvenimo dalis, o
        dirbdami su savimi mokomės optimaliau ir efektyviau elgtis sunkumams
        iškilus.
      </p>
      <p>
        <b>ĮSPĖJIMAS:</b> Jeigu įtariate, kad turite rimtų psichikos sutrikimų
        ar susiduriate su rimtais psichiniais sunkumais, rekomenduojame
        nedelsiant kreiptis kreiptis pas profesionalus (kaip tai padaryti galite
        rasti{' '}
        <Link to='/straipsniai/pagalba' style={{ color: 'inherit' }}>
          čia
        </Link>
        ). Prašome neatidėlioti kreipimosi pas specialistus dėl to, jog kažką
        perskaitėte šiame puslapyje. Savipagalba ir darbas su savimi siekiant
        pagerinti savo psichologinę gerovę tėra prevencinė priemonė ir būdas
        pagerinti gyvenimo kokybę, tačiau nuo rimtų psichikos sutrikimų negydo.
      </p>
      <h3>Ar man reikia pagalbos?</h3>
      <p>
        Turbūt pats efektyviausias būdas sau padėti tobulėti yra darbas su
        savimi savipagalbos būdu, dirbant kartu su profesionalu. Žinoma, ne
        visada tą leidžia finansai, tačiau jeigu yra galimybė, investuoti į savo
        ateitį – verta. Kita vertus, jeigu problema darbui su savimi yra ne
        finansai o laiko trūkumas, tobulėti ir spręsti iškilusius sunkumus
        galima nuspręsti paskyrus vieną valandą į savaitę susitikimui su
        profesionalu. Skirtingų praktikų nauda skiriasi, tačiau svarbu
        atsiminti, kad visuomet yra būdas ar išeitis sau padėti. Viskas tiesiog
        priklauso nuo galimybių ir gyvenimo būdo.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article4Card} alt='image' className='article-image' />
      </div>
      <h3>Kuo man gali padėti specialistai?</h3>
      <p>
        Susidūrus su vidiniais ar išoriniais iššūkiais mes dažnai jaučiamės
        vieni. Gali atrodyti kad vienintelis ramstis esame mes patys, nes niekas
        mūsų situacijos nesupranta taip kaip mes. Deja, taip darydami mes
        rizikuojame problemos niekada taip ir neišspręsti, nes tai, ko nematome
        patys, mums gali padėti pamatyti kiti.
      </p>
      <p>
        Psichologų konsultacijos gali padėti identifikuoti sunkumus ir padėti su
        jais susitvarkyti, o ilgalaikė psichoterapija gali padėti išugdyti tam
        tikrus įgūdžius, kurių mums galbūt trūksta. Tiek psichologų
        konsultacijos, tiek ilgalaikės psichoterapijos padeda ugdyti savistabą,
        atpažinti iškylančius jausmus, susitvarkyti su kankinančiais simptomais,
        ilgainiui – simptomus pašalinti. Rezultate, pokalbio terapija gali
        padėti ne tik išmokti pažinti savo save ir savo vidinį pasaulį, bet ir
        pasiruošti išorinio gyvenimo iššūkiams ir lengviau juos išgyventi.
      </p>
      <p>
        Jeigu vis dar abejojame, ar norime kreiptis profesionalų pagalbos,
        galime savęs paklausti šių klausimų:
      </p>
      <li>
        Jeigu tvirtai tikime, kad galime sau padėti, tai kodėl iki šiol dar to
        nepadarėme?
      </li>
      <li>Kodėl dvejoju kreiptis pagalbos?</li>
      <li>
        Ar dvejoju, kad man gali padėti? Kodėl? Ar turiu tam svarių argumentų?
        Iš kur kilę šie įsitikinimai? Ar jie – pagrįsti?
      </li>
      <li>
        Ar pagalbos kreipimasis man yra silpnumo ženklas? Jeigu atsakėme
        teigiamai, iš kur kilęs šis įsitikinimas?
      </li>
      <p>
        Jei nusprendėte, kad galbūt norėtumėte kreiptis pas šios srities
        specialistus, informacijos kaip tai padaryti rasti galite{' '}
        <Link to='/straipsniai/pagalba' style={{ color: 'inherit' }}>
          čia
        </Link>
        .
      </p>
      <p>
        Galbūt savęs pažinimo kelio pradžioje dirbsite vieni, o vėliau
        nuspręsite, kad jums reikia pagalbininkų – žmonių, praėjusių panašų
        kelią ir nusimanančių ten, kur pasimetate. Galbūt, atvirkščiai – kelią
        nuspręsite pradėti su pagalbininkais ir vėliau išmokę reikalingų įgūdžių
        į priekį judėsite vieni. Pasirinkimas priklauso tik nuo jūsų pačių, o
        teisingai pasirinkimą padaryti galite tik būdami sąžiningi su savimi.
      </p>
      <h3>Susiję straipsniai</h3>
      <div
        className='articles-list'
        style={{ justifyContent: 'space-between' }}
      >
        <Card className={classes.card}>
          <Link to='/straipsniai/pagalba' style={{ textDecoration: 'none' }}>
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article2Card} />
              <CardContent className={classes.content}>
                <Typography
                  gutterBottom
                  variant='body1'
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
            to='/straipsniai/psichika-ir-jos-reiksme-2'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article3Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
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
          <Link
            to='/straipsniai/psichoterapijos-galia'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article6Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
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
                  variant='body1'
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
      </div>
      <h3>Šaltiniai:</h3>
      <div
        style={{ fontStyle: 'italic', wordWrap: 'break-word', fontSize: 18 }}
      >
        <p>
          American Psychological Association (2012) ‘Recognition of
          Psychotherapy Effectiveness’, resolution report. Prieiga per
          internetą: <br />
          <a
            href='https://www.apa.org/about/policy/resolution-psychotherapy'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.apa.org/about/policy/resolution-psychotherapy
          </a>
        </p>
        <p>
          American Psychological Association (2021) ‘How to choose a
          psychologist’. Prieiga per internetą: <br />
          <a
            href='https://www.apa.org/topics/psychotherapy/choose-therapist'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.apa.org/topics/psychotherapy/choose-therapist
          </a>
        </p>
        <p>
          Hardwood, M.T., L’Abate, L. (2010) ‘Self- Help in Mental Health: A
          Critical Review’, Springer-Verlag, New York
        </p>
        <p>
          Layous, K., Chancellor, J. and Lyubomirsky, S. (2014) ‘Positive
          activities as protective factors against mental health conditions’,
          Journal of Abnormal Psychology, 123(1), pp.3-12
        </p>
        <p>
          Shedler, J. (2010) ‘The efficacy of psychodynamic psychotherapy’,
          American Psychologist, 65(2), pp.98-109. Prieiga per internetą: <br />
          <a href='https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf '>
            https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf
          </a>
        </p>
      </div>
    </div>
  );
};
