import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article10Card from '../assets/Article10Card.jpg';
import Article11Card from '../assets/Article11Card.jpg';
import Article12Card from '../assets/Article12Card.jpg';
import Article11Pic2 from '../assets/Article11Pic2.jpg';
import Article11Pic3 from '../assets/Article11Pic3.jpg';
import Article11Pic4 from '../assets/Article11Pic4.jpg';

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

export const Article11: React.FC = () => {
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
          Kognicija, mokslinis raštingumas ir kodėl vakcinos vis dėlto nesukelia
          autizmo
        </h2>
      ) : (
        <h1>
          Kognicija, mokslinis raštingumas ir kodėl vakcinos vis dėlto nesukelia
          autizmo
        </h1>
      )}
      <h4>Paviršinės sąmokslo teorijų atsiradimo priežastys</h4>
      <h5>Sąmokslo teorijos - II dalis</h5>
      <div className='authors-container' onClick={handleOpenDoma}>
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div className='authors-container' onClick={handleOpenIze}>
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Yra sąmokslo teorija, kuri sako, kad „sąmokslo teorijos‘‘ koncepciją
        sukūrė CŽV. Aišku, greitas ir paprastas fakto patikrinimas parodo, kad
        šis terminas{' '}
        <a
          href='https://books.google.com/ngrams/graph?content=conspiracy+theory&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cconspiracy%20theory%3B%2Cc0#t1%3B%2Cconspiracy%20theory%3B%2Cc1'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          atsirado maždaug 1870-aisiais{' '}
        </a>
        ir išpopuliarėjo kažkur 1950-aisiais. Fakto patikrinimo veiksmas yra tam
        tikro lygmens mokslinio raštingumo pasireiškimas – vien mintis, kad
        perskaitytą informaciją reikia tikrinti yra išlavinto mokslinio
        racionalizmo bruožas. Skaitydami apie sąmokslo teorijas dažnai juokiamės
        ir galvojame, kad nieko bendro su jų pasekėjais neturime. Šiame
        straipsnyje kviečiame jus giliau pažvelgti ne tik į sąmokslo teorijas,
        bet ir jūsų pačių mąstymo modelius.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article11Card} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>Apie vakcinas ir autizmą</h3>
      <p>
        <a
          href='https://www.sciencedirect.com/science/article/pii/S0264410X14006367'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          Čia
        </a>{' '}
        galite rasti metaanalizę, grupuojančią dešimt mokslinių tyrimų,
        įrodančių, kad vakcinos ir autizmas neturi koreliacijos ir yra visiškai
        nesusiję tarpusavyje. Visos metaanalizės imtis yra daugiau nei 1,26 mln.
        vaikų.
      </p>
      <p>
        Kyla klausimas: ar tai, kad žmonės vis dar tiki, kad vakcinos sukelia
        autizmą, lemia mokslinio išsilavinimo trūkumas (pavyzdžiui, nežino, kas
        yra metaanalizė, kiek daug žmonių dalyvauja sudėtingame metaanalizės
        procese, kiek skirtingų žingsnių ir apsisaugojimo priemonių imamasi, kad
        metaanalizės būtų maksimaliai patikimas mokslinis šaltinis, kaip pačiam
        įvertinti metaanalizės ar bet kokio kito mokslinio tyrimo svarumą ir
        pan.). O gal problema yra gilesnė, susijusi su žmogaus psichologija?
        Galbūt nepasitikėjimas vakcinomis susijęs su nepasitikėjimu sveikatos
        priežiūros sistema?
      </p>
      <p>
        Šiame straipsnyje peržvelsime mokslinio išsilavinimo svarbą sąmokslo
        teorijų pasekėjuose ir pradėsime gvildenti psichologinių veiksnių įtaką
        šiam fenomenui, pradedant kognicija ir racionalistinio mąstymo įgūdžių
        trūkumu.
      </p>
      <h3>Mokslinis raštingumas</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Mokslinis raštingumas reikalingas tiems, kuriems rūpi informacijos
          skaidrumas ir tikslumas.“
        </aside>
      </div>
      <p>
        Mokslinis raštingumas – tai žinios apie mokslinius terminus ir procesus.
        Mokslinis raštingumas reiškia, kad žmogus moka klausti, surasti ar
        nustatyti atsakymus į klausimus, iškeltus iš smalsumo apie kasdienius
        patyrimus. Taip pat moka skaityti ir suprasti mokslinius straipsnius,
        dalyvauti diskusijose apie šių straipsnių pagrįstumą. Negana to, tai
        reiškia, kad žmogus yra moksliškai išsilavinęs ir geba atpažinti
        kokybišką informaciją, pagrįstai argumentuoti ir pritaikyti argumentus
        išvadoms. Mokslinis raštingumas turi daug lygmenų ir pavidalų.
        Akivaizdu, kad, tarkime, moksleivio ir mokslininko mokslinis raštingumas
        bus skirtingas.
      </p>
      <p>
        Mokslinis raštingumas reikalingas tiems, kuriems rūpi informacijos
        skaidrumas ir tikslumas. Šiokių tokių pagrindų mus moko mokykloje, šiek
        tiek daugiau – universitete, ypač magistro ir doktorantūros studijose.
        Žinoma, universitete išmoktas mokslinis raštingumas nėra išminties
        viršūnė – visada galime (ir turėtume!) klausti gilesnių ir sudėtingesnių
        klausimų.
      </p>
      <p>
        Deja, mokslinis raštingumas kaip įgūdis nėra taip plačiai paplitęs kaip
        gali atrodyti – ne visi moka ieškoti, skaityti ir vertinti mokslinius
        straipsnius ar tyrimus. Tuo labiau, tikrai ne visi netgi varginasi tai
        išvis daryti.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article11Pic2} alt='image' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        „Skeptiško jaunimo‘‘ infografikas
      </div>
      <h3>
        Mokslinio (ne)raštingumo pavyzdys, tęsiant vakcinų ir autizmo temą
      </h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Ieškant informacijos, svarbu visuomet bandyti eiti į pirminį šaltinį
          ir nesiremti naujienų portalais ar kitais šaltiniais, cituojančiais
          mokslinius straipsnius.“
        </aside>
      </div>
      <p>
        Ieškant informacijos, svarbu visuomet bandyti eiti į pirminį šaltinį ir
        nesiremti naujienų portalais ar kitais šaltiniais, cituojančiais
        mokslinius straipsnius. Taip lengviau išvengti šališkumo ar informacijos
        iškreipimo. Originaliuose moksliniuose straipsniuose taip pat galima
        rasti papildomos informacijos (ar šis tyrimas vis dar validus? Prieš
        kiek metų jis buvo publikuotas? Ar yra interesų konfliktų? Ir panašiai).
      </p>
      <p>
        Pavyzdys:
        <ol>
          <li>
            <a
              href='https://apnews.com/article/8a3c81fd61037a24b54a6004d3533926?fbclid=IwAR1BJwe6cVhbVR1b-QhWJIZzlIKi6CPVh0oymXQHzzT_w7lZyxuVa1Fohtk'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'rgb(120, 211, 253)' }}
            >
              Šiame
            </a>{' '}
            naujienų portalo straipsnyje rašoma, kad vieno mokslinio tyrimo
            rezultatai apie nerastą MMR vakcinų ir autizmo ryšį pakartotinė
            analizė parodo to tyrimo nenuoseklumą ir šališkumą. Sustabdžius
            paiešką čia, galima bandyti šį straipsnį naudoti kaip argumentą, kad
            neva vakcinos yra susijusios su autizmu.
          </li>
          <li>
            Tačiau suradus paties mokslinio tyrimo{' '}
            <a
              href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4128611/?report=reader&fbclid=IwAR133UuQ2JrwCed30QZZEu0oyJp4uw09D1moXB3qlPh8kxImnXZ0A2H2Bqg'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'rgb(120, 211, 253)' }}
            >
              originalą
            </a>
            , kurį cituoja minėtas naujienų portalas, aiškiai matoma, kad šis
            straipsnis buvo atšauktas.
          </li>
          <li>
            Nuėjus į atšaukimo{' '}
            <a
              href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4183946/?report=reader'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'rgb(120, 211, 253)' }}
            >
              dokumentą
            </a>{' '}
            ten rašo, kad redaktorius ir leidėjas apgailestaudami atsiėmė
            straipsnį, nes interesų konfliktai nebuvo deklaruoti (tai pakenkė
            tarpusavio peržiūros procesui). Be to, tarpusavio peržiūra po
            paskelbimo išreiškė susirūpinimą dėl metodų ir statistinės analizės
            pagrįstumo.
          </li>
        </ol>
      </p>
      <p>Šis infografikas gali padėti atsirinkti informaciją:</p>
      <div style={{ textAlign: 'center' }}>
        <img
          src={Article11Pic3}
          alt='image'
          className='article-image'
          style={{ maxHeight: '100vh' }}
        />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        „Skeptiško jaunimo‘‘ infografikas
      </div>
      <h3>Sąmokslo teorijos – išankstinių nuostatų racionalizavimas</h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Nemažai sąmokslo teorijų „patvirtina“ kažkokius stereotipus,
          pasąmoningus nepagrįstus įsitikinimus arba jau ir taip
          stigmatizuojamas grupes.“
        </aside>
      </div>
      <p>
        Mokslinis raštingumas ir mokslinis racionalizmas gali būti matomas kaip
        „priešnuodis“‘ išankstinėms nuostatoms ar stereotipams. Nemažai sąmokslo
        teorijų būtent ir „patvirtina“ kažkokius stereotipus, pasąmoningus
        nepagrįstus įsitikinimus arba jau ir taip stigmatizuojamas grupes.
        Tokios sąmokslo teorijos būna susijusios su socialinėmis mažumomis
        (pavyzdžiui, LGBT) etninėmis mažumomis (žydais, romais ir pan.) valdžios
        elitu (prezidentais, seimo nariais, įtakingais asmenimis). Tokias
        sąmokslo teorijas tiesiog graibsto atitinkamus įsitikinimus turintys
        žmonės – jos patogiai patvirtina jų pasaulėžiūrą.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article11Pic4} alt='image' className='article-image' />
      </div>
      <h3>Racionalistinis mąstymas ir kognicija</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Labai dažnai sumaišomas dalykas yra koreliacija ir priežastinis
          ryšys. Koreliacija nėra lygi priežastiniam ryšiui – tai yra kognicijos
          proceso klaida.“
        </aside>
      </div>
      <p>
        Nors mūsų mąstymo modeliai ir kognityviniai įgūdžiai nėra sąmokslo
        teorijų atsiradimo priežasties šaknys, svarbu pastebėti, kokias
        racionalistinio mąstymo klaidas daro sąmokslo teorijų pasekėjai ir iš to
        pasimokyti:
        <li>
          „Įvairaus plauko“ netyčiniai ar tyčiniai nesusipratimai ar
          nesąžiningumai, atsitikę iš valdžios ar mokslo pusės naudojami kaip
          argumentai, „patvirtinantys“ sąmokslo teoriją (kraštutinis juoda/balta
          mąstymas). Į lygtį neįskaičiuojama tai, kad mes visi darome klaidų,
          mokslas ir valdžia – ne išimtis. Tai susiję su jungčių darymu ten, kur
          jų neturėtų būti; taip pat susiję su sekančiame punkte aprašoma
          klaida;
        </li>
        <li>
          Labai dažnai sumaišomas dalykas yra koreliacija ir priežastinis ryšys.
          Koreliacija <b>nėra</b> lygi priežastiniam ryšiui – tai yra kognicijos
          proceso klaida (pavyzdžiui, tai, kad tuo pačiu metu sukilo kainos ir
          pasikeitė prezidentas gali koreliuoti, tačiau prezidento pasikeitimas
          nėra sukilusių kainų priežastis). Jeigu bijote ar esate išsigandę,
          jausmai iškreips tai, kaip matote aplinką.
        </li>
        <li>Pervertinama tuo pačiu metu vykstančių įvykių tikimybė;</li>
        <li>
          Galimybė pakeičiama į įsitikinimą (jeigu manau, kad yra galimybė, kad
          taip yra/bus, reiškia taip ir yra);
        </li>
        <li>
          Informacijos, kuri patvirtina mūsų jau esamus įsitikinimus priėmimas
          ir atmetimas tos, kuri nepritampa prie esamos pasaulėžiūros;
        </li>
        <li>
          Sveiko proto/išminties momentas (angl. <i>common sense</i>): kai
          kuriems savaime suprantami ir logiški dalykai (kad, pavyzdžiui,
          kaimynas, dirbantis Seime nėra ateivis-driežas-humanoidas) sąmokslo
          teorijų pasekėjams atrodo sunkiai suvokiami ir nepaaiškinami;
        </li>
        <li>
          Taip pat sąmokslo teorija gali būti tarsi išsigelbėjimas, kai neišeina
          „pakelti“ ar „sutalpinti“ daug sudėtingos informacijos;
        </li>
        <li>
          Tingus mąstymas ir tingėjimas tyrinėti. Vietoj to ieškoma šališkumą
          patvirtinančios informacijos, neskiriama laiko faktų tikrinimui (arba
          faktų tikrinimu tiesiog nepasitikima);
        </li>
        <li>
          Supaprastinimas: populiarūs labai paprasti a-b-c-d paaiškinimai
          (padarius a, b ir c visas pasaulio blogis bus sunaikintas, tad visi
          gyvensime ilgai ir laimingai). Toks vaikiškas mąstymo būdas neįtraukia
          sudėtingų socialinių, psichinių, ekonominių ir politinių mechanizmų;
        </li>
        <li>
          Sąmokslo teorijos traukia žmones, ieškančius paaiškinimų ir prasmės,
          kurie dėl kognityvinių įrankių trūkumo ar praeities patirčių, negali
          rasti tikslumo racionalistinėmis priemonėmis.
        </li>
        <div className='article-quote left'>
          <aside style={{ display: 'block' }}>
            „Kviečiame jus nekritikuoti ir nežeminti žmonių, mąstančių kitaip.
            Geriau – pabandyti juos suprasti, gal net surasti vietų, kur galite
            susitapatinti su panašiomis episteminėmis klaidomis.“
          </aside>
        </div>
      </p>
      <p>
        Nors ir kalbėjome apie mokslo raštingumo trūkumą ir mąstymo modelius,
        naudodami būtent sąmokslo teorijų pasekėjų pavyzdį, svarbu atsiminti,
        kad mes visi galime pasimokyti iš sąmokslo teorijų pasekėjų klaidų –
        esame linkę daryti lygiai tas pačias klaidas, tik galbūt žymiai
        subtiliau ar kitose srityse, kuriose daug nenusimanome. Kviečiame jus
        nekritikuoti ir nežeminti žmonių, mąstančių kitaip. Geriau – pabandyti
        juos suprasti, gal net surasti vietų, kur galite susitapatinti su
        panašiomis episteminėmis klaidomis.{' '}
        <Link
          to='/straipsniai/psichologiniai-patarimai-ir-asmenine-atsakomybe'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          Vieno iš senesnių straipsnių
        </Link>{' '}
        pabaigoje paminėjome kelis punktus, svarbius atsirenkant informaciją.
        Nepamirškite, kad mes nė vienas nesame atsparus nuo:
      </p>
      <li>
        Informacijos, kuri patvirtina mūsų jau esamus įsitikinimus, ieškojimo;
      </li>
      <li>Informacijos apvalinimo ir supaprastinimo;</li>
      <li>Žinių spragų užpildymo šališka informacija;</li>
      <li>Automatinės identifikacijos/informacijos pritaikymo sau.</li>
      <p>
        Tai įsisąmoninus, gali pasidaryti aišku, kad mechanizmai, veikiantis
        sąmokslo teorijų pasekėjų protuose nėra unikalūs – mes visi daugiau ar
        mažiau naudojame tokius mąstymo modelius. Bet kodėl tuomet mes netikime,
        kad pasaulį valdo driežai-humanoidai?
      </p>
      <p>
        Kitame straipsnyje kalbėsime apie gilumines sąmokslo teorijų atsiradimo
        ir gyvavimo priežastis.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
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
                  variant='body1'
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
          <Link
            to='/straipsniai/samokslo-teorijos-3'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image={Article12Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
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
      </div>
      <h3>Šaltiniai:</h3>
      <div className='sources'>
        <p>
          Bardon, A. (2020){' '}
          <i>
            ‘Coronavirus Responses Highlight how Humans are Hardwired to Dismiss
            Facts that don’t Fit their Worldview’, The Conversation.
          </i>{' '}
          Prieiga per internetą:
          <br />
          <a
            href='https://theconversation.com/coronavirus-responses-highlight-how-humans-are-hardwired-to-dismiss-facts-that-dont-fit-their-worldview-141335'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://theconversation.com/coronavirus-responses-highlight-how-humans-are-hardwired-to-dismiss-facts-that-dont-fit-their-worldview-141335
          </a>
        </p>
        <p>
          Butter M. (2020){' '}
          <i>
            “There’s a Conspiracy Theory that the CIA Invented the Term
            ‘Conspiracy Theory’- Here’s Why”, The Conversation.
          </i>
          Prieiga per internetą:
          <br />
          <a
            href='https://theconversation.com/theres-a-conspiracy-theory-that-the-cia-invented-the-term-conspiracy-theory-heres-why-132117'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://theconversation.com/theres-a-conspiracy-theory-that-the-cia-invented-the-term-conspiracy-theory-heres-why-132117
          </a>
        </p>
        <p>
          Dictionary.com (2021) <i>Definition of conspiracy theory.</i> Prieiga
          internetu: <br />
          <a
            href='https://www.dictionary.com/browse/conspiracy-theory'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.dictionary.com/browse/conspiracy-theory
          </a>
        </p>
        <p>
          Douglas M.K., Uscinski J.E., Sutton R.M., Cichocka A., Nefes T. , Ang
          C.S., Deravi F. (2019)
          <i>
            ‘Understanding Conspiracy Theories’, Advances in Political
            Psychology
          </i>
          , Vol. 40. Prieiga per internetą: <br />
          <a
            href='https://doi.org/10.1111/pops.12568'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://doi.org/10.1111/pops.12568
          </a>
        </p>
        <p>
          Franks B., Bangerter A., Bauer M. (2013)
          <i>
            ‘Conspiracy theories as quasi-religious mentality: an integrated
            account from cognitive science, social representations theory, and
            frame theory’, Frontiers in Psychology,
          </i>
          Vol 4. Prieiga per internetą: <br />
          <a
            href='https://doi.org/10.3389/fpsyg.2013.00424'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://doi.org/10.3389/fpsyg.2013.00424
          </a>
        </p>
        <p>
          Georgiou N. (2020){' '}
          <i>
            ‘From Reptile Overlords to Rubella Outbreaks: the Psychology of
            Conspiracy Theories’
          </i>
          , Society for Personality and Social Psychology. Prieiga per
          internetą:
          <br />
          <a
            href='https://spsp.org/news-center/blog/georgiou-psychology-conspiracy-theory'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://spsp.org/news-center/blog/georgiou-psychology-conspiracy-theory
          </a>
        </p>
        <p>
          Gorvett Z. (2020){' '}
          <i>‘What We Can Learn From Conspiracy Theories’, BBC.</i> Prieiga per
          internetą: <br />
          <a
            href='https://www.bbc.com/future/article/20200522-what-we-can-learn-from-conspiracy-theories'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.bbc.com/future/article/20200522-what-we-can-learn-from-conspiracy-theories
          </a>
        </p>
        <p>
          Jim Kline (2017){' '}
          <i>
            ‘C. G. Jung and Norman Cohn Explain Pizzagate: The Archetypal
            Dimension of a Conspiracy Theory’, Psychological Perspectives
          </i>
          , 60:2, 186-195
        </p>
        <p>
          Marchiano L., Lee J.R., Steward D.C. (2021){' '}
          <i>
            ‘Seeking Certainty: The Seduction of Conspiracy Theories’ , This
            Jungian Life
          </i>
          [vaizdo įrašas]. Prieiga per internetą: <br />
          <a
            href='https://youtu.be/XOz0Iptdues'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://youtu.be/XOz0Iptdues
          </a>
        </p>
        <p>
          Merriam-webster.com (2021) <i>Definition of CONSPIRACY THEORY</i> |
          Prieiga internetu: <br />
          <a
            href='https://www.merriam-webster.com/dictionary/conspiracy%20theory'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.merriam-webster.com/dictionary/conspiracy%20theory
          </a>
        </p>
        <p>
          National Research Council (1996){' '}
          <i>‘National Science Education Standards’</i>, Washington, DC: The
          National Academies Press.{' '}
          <a
            href='https://doi.org/10.17226/4962'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://doi.org/10.17226/4962
          </a>
        </p>
        <p>
          Raab, M. H., Ortlieb, S. A., Auer, N., Guthmann, K., & Carbon, C. C.
          (2013).{' '}
          <i>
            ‘Thirty shades of truth: conspiracy theories as stories of
            individuation, not of pathological delusion’. Frontiers in
            psychology
          </i>
          , 4, 406.{' '}
          <a
            href='https://doi.org/10.3389/fpsyg.2013.00406'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://doi.org/10.3389/fpsyg.2013.00406
          </a>
          <p>
            Vladislav Šolc (2019){' '}
            <i>‘Dark Religion and Conspiracy Theories’, Jung Journal</i>, 13:4,
            14-34, DOI: 10.1080/19342039.2019.1676142
          </p>
        </p>
      </div>
    </div>
  );
};
