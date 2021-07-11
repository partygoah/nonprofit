import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article1Card from '../assets/Article1Card.jpg';
import Article1Pic2 from '../assets/Article1Pic2.jpg';
import Article4Card from '../assets/Article4Card.jpg';
import Article3Card from '../assets/Article3Card.jpg';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { HighlightedQuote } from '../components/HighlightedQuote';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
    marginBottom: '30px',
  },
  media: { height: 150 },
  content: { height: '100%' },
});

export const Article: React.FC = () => {
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
        <h2>
          Nematoma, bet būtina: kodėl svarbu skirti dėmesio savo vidiniam
          pasauliui?
        </h2>
      ) : (
        <h1>
          Nematoma, bet būtina: kodėl svarbu skirti dėmesio savo vidiniam
          pasauliui?
        </h1>
      )}
      <h4>Psichika ir Jos Reikšmė – I dalis</h4>
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
        Mokytis, dirbti, susirasti tobulą partnerį, pasiekti visus gyvenimo
        tikslus, bėgti ir niekada gyvenime nesustoti jau tapo daugelio gyvenimo
        mantra. Tačiau visoje gyvenimo beprotybėje, pasimetus išoriniame
        pasaulyje pritrūksta laiko žvilgtelėti į savo vidų, kur galime surasti
        net ištisą visatą. Tad šiandien norime pasikalbėti apie dalykus, apie
        kuriuos gerdami rytinę kavą dažniausiai nesusimąstome – kas yra psichika
        ir psichikos sveikata. O kartu trumpai paanalizuosime psichikos reikšmę
        mūsų kasdieniniame gyvenime.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article1Card} alt='image' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Šaltinis: freepik.com
      </div>
      <h3>Kas yra psichika?</h3>
      <p>
        Tiek šiame, tiek tolimesniuose tekstuose, kai kalbėsime apie psichiką,
        omenyje turėsime visų psichinių procesų (tiek sąmoningų, tiek
        nesąmoningų) visumą. Psichika – žodis, apimantis protą (lietuvių kalboje
        dažnai asocijuojamą su racionaliu mąstymu, arba sąmoningais procesais),
        jausmus, emocijas ir visą pasąmonę (mums nematomi, sąmonei nepavaldūs,
        tačiau nuolat vykstantys procesai).
      </p>
      <h3>Kas yra psichikos sveikata?</h3>
      <p>
        Pasaulio Sveikatos Organizacija (PSO) apibūdina psichikos sveikatą kaip
        individo gebėjimą suvokti savo įgūdžius ir gebėjimus, bei susitvarkyti
        ir susidoroti su įprastais sunkumais. Taip pat gebėjimą atlikti
        produktyvią veiklą ir prisidėti prie savo bendruomenės gerovės.
      </p>
      {/* <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Tam tikros mąstymo pakeitimo terapijos ar vaistai, nors ir galintys
          stipriai prisidėti prie žmogaus psichikos sveikatos gydymo (vaistai
          dažnai naudojami kartu su psichoterapija, ypač gydymo pradžioje) bei
          ženkliai mažinantys simptomus, dažniausiai šakninės problemos
          nepanaikina. Galimai jie tėra laikinos išeitys, kurias galima
          sulyginti su ibuprofeno išgėrimu atsiradus galvos skausmui.“
        </aside>
      </div> */}
      {/* <HighlightedQuote>
        Tam tikros mąstymo pakeitimo terapijos ar vaistai, nors ir galintys
        stipriai prisidėti prie žmogaus psichikos sveikatos gydymo (vaistai
        dažnai naudojami kartu su psichoterapija, ypač gydymo pradžioje) bei
        ženkliai mažinantys simptomus, dažniausiai šakninės problemos
        nepanaikina. Galimai jie tėra laikinos išeitys, kurias galima sulyginti
        su ibuprofeno išgėrimu atsiradus galvos skausmui.
      </HighlightedQuote> */}
      <p>
        <a
          href='https://www.vle.lt/straipsnis/gelmiu-psichologija/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          Gelmių psichologijoje
        </a>{' '}
        PSO bent vieno iš minėtų psichikos sveikatos bruožų nebuvimas yra
        matomas kaip gilesnių problemų simptomas. Tam tikros mąstymo pakeitimo
        terapijos (kaip kognityvinė elgesio terapija) ar vaistai, nors ir
        galintys stipriai prisidėti prie žmogaus psichikos sveikatos gydymo
        (vaistai dažnai naudojami kartu su psichoterapija, ypač gydymo
        pradžioje) bei ženkliai mažinantys simptomus, dažniausiai šakninės
        problemos nepanaikina. Galimai jie tėra laikinos išeitys, kurias galima
        sulyginti su ibuprofeno išgėrimu atsiradus galvos skausmui.
      </p>
      <p>
        Kokiems nors simptomams pasireiškus, giluminės psichoterapijos
        paradigmos žiūri į balansą tarp sąmonės ir pasąmonės. Pavyzdžiui,
        psichoanalizė, analitinė psichologija, psichodinamika. Taip pat į
        balansą tarp psichikos ir kūno – pavyzdžiui, Geštalto, analitinė ar
        transpersonalinė psichologijos. Pati žmogaus psichika gelmių
        psichologijoje matoma kaip pastoviai besikeičianti, judanti, lanksti,
        savireguliuojanti ir nuolat prisitaikanti prie aplinkos veiksnių.
      </p>
      <h3>
        Kodėl svarbu atkreipti dėmesį į emocijas, jausmus ir tai, kaip veikia
        mūsų protas?
      </h3>
      <p>
        Paprastumo dėlei emocijų, jausmų ir proto junginį toliau vadinsime
        vidiniu pasauliu. Skirdami laiko ir dėmesio pažinti savo vidiniam
        pasauliui, išmokstame suprasti, kaip veikia mūsų psichika. Šiais laikais
        mūsų visuomenėje matomas ryškus išorinio pasaulio – išsilavinimas,
        darbas, išvaizda ir fizinė sveikata, materialios vertybės,
        technologijos, politiniai pasaulio įvykiai ir kt. – pabrėžimas.
        Gyvendami tokioje visuomenėje, neišvengiamai skiriame daugiau dėmesio
        išoriniam, o ne vidiniam pasauliui. Tačiau taip nejučia apleidžiame savo
        psichikos sveikatą ir retai pagalvojame apie tai, kad mūsų išorinis
        pasaulis tiesiogiai priklauso nuo mūsų psichologijos.
      </p>
      <p>
        Anot Jungo, mūsų protas (aut. past. artimesnis žodis lietuvių kalboje
        turbūt būtų psichika, nes kalbama ne tik apie racionalųjį intelektą,
        angl. mind) yra filtras, per kurį mes neišvengiamai komunikuojame su
        pasauliu. Tai, kaip mes jaučiamės čia ir dabar, yra mūsų realybė. O
        nuotaika neretai nudažo mūsų dieną atitinkamomis spalvomis.
      </p>
      <p>
        Žiūrint iš gelmių psichologijos perspektyvos, tiesioginė patirtis (tai,
        ką aš patiriu būtent čia ir dabar) nėra tiesiog „nuogas“, objektyvus
        išorinio pasaulio patyrimas. Priešingai, mes patiriame aplinką per savo
        protą: be perstojo sąmoningai ir pasąmoningai interpretuojame mus
        supančius daiktus, žmones, įvykius, taip pat savo jausmus, emocijas ir
        įvairias būsenas.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article1Pic2} alt='apple' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Šaltinis: freepik.com
      </div>
      <p>
        Žiūrėdami į obuolį, mes matome ne tiesiog obuolį, o tai, ką mūsų protas
        sako apie obuolį (viskas, ką apie tai esame išmokę nuo mažens tiek iš
        savo šeimos, tiek iš visuomenės, susimaišę su mūsų pačių individualia
        patirtimi). Šis procesas yra pasąmoningas, tad mums nematomas ir
        nepastebimas. Žiūrėdami į matytą daiktą juk žinome, kas tai yra – jo
        racionaliai, žodžiais įvardyti sau nereikia.
      </p>
      <p>
        Mūsų psichika nuolat interpretuoja ne tik aplinką, bet ir savo pačios
        dalis. Tad tas pats procesas gali būti matomas visuose gyvenimo
        aspektuose, kaip, pavyzdžiui, bendraujant su aplinkiniais, kūryboje,
        priimant naują arba seną informaciją, patiriant iškilusius jausmus,
        emocijas ir netgi mūsų vidinį monologą, kai kalbamės su savimi galvoje.
      </p>
      <p>
        Susidūrus su gyvenimo sunkumais ar patiriant skausmą, mūsų psichika yra
        atsakinga už reakciją į tą skausmą ar sunkumus. Tai, kokiais
        pasąmoningais „filtrais“ mūsų psichika „aprengia“ mūsų potyrius, daro
        tiesioginę įtaką mūsų psichologinei būsenai ne tik iškilus sunkumams,
        bet ir tolimesniuose žingsniuose, kai reikės su jais tvarkytis.
      </p>
      <h3>Ką svarbiausia atsiminti?</h3>
      <p>
        Tai supratę, galime teigti, jog savęs pažinimas ir psichologinės gerovės
        gerinimas yra tiesiogiai susijęs su mūsų išorinio ir vidinio pasaulio
        potyriais. Mūsų psichika yra filtras, per kurį patiriame pasaulį, jį
        vertiname, jaučiame ir kritikuojame. Būtent dėl to, rūpinimasis
        psichikos sveikata neretai gali būti vienu efektyviausių būdų ženkliai
        pagerinti gyvenimo kokybę. Neskirdami dėmesio savo psichikai pažinti
        rizikuojame laiku nepastebėti įvairių psichologinių sutrikimų ar
        priklausomybių išsivystymo.
      </p>
      <p>
        Kitame šios serijos tekste kalbėsime apie tai, kada vertėtų susirūpinti
        savo psichikos sveikatos būkle.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        {' '}
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
                  variant='body1'
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
      </div>
      <h3>Šaltiniai:</h3>
      <div
        style={{ fontStyle: 'italic', wordWrap: 'break-word', fontSize: 18 }}
      >
        <p>
          Adler, A. and Brett, C.(1998) ‘Understanding life’, Center City,
          Minn.: Hazelden.
        </p>
        <p>
          American Psychological Association (2012) ‘Recognition of
          Psychotherapy Effectiveness’, resolution report. Prieiga per
          internetą: <br />
          <a href='https://www.apa.org/about/policy/resolution-psychotherapy'>
            https://www.apa.org/about/policy/resolution-psychotherapy
          </a>
        </p>
        <p>
          Jung, C.G. (1966) ‘The Psychology of the Transference’, from ‘The
          Practice of Psychotherapy’, vol.16 of ‘The Collected Works of
          C.G.Jung’. London: Routledge & Kegan Paul; Princeton, New Jersey:
          Princeton University Press.
        </p>
        <p>
          Jung, C. G. (1969) ‘The Ego’, from ‘Aion: Researches into the
          Phenomenology of the Self’, vol. 9ii of ‘The Collected Works of
          C.G.Jung’. London: Routledge & Kegan Paul; Princeton, New Jersey:
          Princeton University Press.
        </p>
        <p>
          Jung, C. G. (1970) ‘Psychological Commentary on the Tibetan Book of
          the Great Liberation’, from ‘Psychology and Religion: West and East’,
          vol. 11 of ‘The Collected Works of C.G.Jung’. London: Routledge &
          Kegan Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Richards, P., Richards, S. and Dowling, J., (2020) ‘Carl Jung versus
          CBT’ [vaizdo įrašas] Prieiga per internetą: <br />
          <a href='https://www.youtube.com/watch?v=JVUIsYDfBlo&t=4s'>
            https://www.youtube.com/watch?v=JVUIsYDfBlo&t=4s
          </a>
        </p>
        <p>
          World Health Organization (2018) Mental Health: Strengthening our
          Response. Prieiga per internetą: <br />
          <a href='https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response#:~:text=Mental%20health%20is%20a%20state,to%20his%20or%20her%20community'>
            https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response
          </a>
        </p>
      </div>
    </div>
  );
};
