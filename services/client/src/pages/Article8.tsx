import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article8Card from '../assets/Article8Card.jpg';
import Article4Card from '../assets/Article4Card.jpg';

import { Link } from 'react-router-dom';

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

export const Article8: React.FC = () => {
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
        <h2>Kodėl geriau vieną kartą išbandyti nei 10 kartų išgirsti?</h2>
      ) : (
        <h1>Kodėl geriau vieną kartą išbandyti nei 10 kartų išgirsti?</h1>
      )}
      <h4>Balansas tarp intelektualinių žinių ir praktikos</h4>
      <h5>Praktikų prasmė asmeniniame tobulėjime I</h5>
      <div
        style={{ fontStyle: 'italic', fontSize: 18 }}
        onClick={handleOpenDoma}
      >
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div
        style={{ fontStyle: 'italic', fontSize: 18 }}
        onClick={handleOpenIze}
      >
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        „Mokytis, mokytis, ir dar kartą, mokytis!“ – tebesigirdi buvusios
        Sovietų Sąjungos atgarsiai mūsų sąmonėse. Galime susidurti su
        įsitikinimu, kad tam, jog psichologiškai augtume mums užtenka ką nors
        paskaityti ir įsiminti. Kaip galime tūkstančius kartų girdėti, kad
        sveika mityba – raktas į fizinės sveikatos gerinimą, taip galime
        perskaityti šimtus knygų apie vidinę ramybę, žmogaus psichologiją ir
        meditacijos praktiką. Tačiau niekada iš tiesų nesuprasime, apie ką tie
        žmonės šneka ar ką tos knygos rašo, kol patys neskirsime laiko veiksmams
        atlikti.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article8Card} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>Svarbiausia – balansas</h3>
      <p>
        Jeigu esate pragmatikas, turbūt pradėjote ploti rankomis: „Taip, taip!
        Kam ta teorija, kam tie nereikalingi intelektualiniai išvedžiojimai ir
        filosofija, tiesiog reikia imti ir daryti!“. Deja, turėsime jus nuvilti
        – teorija yra lygiai tiek pat svarbi, kiek praktika. Teorija parodo
        daugelį įvairių būdų praktikuotis, leidžia praktiką strateguoti,
        modifikuoti, išsigryninti. Taip pat teorija gali pasakyti, kuri praktika
        mums naudos neatneš, o gal net bus pavojinga.
      </p>

      <p>
        Teoriją įkūnyti ir paversti savo gyvenimo dalimi galima tik atliekant
        praktinį veiksmą. Tuo pačiu praktinis veiksmas be teorinio pagrindo gali
        būti absoliučiai beprasmis. Trumpai tariant – teorija paveikia praktiką,
        o praktika padeda geriau suprasti teoriją.
      </p>
      <p>
        Kadangi balansas tarp teorijos ir praktikos neišvengiamai yra asmeninio
        augimo pagrindas, svarbu pastebėti, į kurį iš šių kraštutinumų esame
        linkę. Bandant įsivertinti, nepamirškite, kad lygaus, 50/50, balanso čia
        ir dabar pasiekti nelabai įmanoma – natūralu, kad pradžioje, galbūt,
        daugiau laiko bus skiriama teorijai, po to – praktikai ir panašiai.
        Svarbu susidaryti vaizdą iš ilgalaikės perspektyvos – tik tada įmanoma
        pamatyti, kur energijos išeikvojate per daug ar per mažai.
      </p>
      <h3>Klausimai, kurių galite savęs paklausti:</h3>
      <li>
        Kas mane labiau „veža“ – sudėtingi filosofiniai išvedžiojimai ar
        konkretaus veiksmo darymas? Kodėl?
      </li>
      <li>Ar esu iš tų žmonių, kuris daug kalba, bet mažai daro?</li>

      <li>
        Ar apleidžiu strategiją ir apmąstymus apie ilgalaikiškumą, o vietoj to
        esu linkęs tiesiog veikti?
      </li>

      <li>
        Ar turiu didesnį žinių bagažą, negu, kad sugebu įkūnyti? (Pavyzdžiui,
        galėčiau valandų valandas kalbėti apie tai, ką reikėtų daryti pykčio
        priepuolio metu, tačiau sukilus pykčiui tų būdų pats nepraktikuoju. Mano
        vertybės nesutampa su mano veiksmais);
      </li>

      <li>
        Ar esu pastoviai linkęs daryti prielaidas ir pagal jas – veiksmus,
        nepraleidęs laiko pasidomėti teorija? (Pavyzdžiui, kamuoja persivalgymo
        priepuoliai, darau prielaidą, kad tai – mano valios trūkumas ir
        stengiuosi dar stipriau kontroliuoti save kitą kartą, kai valgysiu.
        Nesidomiu apie galimas gilesnes, galbūt psichologines priežastis).
      </li>

      <li>
        Ar pastoviai bandau „išgalvoti“ keblią situaciją, vietoj to, kad
        padaryčiau vieną lemiamą veiksmą? (Pavyzdžiui, kenčiu nuo slogios
        nuotaikos, tingumo, motyvacijos trūkumo. Bandau išmąstyti įvairius
        pasiteisinimus ar teorijas ir gyvenu nieko nekeisdamas, vietoj to, kad
        tiesiog imčiau ir daryčiau veiksmą – galbūt pagaliau nueičiau
        pasikonsultuoti su psichologu);
      </li>

      <li>
        Ką šie mano atsakymai pasako apie mano santykį su teorija ar praktika?
      </li>
      <p>
        Jeigu šiuos klausimus tiesiog perskaitėte ir neskyrėte laiko į juos
        detaliai atsakyti – tai tėra teorinė dalis, tačiau jeigu į juos atsakėte
        (galbūt – netgi užsirašėte?) – įvykdėte ir praktinę dalį.
      </p>
      <h3>Praktikų ir pozityvių veiklų nauda</h3>
      <p>
        Sausa teorija ir intelektualinės žinios duoda tik informaciją, tačiau
        gyvenimui keisti reikalingos psichologinės – emocinės – įžvalgos ir
        suvokimai. Mes jums galime padėti įgyti intelektualinių žinių, tačiau
        praktinės dalies atlikimas priklauso tik nuo jūsų. Juk norint išmokti
        vairuoti neužtenka vien paskaityti apie tai, kaip reikia vairuoti. Bet
        vairuoti nepaskaičius apie tai, kaip veikia automobilis ir kelio
        ženklai, taip pat būtų pavojinga. Dėl to svarbu paminėti, kad būtent
        <i>veiksmo darymas</i> yra pagrindinis, pokyčius lemiantis, elementas
        asmeniniame tobulėjime. Moksliniai tyrimai rodo, kad net trumpos, tačiau
        nuosekliai atliekamos praktikos, teikia ilgalaikius pozityvius
        rezultatus.
      </p>
      <p>
        Pozityvios veiklos – tos, kurios charakterizuoja natūraliai laimingus
        žmones, kaip, pavyzdžiui, dėkingumo išreiškimas ar dosnumo praktikavimas
        – gali veikti kaip apsauginiai faktoriai, galintys apsaugoti nuo
        psichologinių sunkumų ar netgi sutrikimų.
      </p>
      <p>
        Svarbiausia tai, kad pozityvūs veiksmai ir veiklos įkvepia žmones imtis
        dar daugiau pozityvių veiksmų, kurie iš pirmo žvilgsnio neatrodo susiję
        su pirminiu veiksmu. Taip pat kaip daugiau nei vienas negatyvus elgesys
        (pavyzdžiui, piktnaudžiavimas substancijomis ir perdėta kontrolė)
        prisideda vienas prie kito. Taip jie kartu blogina žmogaus psichologinę
        būseną. Tuo tarpu teigiamos praktikos įkvepia viena kitą. Pavyzdžiui,
        žmonės, kurie įvardijo, už ką yra dėkingi kartą per savaitę dešimčiai
        savaičių taip pat praleido daugiau laiko sportuodami.
      </p>
      <p>
        Kaip jau minėjome, praktikos asmeniniame tobulėjime yra tiesiog būtinos
        – pasąmonė nuolat su mumis bendrauja, tačiau to nesuprantame, negirdime,
        nematome. Didžioji praktikų dauguma yra skirtos minčių ir proto
        nutildymui, kad galėtume geriau girdėti, ko trokšta mūsų vidus. O
        psichologinių poreikių patenkinimas duoda pozityvius rezultatus ne tik
        psichikai, bet ir kūnui.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        <Card className={classes.card}>
          <Link
            to='/straipsniai/psichika-ir-jos-reiksme-3'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
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
      </div>
      <h3>Šaltiniai:</h3>
      <div style={{ wordWrap: 'break-word', fontSize: 18 }}>
        <p>
          Layous, K., Chancellor, J., & Lyubomirsky, S. (2014){' '}
          <i>
            ‘Positive activities as protective factors against mental health
            conditions’, Journal of Abnormal Psychology, 123
          </i>
          (1), 3–12.{' '}
          <a
            href='https://doi.org/10.1037/a0034709'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://doi.org/10.1037/a0034709
          </a>{' '}
          Prieiga per internetą:
          <br />
          <a
            href='http://sonjalyubomirsky.com/files/2012/09/Layous-Chancellor-Lyubomirsky-2014.pdf '
            target='_blank'
            rel='noopener noreferrer'
          >
            http://sonjalyubomirsky.com/files/2012/09/Layous-Chancellor-Lyubomirsky-2014.pdf
          </a>
        </p>
        <p>
          Holder, J. (2013) <i>‘49 Ways to Write Yourself Well’</i>, Brighton:
          Step Beach Press.
        </p>
        <p>
          Pennebaker J., Evans J.F. (2014){' '}
          <i>‘Expressive Writing: Words that Heal’</i>, Idyll Arbor
        </p>
        <p>
          Shedler, J. (2010){' '}
          <i>
            ‘The efficacy of psychodynamic psychotherapy’. American
            Psychologist,
          </i>{' '}
          65(2), pp.98-109.Prieiga per internetą:
          <br />
          <a
            href='https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf
          </a>
        </p>
        <p>
          Sin, N. and Lyubomirsky, S. (2009){' '}
          <i>
            ‘Enhancing well-being and alleviating depressive symptoms with
            positive psychology interventions: a practice-friendly
            meta-analysis’, Journal of Clinical Psychology
          </i>
          , 65(5), pp.467-487.
        </p>
        <p>
          Weldon, M. (2012) <i>‘Writing to save your life’</i>, Campbell, CA:
          FastPencil.
        </p>
        <p>
          Pennebaker, J. (2021){' '}
          <i>
            ‘Using Expressive Writing to Heal Trauma’, The Weekend University
          </i>
          , [vaizdo įrašas]. Prieiga internetu:
          <br />
          <a
            href='https://www.youtube.com/watch?v=CjEr0xiXqio'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.youtube.com/watch?v=CjEr0xiXqio
          </a>
        </p>
      </div>
    </div>
  );
};
