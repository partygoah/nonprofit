import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article9Card from '../assets/Article9Card.jpg';
import Article9Pic2 from '../assets/Article9Pic2.jpg';

import Article7Card from '../assets/Article7Card.jpg';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
    marginBottom: '30px',
  },
  media: { height: 150 },
  content: { height: '100%' },
});

export const Article9: React.FC = () => {
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
        //  <Typography variant="h3">Responsive h3</Typography>
        <h2>
          Nematoma mūsų dalis – pasąmonė: kodėl ji svarbesnė nei įsivaizduojame?
        </h2>
      ) : (
        <h1>
          Nematoma mūsų dalis – pasąmonė: kodėl ji svarbesnė nei įsivaizduojame?
        </h1>
      )}
      <h4>Pasąmonė - I dalis</h4>
      <div className='authors-container' onClick={handleOpenDoma}>
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div className='authors-container' onClick={handleOpenIze}>
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Nepaisant to, kad paskutinius du šimtmečius įvairios teorijos ir
        atradimai – pavyzdžiui, evoliucija – mums vis primena apie pasąmonės
        egzistenciją, šiuolaikinė psichologija yra paskendusi į sąmonę
        orientuotus modelius. Gyvename su įsitikinimu, kad sąmoningi procesai
        yra pirminiai. Ir net jei esame girdėję apie pasąmonės sąvoką, neretai
        esame linkę ją nuvertinti ir nustumti į antrą planą. Tačiau kaip yra iš
        tikrųjų? Ar šie mūsų įsitikinimai pagrįsti?
      </p>
      <p>
        <b>Tad prieš jūsų akis –</b> įvadas į pasąmonę ir jos sąvoką. Norime
        jums papasakoti, kas yra pasąmonė, kokį vaidmenį ji atlieka ir kokio yra
        dydžio. Trumpai panagrinėsime ir pasąmonės sąvoką iš kitokių perspektyvų
        nei gelmių psichologija.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article9Pic2} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>Kas yra pasąmonė?</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Pasąmonė – nežinoma, svetima ir neapčiuopiama mūsų psichikos dalis.
          Tai dalis, daranti įtaką mūsų veiksmams, mintims ir įvairioms
          patirtims mums to nepastebint.“
        </aside>
      </div>
      <p>
        Visuotinėje lietuvių enciklopedijoje pasąmonė apibūdinama kaip „žmogaus
        sąmonės tiesiogiai nesuvokiamų psichikos procesų ir būsenų visuma“.
        Kitaip tariant, pasąmonė – nežinoma, svetima ir neapčiuopiama mūsų
        psichikos dalis. Tai dalis, daranti įtaką mūsų veiksmams, mintims ir
        įvairioms patirtims mums to nepastebint.
      </p>
      <p>
        Pačios pasąmonės neįmanoma pažinti ar pamatyti, nes ją įprasminti galime
        tik per sąmonę. Tai reiškia, kad mes galime patirti tik įvairias
        pasąmonės manifestacijas, tokias kaip jausmai, vaizdiniai ar
        fiziologiniai reiškiniai. Tačiau tai nėra pati pasąmonė, greičiau –
        pasąmonės apraiškos, perfiltruotos per mūsų sąmoningąjį „aš“ – ego.
      </p>
      <p>
        <div className='article-quote left'>
          <aside style={{ display: 'block' }}>
            „Labai lengva perkelti kažkokį mūsų įsivaizdavimą apie pasąmonę ir
            manyti, kad pasąmonė ir yra tai. Tačiau pasąmonė iš tiesų nėra tai,
            ką mes įsivaizduojame.“
          </aside>
        </div>
        Pati pasąmonė mums yra nesuvokiamai plati – tik labai maža jutiminių
        duomenų dalis, apdorojama pasąmonės, kuri, beje, sugeba apdoroti apie 11
        milijonų bitų per sekundę, yra nukreipta į sąmonę. Pastaroji gali
        apdoroti tik apie 50 bitų per sekundę. Tad skirtumas – milžiniškas.
        Kadangi pasąmonė mūsų protui – nesuvokiamas nežinomasis, labai lengva
        perkelti kažkokį mūsų įsivaizdavimą apie pasąmonę ir manyti, kad
        pasąmonė ir yra tai. Tačiau pasąmonė iš tiesų nėra tai, ką mes
        įsivaizduojame.
      </p>
      <h3>Kur yra pasąmonė?</h3>
      <p>
        Įvairios sritys pasąmonę lokalizuoja ir apibūdina skirtingai.
        Pavyzdžiui, biogenetikai pasąmonę bando lokalizuoti{' '}
        <a
          href='https://www.vle.lt/straipsnis/genomas/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          genome
        </a>
        , o neuromokslo atstovai tam tikrose smegenų dalyse. Galima pastebėti,
        kaip bandymai lokalizuoti pasąmonę ar ją apibūdinti priklauso nuo to, iš
        kurios perspektyvos pasąmonė yra tiriama.
      </p>
      <p>
        Gelmių psichologijoje, ypač – analitinėje psichologijoje, pasąmonė
        matoma ne kaip pasislėpusi kažkur mūsų smegenyse ar pakaušyje. Pasąmonė
        matoma kaip prie laiko ar erdvės nepririštas fenomenas. Tai reiškia, kad
        pasąmonė sudaro kūną ir aplinką.
      </p>
      <p>
        Toks požiūris leidžia pažvelgti į pasąmonę ir su ja dirbti būtent
        pasąmonės sąlygomis, „nepakuojant“ jos į mūsų riboto proto limitus. O
        tai yra labai svarbu tiek psichoterapinėje praktikoje, tiek savęs
        pažinimo ir tobulinimo atvejais. Tai nereiškia, kad biogenetikai ar
        neuromokslininkai klysta – integruoti modeliai, tokie kaip
        biopsichosocialinis modelis, jungia šiuos visus požiūrius į vieną –
        randama vis daugiau ir daugiau koreliacijų.
      </p>
      <p>
        Tačiau galiausiai svarbu suprasti tai, kad tam, jog imtumėmės praktinių
        veiksmų, svarbu priimti pasąmonę kaip tiesiog mūsų protui nesuvokiamą
        fenomeną. Tai, jog mes negalime tiksliai apibrėžti, kur ji yra, – o
        galimai gal aiškaus atsakymo niekada ir nebus – nesumažina pasąmonės
        įtakos, reikšmingumo ar mūsų galimybių ją pažinti.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article9Card} alt='image' className='article-image' />
      </div>
      <h3>Pasąmonės rolė iš skirtingų perspektyvų</h3>
      <p>
        Pasąmonė neretai laikoma „kvaila“, ypač{' '}
        <a
          href='https://www.vle.lt/straipsnis/kognityvine-psichologija/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          kognityvinės psichologijos
        </a>{' '}
        srityje. Viena to priežasčių, galimai, yra tyrimai, kuriuose
        kognityvistai apibūdino ir bandė matuoti pasąmonę pagal tai, ar žmogaus
        pasąmonė geba užfiksuoti sąmoningai neužfiksuojamus dirgiklius. Tyrėjai
        padarė išvadą, kad pasąmonė sugeba tik atlikti įprastą ir
        pasikartojančią veiklą, ir kad ji negali suvokti be sąmonės pagalbos.
        Pasąmonė matuojama ir vertinama pagal tai, kaip ji gali geriau
        „mokytis“‘, kitais žodžiais – pasąmonė vertinama pagal struktūrizuotus
        kognityvinius standartus, kurie iš esmės su pačia pasąmone nieko bendro
        neturi. O tokie tyrimai tiesiog atspindi kognityvistų požiūrį, ne pačią
        pasąmonę.
      </p>
      <p>
        Neurobiologijoje, priešingai negu šiuolaikinėje psichologijoje, sąmonė
        nematoma kaip vedantysis. Sudėtingi ir protingi modeliai, susidarę
        gamtoje, vadovaujami ne sąmoningų, o aklai prisitaikančių procesų, kurie
        vyksta natūralios atrankos būdu. Šie procesai yra pasąmoningi. Tiek
        gamtoje, tiek žmoguje (svarbu nepamiršti, kad žmogus yra gamtos dalis),
        šie procesai yra protingi ir gudrūs.
      </p>
      <p>
        <div className='article-quote right'>
          <aside style={{ display: 'block' }}>
            „Gelmių psichologijoje pasąmonė taip pat matoma kaip žmogaus elgesio
            variklis.“
          </aside>
        </div>
        Gelmių psichologijoje pasąmonė taip pat matoma kaip žmogaus elgesio
        variklis. Priklausomai nuo gelmių psichologijos pakraipos, pasąmonei
        priskiriamos skirtingos savybės kaip, pavyzdžiui, seksualiniai ir
        dauginimosi instinktai arba kūrybos siekiai. Apie tai giliau
        padiskutuosime antrame šios serijos straipsnyje.
      </p>
      <p>
        Kol kas galime pradėti atkreipti dėmesį ir pagalvoti apie tai, kiek
        sąmoningai prisidedame prie gyvybiškai svarbių kūno procesų, tokių kaip
        kvėpavimas, širdies plakimas, virškinimas ir kita. Šie procesai vyksta
        už mūsų sąmonės ribų. Mat mūsų kūnas yra valdomas pasąmoningų procesų.
        Mes tiesiogiai nežinome, kas vyksta mūsų plaučiuose ar kasoje, nebent
        patiriame netiesioginius simptomus ar laikui bėgant išsivysto liga.
      </p>
      <p>
        Jeigu mūsų kūne vienu metu vyksta <i>n</i> mums nežinomų ir nesuvokiamų
        procesų, kurių, beje, mes absoliučiai nekontroliuojame, galime tik
        įsivaizduoti kiek tokių pasąmoningų procesų vyksta mūsų psichikoje. Toks
        mūsų kasdienių patirčių persvarstymas ne tik padeda įvertinti pasąmonės
        svarbą, bet ir suteikia galimybę pažvelgti į ryšį tarp kūno ir
        pasąmonės.
      </p>
      <p>
        Pasąmonės sąvoka mums leidžia pažvelgti į save ir aplinkinius iš šiek
        tiek kitokios perspektyvos nei mums įprasta. Tai nėra tik kažkoks
        papildomas teorinis intelektualizavimas – pasąmonės koncepto apmąstymas
        ir priėmimas mums atveria duris į gilų ir dar neatrastą mūsų psichikos
        pasaulį, su kuriuo galime susipažinti.
      </p>
      <p style={{ color: 'rgb(120, 211, 253)' }}>
        Antroje šios serijos dalyje giliau pažvelgsime į pasąmonės reikšmę ir
        vaidmenį mūsų kasdienybėje. Peržvelgsime pasąmonės „norus“ ir tam tikrus
        psichikos dėsnius.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        <Card className={classes.card}>
          <Link to='/straipsniai/pasamone-2' style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia className={classes.media} image={Article9Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
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
            to='/straipsniai/gelmiu-psichologija'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article7Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
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
      </div>
      <h3>Šaltiniai:</h3>
      <div className='sources'>
        <p>
          Bargh, J. and Morsella, E. (2008){' '}
          <i>‘The Unconscious Mind’, Perspectives on Psychological Science</i>,
          3(1), pp.73-79.
        </p>
        <p>
          Dylan Wiliam (2006) <i>‘The half‐second delay: what follows?’</i>,
          Pedagogy, Culture & Society, 14:1, 71-81. Prieiga per internetą:
          <br />
          <a
            href='https://www.tandfonline.com/doi/pdf/10.1080/14681360500487470#:~:text=There%20is%20an%20increasing%20body,approximately%2050%20bits%20per%20second)'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.tandfonline.com/doi/pdf/10.1080/14681360500487470#:~:text=There%20is%20an%20increasing%20body,approximately%2050%20bits%20per%20second)
          </a>
        </p>
        <p>
          Kaylo J. (2003)
          <i>‘The Phenomenological Body and Analytical Psychology’</i>. Prieiga
          per internetą: <br />
          <a
            href='https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.452.2907&rep=rep1&type=pdf'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.452.2907&rep=rep1&type=pdf
          </a>
        </p>
        <p>
          Rakover, S. (1994)
          <i>
            ‘Learning without awareness: What counts as an appropriate test of
            learning and of awareness’, Behavioral and Brain Sciences,
          </i>
          , 17(3), pp.417-418.
        </p>
        <p>
          Solms, M. (2017){' '}
          <i>
            ‘What is “the unconscious,” and where is it located in the brain? A
            neuropsychoanalytic perspective’. Annals of the New York Academy of
            Sciences,
          </i>
          , 1406(1), pp.90-97. Prieiga per internetą: <br />
          <a
            href='https://www.psychoanalyse-basel.ch/documents/W%202017%20Solms%20Where%20is%20the%20ucs.pdf'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.psychoanalyse-basel.ch/documents/W%202017%20Solms%20Where%20is%20the%20ucs.pdf
          </a>
        </p>
        <p>
          Solms, M., Arnold, S. and Leuzinger-Bohleber, M. (2017){' '}
          <i>
            ‘The unconscious: A Bridge Between Psychoanalysis and Neuroscience’
          </i>
          , New York : Routledge.
        </p>
        <p>
          Solms, M. (2021) <i>‘The Role of the Unconscious’</i>
          , University of Cape Town, [vaizdo įrašas] Prieiga per internetą:
          <br />
          <a
            href='https://www.youtube.com/watch?v=oCVOeaAuA3c'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.youtube.com/watch?v=oCVOeaAuA3c
          </a>
        </p>
        <p>
          Von Franz, M.L. (1998){' '}
          <i>
            ‘On Dreams and Death: a Jungian Interpretation’, Chicago, Ill. :
            Open Court.
          </i>
        </p>
        <p>
          Woodman, M. (2009) <i>‘Addiction to perfection’</i>. Brantford, Ont.:
          W. Ross MacDonald School Resource Services Library.
        </p>
        <p>
          Zwart, H. (2013){' '}
          <i>
            ‘The Genome as the Biological Unconscious – And the Unconscious as
            the Psychic ‘Genome’: A Psychoanalytical Rereading of Molecular
            Genetics’, Cosmos and History: The Journal of Natural and Social
            Philosophy
          </i>
          , vol. 9, no. 2, 2013, Prieiga per internetą: <br />
          <a
            href='https://ssrn.com/abstract=2373121'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://ssrn.com/abstract=2373121
          </a>
        </p>
      </div>
    </div>
  );
};
