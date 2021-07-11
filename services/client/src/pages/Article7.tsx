import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article7Card from '../assets/Article7Card.jpg';
import Article7Pic2 from '../assets/Article7Pic2.jpg';
import Article7Pic3 from '../assets/Article7Pic3.jpg';

import Article2Card from '../assets/Article2Card.jpg';
import Article4Card from '../assets/Article4Card.jpg';
import Article6Card from '../assets/Article6Card.jpg';

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

export const Article7: React.FC = () => {
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
        <h2>Psichologijos ABC: kas per „daiktas“ ta gelmių psichologija?</h2>
      ) : (
        <h1>Psichologijos ABC: kas per „daiktas“ ta gelmių psichologija?</h1>
      )}
      {/* <h4>Psichoterapijos galia</h4> */}
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
        Kaip jau galbūt įtariame, psichologijos mokslas nėra vientisa sritis –
        joje pilna susiskaldžiusių mokyklų, žvelgiančių iš skirtingų perspektyvų
        ir propaguojančių savas tiesas. Visos į pasąmonę atsižvelgiančios
        psichologijos pakraipos priskiriamos gelmių (arba giluminei)
        psichologijai. Tekste ne tik detaliau paaiškinsime, kuo gelmių
        psichologijos perspektyva yra unikali, bet ir trumpai papasakosime apie
        Froidą, Adlerį ir Jungą – gelmių psichologijos „tėvus‘‘.
      </p>
      <h3>Kas yra gelmių psichologija?</h3>
      <p>
        Visuotinėje Lietuvių Enciklopedijoje gelmių psichologija (dar vadinama
        <i>gilumine psichologija</i>, angl. <i>depth psychology</i>,)
        apibūdinama kaip „psichologijos ir psichoterapijos kryptis, tirianti
        nesąmoningus potraukius ir galias, pasąmonėje vykstančius psichikos
        procesus, lemiančius pagrindinius emocijų sutrikimus, asmenybės raidą
        bei raišką. [...] Pabrėžia nesąmoningų motyvacijų įtaką žmogaus
        elgesiui, savojo Aš vaidmenį iškilus kokiam nors pavojui. Psichikos
        sutrikimus priskiria prie asmenybės ligų ir juos aiškina ne tiek
        pasąmonės konfliktais, kiek psichosomatiniais veiksniais.“
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article7Card} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <p>
        Kitaip tariant, gelmių psichologija yra skėtinis terminas, apimantis
        visas psichologijos rūšis, kurios atsižvelgia į žmogaus pasąmonę
        (pavyzdžiui psichodinaminė paradigma, ar analitinė psichologija). Gelmių
        psichologijos paradigmos reikšmingos ne tik klinikinėje srityje
        (psichoterapija). Jos taip pat gali būti naudojamos kaip perspektyvos,
        per kurias galima analizuoti įvairius politinius, socialinius
        reiškinius, literatūrą, istoriją, filosofiją, ar bet kokį kitą realybės
        aspektą.
      </p>
      <p>
        Taip yra todėl, kad, kaip minėjome{' '}
        <Link to='/straipsniai/psichika-ir-jos-reiksme-1'>
          pirmame straipsnyje
        </Link>
        , realybę patiriame per savo psichiką. Tad, bet kokia išsami kokio nors
        dalyko analizė gali būti pilna tik pridėjus psichikos dimensiją
        (pavyzdžiui, Antrojo pasaulinio karo analizė gali būti gilesnė,
        analizuojant ne tik istorinius, socialinius ar ekonominius veiksnius,
        bet ir pridedant kolektyvinės pasąmonės lygmenį).
      </p>
      <h3>
        Iš kur kilo terminas <i>gelmių psichologija</i>?
      </h3>
      <p>
        Nors pats konceptas buvo sugalvotas E.Bleulerio (jis taip pat sugalvojo
        šizofrenijos, autizmo ir keletą kitų iki šiol psichiatrijoje naudojamų
        terminų), gelmių psichologijos „tėvais‘‘ yra laikomi Froidas, Adleris ir
        Jungas. Visos gelmių psichologijos mokyklos yra „pastatytos“ ant Froido,
        Adlerio arba Jungo idėjų (arba visų trijų). Pavyzdžiui, paties Jungo
        idėjos inkorporuoja tam tikras Froido arba Adlerio idėjas. Nors tarp
        skirtingų gelmių psichologijos paradigmų yra nemažai nesutarimų, o ypač
        metodų aplikacijos srityje (pavyzdžiui, techniškai, Froido metodas
        skiriasi nuo Jungo metodo), fundamentaliai, visos paradigmos turi vieną
        tikslą – analizuoti sąmonės ir pasąmonės sąveiką.
      </p>
      <h3>Froido idėjos ir psichoanalizė</h3>
      <p>
        Froidas išvystė pokalbio terapiją, ir išplatino idėją, kad mes pažįstame
        tik mažą savęs dalį. Mat didžioji mūsų psichikos dalis yra pasąmonė,
        kurioje slypi nesuvaldomi instinktai (angl. <i>drives</i>). Garsusis
        ledkalnio vaizdinys taip pat kilo iš Froido, kai vienoje iš savo knygų
        jis palygino skirtingus psichikos sluoksnius su ledkalniu.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article7Pic2} alt='image' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Topografinis asmenybės organizacijos modelis
      </div>
      <p>
        Bazinė Froido idėja buvo ta, jog libido yra seksualinės prigimties
        energija, kuri tiesiogiai valdo visą žmogaus psichiką. Anot Froido (ir
        kitų po jo sekusių gelmių psichologijos šalininkų), pasąmonė gali būti
        vadinama pagrindiniu žmogaus elgesio šaltiniu. Froido krypties analizė
        vadinama psichoanalize, iš kurios kilo ir kitos psichoterapijos rūšys,
        kaip pavyzdžiui, psichodinaminė (psichoanalitinė) psichoterapija. Froido
        pakraipos psichoterapija labiausiai koncentruojasi į vaikystės patyrimus
        ir santykius su tėvais. Nors Froidas populiariojoje medijoje neretai yra
        pašiepiamas ar net kritikuojamas dėl pernelyg seksualizuojančio požiūrio
        į žmogaus psichiką, jo indėlis žmonijai – neįkainojamas. Tiek teorinė
        idėjų dalis (gelmių psichologijos pagrindai), tiek praktinė (pokalbio
        terapijos idėjos išpopuliarinimas, laisvos asociacijos testas) iki šiol
        yra kasdien naudojamos psichologijoje ir psichoterapijoje.
      </p>
      <h3>Adlerio idėjos ir individualioji psichologija</h3>
      <p>
        Adleris buvo vienas iš Froido kolegų, prisidėjęs prie psichoanalitinio
        judėjimo kūrimo. Taip pat jis buvo vienas iš pirmųjų išdrįsęs atsiskirti
        nuo psichoanalizės ir įkurti individualiosios psichologijos paradigmą.
        Individualioji psichologija yra socialinė psichologija. Tai reiškia, kad
        jos dėmesio centre yra individo sąveika su visuomene ir kitais jį
        supančiais individais. Anot Adlerio, mus gyvenime veda tikslai ir esame
        orientuoti į ateitį.
      </p>
      <p>
        Individualioji psichologija ieško elgesio (mąstymo, jausmų ir viso kito,
        ką mes darome) tikslų – anot Adlerio, bet koks mumyse iškilęs veiksnys
        turi tikslą ar paskirtį. Ir tik sužinojus tą tikslą galima pašalinti
        tikrąją problemą iš pamatų. Po Froido, Adlerio pakraipos psichologiją
        galima matyti kaip antrą žingsnį žmogaus brendimo, kaip asmenybės,
        raidoje.
      </p>
      <h3>Jungas ir Analitinė Psichologija</h3>
      <p>
        Jungas buvo trečiasis iš gelmių psichologijos „tėvų“. Jis, pradžioje
        dirbęs kartu su Froidu, po tam tikro laiko nusprendė atsitraukti, nes
        nepritarė kai kurioms Froido teorijos dalims (pavyzdžiui, Froidui libido
        buvo seksualinė energija – Jungas libido matė kaip gyvenimo energiją, o
        seksualinę energiją tik kaip vieną iš daugelio libido manifestacijos
        būdų).
      </p>
      <p>
        Jungas, praleidęs ne vienus metus savianalizėje, integruodamas savo
        pasąmonę, nusprendė įkurti analitinės psichologijos mokyklą. Analitinė
        psichologija yra tarsi trečias, žymiai giliau siekiantis sluoksnis
        gelmių psichologijoje po Froido ir Adlerio teorijų.
      </p>
      <p>
        Anot Jungo, Froido ir Adlerio teorijos yra vienašališkos ir
        nepakankamos, Pagrindinė to priežastis yra tai, kad jų pagrindas yra
        instinktai (angl. drives), ir tokiu būdu jos palieka visą psichinę
        prasmę už borto. Jungas tvirtai įsitikinęs, kad šių teorijų užtenka
        tiems, kas tiki, jog jie neturi jokių dvasinių siekių ar poreikių.
        Trumpai tariant, Froido ir Adlerio teorijos, nors turinčios nemažai
        veiksmingų idėjų ir svarbių metodų, yra limituojančios, nes nesuteikia
        pakankamai prasmės gyvenimui. Viena iš Jungo pagrindinių idėjų yra tai,
        kad išlaisvinti gali tik prasmingi dalykai (prasmė).
      </p>
      <p>
        Pagrindiniai Jungo atradimai yra:{' '}
        <a
          href='https://www.vle.lt/straipsnis/kolektyvine-pasamone/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          kolektyvinės pasąmonės
        </a>{' '}
        idėja ir joje slypintys{' '}
        <a
          href='https://www.vle.lt/straipsnis/archetipas-1/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          archetipai
        </a>
        , kompleksų autonomija, individuacijos procesas, žmogaus asmenybės
        tipai. Analitinė psichologija, turbūt, yra viena iš universaliausių
        mokslo šakų, kurią galima pritaikyti daugelyje kitų, iš pirmo žvilgsnio
        su psichologija nesusijusių sričių. Jungas naudojo analitinės
        psichologijos perspektyvą kaip įrankį, su kuriuo analizavo politiką,
        literatūrą, religiją, istoriją, filosofiją, meną ir kita.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article7Pic3} alt='image' className='article-image' />
      </div>
      <p>
        Kaip matome, tai, ką Froidas vadino <i>pasąmone</i>, Jungas vadina
        <i>asmenine pasąmone</i>. Anot Jungo, tai tik labai maža visos pasąmonės
        dalis. Didžioji Jungo teorijos dalis yra apie kolektyvinę pasąmonę ir
        joje slypinčius archetipus, instinktus ir savasties siekimą.
      </p>
      <h3>Galutinės įžvalgos</h3>
      <p>
        Svarbu suprasti, kad psichologijos pakraipų pradininkai sukūrė teorijas
        pasiremdami savo gyvenimo potyriais, analizuodami ir integruodami savo
        pasąmonę. Todėl sakyti, kad viena ar kita teorija – tiesiog neteisingos,
        gali būti mažų mažiausiai klaidinga. Kiekviena teorija yra tarsi
        galimybė pažvelgti į žmogaus psichiką iš šiek tiek skirtingos
        perspektyvos. Laikui bėgant, daugėja integruotų psichologijos pakraipų,
        kurios sujungia dvi ar net kelias skirtingas teorijas.
      </p>
      <p>
        Klinikinėje aplinkoje gelmių psichologijos teorijos ir metodai dažnai
        yra susipynę ir nėra taip stipriai atskirti kaip akademijoje. Patys
        profesionaliausi psichoterapeutai yra susipažinę su ne viena giluminės
        psichoterapijos teorija ar metodu, jie yra lankstūs ir jautrūs paciento
        poreikiams ir būdui. Pavyzdžiui, atėjus pas Jungistinės psichologijos
        terapeutą mums nebūtinai taikys Jungistinės psichologijos metodą, jeigu
        mūsų problemai išspręsti labiau reikia Adlerio idėjų pritaikymo. Toks
        psichoterapeuto lankstumas duoda pirmenybę paciento būklei ir siekiamam
        rezultatui, o ne tam tikroms dogmoms ar įsitikinimams.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        <Card className={classes.card}>
          <Link to='/straipsniai/pagalba' style={{ textDecoration: 'none' }}>
            <CardActionArea>
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
      </div>

      <h3>Šaltiniai:</h3>
      <div style={{ wordWrap: 'break-word', fontSize: 18 }}>
        <p>
          Ellenberger, H. ( 2006). <i>‘The discovery of the unconscious’</i>, .
          [New York]: Basic Books.
        </p>
        <p>
          Freud, Sigmund. (1960) <i>‘The Ego And The Id’</i>. W. W. Norton &
          Company, Inc. Print.
        </p>
        <p>
          Freud, Sigmund. (2005) <i>‘The Unconscious’</i>
          London: Penguin., Print.
        </p>
        <p>
          Jung, C. G. (1971). <i>‘Instinct and the Unconscious’</i>
          in J. Campbell (Ed), <i>‘The Portable Jung’</i>. R. F. C. Hull
          (Trans). New York: Viking Press
        </p>
        <p>
          Richards, P., Richards, S. and Dowling, J., (2020){' '}
          <i>
            ‘Navigating the 3 Stages of Individuation to unleash your full
            potential’
          </i>
          [vaizdo įrašas] Prieiga per internetą:
          <br />
          <a
            href='https://www.youtube.com/watch?v=cxjYBh4BaHI'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.youtube.com/watch?v=cxjYBh4BaHI
          </a>
        </p>
      </div>
    </div>
  );
};
