import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';
import { HighlightedQuote } from '../components/HighlightedQuote';

import Article9Card from '../assets/Article9Card.jpg';
import Article14Card from '../assets/Article14Card.jpg';
import Article14Pic2 from '../assets/Article14Pic2.jpg';
import Article14Pic3 from '../assets/Article14Pic3.jpg';

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

export const Article14: React.FC = () => {
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
          Už mus gudresnė pasąmonė, kurioje slepiasi ir visa ateities
          informacija
        </h2>
      ) : (
        <h1>
          Už mus gudresnė pasąmonė, kurioje slepiasi ir visa ateities
          informacija
        </h1>
      )}
      <h4>Pasąmonė - II dalis</h4>
      <h3 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        <i>„Ego nėra šeimininkas savo paties namuose.‘‘ – S.Froidas</i>
      </h3>
      <div className='authors-container' onClick={handleOpenDoma}>
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div className='authors-container' onClick={handleOpenIze}>
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Kaip jau turbūt supratote iš pirmojo šios serijos straipsnio, tikrasis
        mūsų psichikos valdytojas – nežinoma ir nepažįstama galia, kylanti ne iš
        ego, o iš pasąmonės. Būtent tai Froidas savo garsiuoju posakiu ir turėjo
        omenyje. Juk jeigu mūsų sąmoningasis „aš“ būtų šeimininkas ir visko
        valdytojas, tokie fenomenai kaip, pavyzdžiui, sapnai būtų ne tik, kad
        lengvai suprantami, bet ir sąmoningai sukuriami. Šioje dalyje skaitysite
        apie pasąmonės vaidmenį kasdieniame gyvenime, taip pat trumpai
        sužinosite apie kai kuriuos pasąmonės bruožus ir funkcijas. Tai yra
        antra serijos apie pasąmonę dalis. Prieš skaitant šį straipsnį
        rekomenduojame perskaityti{' '}
        <Link
          to='/straipsniai/pasamone-1'
          style={{ textDecoration: 'none', color: 'rgb(120, 211, 253)' }}
        >
          pirmąją dalį
        </Link>
        .
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article14Card} alt='image' className='article-image' />
      </div>
      <p>
        Anot Froido ir kitų gelmių psichologijos atstovų, pasąmonė yra tokia
        galinga, kad galima teigti, jog ji – pagrindinis žmogaus elgesio
        šaltinis.
      </p>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>
        Ką bendro turi mūsų įsivaizdavimas apie pasąmonę su tuo, kaip ji iš
        tikrųjų veikia?
      </h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Jeigu mes turime kažkokią viziją, kaip pasąmonė mąsto, tai tėra mūsų
          pačių mąstymo būdo perkėlimas ant pasąmonės koncepcijos.“
        </aside>
      </div>
      <p>
        Kai galvojame apie pasąmonę, nesunku susidaryti įspūdį, kad yra aiški
        riba, skirianti pasąmonę nuo sąmoningojo „aš“. Realybėje tokios
        atskirties nėra – sąmonės ir pasąmonės jungtis yra lanksti, pastoviai
        judanti ir kintanti. Taip pat pasąmonė „nemąsto“ taip, kaip mes
        įsivaizduojame „mąstymą“, – jeigu mes turime kažkokią viziją, kaip
        pasąmonė mąsto, tai tėra mūsų pačių mąstymo būdo perkėlimas ant
        pasąmonės koncepcijos. Tai neturi nieko bendro su pačia pasąmone –
        greičiau tai daugiau pasako apie mūsų ego.
      </p>
      <h3>Kas slepiasi pasąmonėje?</h3>
      <p>
        Kaip galbūt jau esame girdėję, pasąmonėje slypi visos nuslopintos,
        neretai – trauminės patirtys, mintys, visuomenėje nepriimtini troškimai.
        Svarbu suprasti, kad nors ir viskas, kas yra nuslopinta, – pasąmoninga,
        ne viskas, kas yra pasąmoninga, yra nuslopinta. Kitaip tariant, pasąmonė
        nesusidaro tik iš nuslopinto turinio – joje slepiasi visa psichinė
        medžiaga, kuri yra už sąmonės pasiekiamumo ribų, įskaitant ir tokius
        mechanizmus kaip pojūčių suvokimo mechanizmas.
      </p>
      <p>
        Jungas pasąmonę apibūdina kaip mistinę, dinamišką, instinktyvią,
        kūrybišką,{' '}
        <a
          href='https://www.lietuviuzodynas.lt/terminai/Teleologija'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          teleologinę
        </a>{' '}
        ir pilną potencialo. Juk joje taip pat slepiasi visa ateities
        informacija – turinys, kuris dar nėra pasiekęs sąmonės. Pasąmonę galima
        matyti kaip begalinį kūrybinį potencialą.
      </p>
      <h3>Kokios yra pasąmonės funkcijos mūsų psichikoje?</h3>
      <p>
        Pasąmonė turi ne vieną funkciją – ji mums „saugo“ informaciją, turi
        kūrybinę/gydančią funkciją. Taip pat ji nuolat siekia balanso mūsų
        psichikoje. Analitinėje psichologijoje pati svarbiausia ir pagrindinė
        pasąmonės funkcija yra prisidėti prie{' '}
        <a
          href='https://www.vle.lt/straipsnis/individuacija/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          individuacijos
        </a>{' '}
        proceso („natūralus psichinės raidos procesas“).
      </p>
      {/* <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Aklas aiškumo siekimas glaudžiai susijęs su negebėjimu išlaikyti
          priešybių įtampos ir sudėtingumo tiek vidiniame, tiek išoriniame
          pasaulyje.“
        </aside>
      </div> */}
      <h3>Prisiminimai ir informacijos laikymas</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Kai mes ką nors mokomės, siekiame paversti informaciją į pasąmoningą
          turinį, tam, kad bet kada mums tos informacijos prireikus, galėtume ja
          pasinaudoti.“
        </aside>
      </div>
      <p>
        Pasąmonė informaciją laiko visiškai kitaip negu sąmonė – tai, ką žinome
        dabar (laikome savo sąmonėje), yra pranykstantis dalykas, ir mes to
        nežinosime amžinai. Tačiau pasąmonėje informacija išlieka. Pavyzdžiui,
        kai mes ką nors mokomės, siekiame paversti informaciją į pasąmoningą
        turinį, tam, kad bet kada mums tos informacijos prireikus, galėtume ja
        pasinaudoti. Tai reiškia, kad pasąmonėje laikoma informacija yra
        grindžiama tik asociacijomis (t. y., tampa visiškai automatiška).
      </p>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Galima sakyti, kad kiekvienas įgūdis tampa tikru menu, kai jis būna
          vykdomas pasąmoningai.“
        </aside>
      </div>
      <p>
        Tas pats galioja ir įgūdžių įvaldymui – mūsų ekspertiškumas tam tikroje
        veikloje yra labiau pasąmoningas, nei sąmoningas. Ekspertizė reiškia tų
        procesų automatizavimą, kurie anksčiau reikalavo sąmoningo dėmesio.
        Galima sakyti, kad kiekvienas įgūdis tampa tikru menu, kai jis būna
        vykdomas pasąmoningai. Maiklas Džeksonas viename interviu sakė, kad
        „galvojimas – pati didžiausia klaida, kurią gali padaryti menininkas.
        Reikia pajusti.“
      </p>
      <p>
        Šiame atlikėjo pasidalinime galime įžvelgti kertinį vaidmenį, kurį
        atlieka pasąmonė atlikėjo karjeroje ir kūrybiniame procese.
      </p>
      <h3>Balansas</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Jokia psichinė vertė negali tiesiog dingti – ji visuomet pakeičiama
          kita, tokio paties intensyvumo verte.“
        </aside>
      </div>
      <p>
        Mes galime klaidingai įsivaizduoti, kad sąmonė ir pasąmonė yra arba
        opoziciniame (prieštarauja viena kitai), arba paraleliame (atspindi
        viena kitą) santykyje. Tačiau nė vienas iš šių nėra tiesa – sąmonė ir
        pasąmonė yra <b>kompensuojančiame</b> santykyje.
      </p>
      <p>
        Tai reiškia, jog jos papildo viena kitą tam, kad susiformuotų vieną
        visumą. Kadangi tikslas yra viena visuma, kuri turi būti palaikoma
        psichikos, turi labai svarbų savireguliacijos bruožą. Jokia psichinė
        vertė negali tiesiog dingti – ji visuomet pakeičiama kita, tokio paties
        intensyvumo verte. Bet koks žingsnis į priekį įmanomas tik esant
        priešingybių įtampai. Tad vienpusiai sąmonės veiksmai yra nuolat
        kompensuojami pasąmonėje.
      </p>
      <p>
        Viename iš savo veikalų, Jungas aprašo klinikinį pavyzdį, kaip pasąmonė
        kompensuoja sąmonės vienpusiškumą. Vienas ganėtinai arogantiškas
        pacientas turėjo psichologinių sunkumų, o viena iš to priežasčių buvo
        įtampos pilnas santykis su broliu. Brolis jį dažnai erzindavo, nors
        pacientas tam konkrečios priežasties negalėjo įvardinti. Paciento
        sapnuose jo brolis dažnai pasirodydavo kaip Napoleonas, Julijus Cezaris
        ir panašios asmenybės. Paciento pasąmonė taip bandė kompensuoti jo
        nerealistišką savęs išaukštinimą ir brolio nužeminimą.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article14Pic2} alt='image' className='article-image' />
      </div>
      <h3>Kokia mums nauda iš pasąmonės pažinimo?</h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Pasąmonė gali veikti tarsi unikalus gidas, o joje, kaip jau ankščiau
          minėjome, galima rasti begalę galimybių, paslėptų nuo sąmonės.“
        </aside>
      </div>
      <p>
        Gelmių psichologijoje pasąmonės ženklai turi didelį svarumą, jie matomi
        kaip kelrodžiai ir vedliai. Pasąmonė gali veikti tarsi unikalus gidas, o
        joje, kaip jau ankščiau minėjome, galima rasti begalę galimybių,
        paslėptų nuo sąmonės. Individui pasąmonės ignoravimas gali baigtis
        įvairiais nevaldomais emociniais protrūkiais, psichologiniais sunkumais,
        sukelti fizinius simptomus ar netgi psichinius sutrikimus.
      </p>
      <p>
        Kadangi pasąmonė nėra statiška, ji ne tik visuomet aktyvi, bet ir,
        galima sakyti, – „užkrečiama“. Tai reiškia, kad visi vienu ar kitu būdu
        neša savo tėvų pasąmonę – tam tikrus automatizuotus įsitikinimus, kurie
        persikelia į veiksmus mums sąmoningai tame nedalyvaujant. Vaikas gali
        „užsikrėsti“ pasąmoningai nešama motinos kalte ar nerimu.
      </p>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Visi vienu ar kitu būdu neša savo tėvų pasąmonę – tam tikrus
          automatizuotus įsitikinimus, kurie persikelia į veiksmus mums
          sąmoningai tame nedalyvaujant. Vaikas gali „užsikrėsti“ pasąmoningai
          nešama motinos kalte ar nerimu.“
        </aside>
      </div>
      <p>
        Įvairios reakcijos, veiksmai ar prognozės – mūsų spėjimai apie ateitį –
        tampa automatizuoti netgi tuo atveju, jeigu jie neveikia ar yra
        neteisingi. Vaikystėje, neturėdami reikiamų galimybių ar tinkamų
        įgūdžių, susidūrę su tam tikromis situacijomis buvome priversti
        pasąmoningai rinktis tai, kas būtent tuomet mums padėtų išgyventi.
        Laikui bėgant, šiems mechanizmams tapus automatizuotais mes likusį
        gyvenimą liekame jų valdomi to sąmoningai net nesuprasdami.
      </p>
      <p>
        Praeities situacijos, iš kurių veiksmas automatizavosi, gali neturėti
        nieko bendro su dabarties realybe. Pavyzdžiui, vaikystės patirtys ir
        dabarties patirtys nebūtinai privalo būti tokios pačios, tačiau žmogus
        jas vis per naują perkuria dėl automatizavimo.
      </p>
      <h3>Pavojai</h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Stiprios jėgos, slypinčios pasąmonėje, ne visada sutinkamos žmonių
          asmeniniame gyvenime. Dažniau jos būna išlaisvinamos, kai žmonės
          susiburia į mases.“
        </aside>
      </div>
      <p>
        Pasąmonė taip pat gali būti pavojinga. Tačiau viskas nuolat remiasi į
        mūsų individualų požiūrį į pasąmone ir į tai, kaip mes bandome su ja
        užmegzti ryšį. Labai svarbu būti atsargiems ir pasistengti neturėti
        išankstinių nuostatų apie tai, kokia pasąmonė yra, ko ji nori iš mūsų,
        ar kodėl ji vienaip, ar kitaip mus priverčia elgtis. Taip pat svarbu
        turėti kantrybės ir supratingumo – galų gale, juk pasąmonė yra mūsų
        dalis, o su savimi konfliktuoti mes nenorime.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article14Pic3} alt='image' className='article-image' />
      </div>
      <p>
        Kolektyvinis pasąmonės ignoravimas kelia riziką žmonijos bendrystei ir
        kultūrai (puikus to pavyzdys – nacizmo judėjimas). Viena to priežasčių
        yra tai, kad stiprios jėgos, slypinčios pasąmonėje, ne visada sutinkamos
        žmonių asmeniniame gyvenime. Dažniau jos būna išlaisvinamos, kai žmonės
        susiburia į mases. Susibūrimuose (nebūtina susiburti fiziškai – kalbama
        apie psichinį ryšį, įvairias bendruomenes ir panašiai) sumažėja žmogaus
        sąmoningumas. Tuomet žmonės tampa pavaldūs pasąmonės jėgoms. Tokiais
        atvejais pasąmonę tikrai galima vadinti pavojinga, nes žmogus
        pasąmoningai nusileidžia į žemesnį moralinį bei intelektualinį lygį. To
        išvengti galima tik kiekvienam individualiai dirbant su savimi – niekas
        neužmegs ryšio su pasąmonę už mus.
      </p>
      <p>
        Tai buvo tik trumpas įvadas apie pasąmonę. Deja, joks kiekis teorijos
        niekada iš tikrųjų neparodys mums kas pasąmonė yra. Taip pat teorija
        neužmegs ir ryšio su pasąmone. Ji gali būti naudojama kaip įrankis,
        šalia įvairių praktikų su tikslu geriau pažinti tiek save, tiek
        visuomenę, kurioje gyvename. Galų gale, sąmonė gali būti patenkinta tik
        įgyjus patį didžiausią pasąmonės suvokimą.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        <Card className={classes.card}>
          <Link to='/straipsniai/pasamone-1' style={{ textDecoration: 'none' }}>
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
      </div>
      <h3>Šaltiniai:</h3>
      <div className='sources'>
        <p>
          Carus, C.G. (1989) <i>‘Psyche: On the Development of the Soul’</i>,
          Dallas: Spring Publications
        </p>
        <p>
          Freud, Sigmund. (1960) <i>‘The Ego And The Id’</i>, . W. W. Norton &
          Company, Inc. Print.
        </p>
        <p>
          Freud, Sigmund. (2005)
          <i> ‘The Unconscious’</i> London: Penguin., Print.
        </p>
        <p>
          Jackson, M., Jean B. (2010)
          <i> ‘Michael Jackson about Songwriting and Dancing to Billie Jean‘</i>
          , [vaizdo įrašas]. Prieiga per internetą: <br />
          <a
            href='https://www.youtube.com/watch?v=ZkhOXXhSIhU'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.youtube.com/watch?v=ZkhOXXhSIhU
          </a>
        </p>
        <p>
          Jung, C.G. (1967)
          <i>
            {' '}
            ‘General Remarks on the Therapeutic Approach to the Unconscious‘
          </i>
          , from <i>‘Two Essays on Analytical Psychology’</i>, vol.7 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Jung, C.G. (1967)
          <i> ‘The Function of the Unconscious’</i>, from{' '}
          <i>‘Two Essays on Analytical Psychology’</i>, vol.7 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Jung, C.G. (1967)
          <i> ‘The Personal and the Collective Unconscious’</i>, from{' '}
          <i>‘Two Essays on Analytical Psychology’</i>, vol.7 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Jung, C.G. (1970)
          <i> ‘The Autonomy of the Unconscious’</i>, from{' '}
          <i>‘Psychology and Religion: West and East’</i>, vol.11 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Jung, C. G. (1971) <i>‘Instinct and the Unconscious’ </i>
          in J. Campbell (Ed), <i> ‘The Portable Jung’</i>. R. F. C. Hull
          (Trans). New York: Viking Press
        </p>
        <p>
          Jung, C. G. (2001) <i>‘The Spiritual Problem of Modern Man’</i> in{' '}
          <i>‘Modern Man in Search of a Soul’</i> W. S. Dell and C. F. Baynes
          (Trans). London: Routledge.
        </p>
        <p>
          Solms, M., Arnold, S. and Leuzinger-Bohleber, M. (2017){' '}
          <i>
            ‘The unconscious: A Bridge Between Psychoanalysis and Neuroscience’
          </i>
          , New York : Routledge.
        </p>
        <p>
          Solms, M. University of Cape Town, 2021.
          <i> ‘The Role of the Unconscious’</i>
          . [vaizdo įrašas] Prieiga per internetą: <br />
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
          Westen, D. (1999){' '}
          <i>
            ‘The Scientific Status of Unconscious Processes: Is Freud Really
            Dead?’
          </i>{' '}
          in the <i>‘Journal of the American Psychoanalytic Association’</i>,
          47(4), pp.1061-1106.
        </p>
      </div>
    </div>
  );
};
