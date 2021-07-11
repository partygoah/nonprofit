import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article5Card from '../assets/Article5Card.jpg';
import Article5Pic2 from '../assets/Article5Pic2.jpg';
import Article3Card from '../assets/Article3Card.jpg';

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

export const Article5: React.FC = () => {
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

        <h2>„Man viskas gerai“ arba trumpai apie saviapgaulę</h2>
      ) : (
        <h1>„Man viskas gerai“ arba trumpai apie saviapgaulę</h1>
      )}
      <h4>Psichologiniai patarimai ir asmeninė atsakomybė</h4>
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
        Esame nuolat „bombarduojami“ įvairia, neretai ir prieštaringa,
        informacija. Kol internete vis daugėja aprašomų įvairių psichologinių
        mokslinių tyrimų ar psichologinių patarimų, surasti informacijos apie jų
        pritaikymą – nelengva. Tad kartais nesuvokdami tiek psichologijos mokslo
        subjektyvumo, tiek savo psichikos trapumo, susiduriame su sunkumais
        pritaikydami perskaitytus patarimus. Asmeninė atsakomybė ir
        savirefleksija yra kertiniai elementai pritaikant psichologinius
        patarimus, praktikas, teorijas ar mokymus.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article5Pic2} alt='image' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuotr. aut. freepik.com
      </div>
      <h3>Esmė – kontekste</h3>
      <p>
        Psichika nėra nuo aplinkos izoliuotas fenomenas, ji nuolat sąveikauja ne
        tik su aplinka, bet ir vidumi, tarp skirtingų savo dalių (kaip,
        pavyzdžiui, sąmonė ir pasąmonė). Tai reiškia ne tik tai, kad
        psichologijos mokslas yra fundamentaliai subjektyvus, bet ir tai, jog
        svarbu negeneralizuoti bei atkreipti dėmesį į kiekvieno atskiro atvejo
        individualumą. Apibendrinantys patarimai individualiems atvejams
        dažniausiai tiesiog netinka.
      </p>
      <p>
        Paėmus izoliuotą psichologijos patarimą ar kokią nors praktiką,
        praktiškai neįmanoma pasakyti ar ji naudinga, ar žalinga, nes neturime
        konteksto, trūksta kertinės lygties dalies – žmogaus psichikos. Deja,
        mes kiekvienas esame atsakingas už patarimo pritaikymą sau. Bet koks
        patarimas gali būti netinkamai interpretuotas arba pritaikytas ne laiku
        ir ne vietoje. Tas pats ir su praktikomis – bet kuri praktika ar
        technika gali būti atliekama klaidingai arba netinkamai pritaikoma.
        Tokiais atvejais girdime, kaip žmonės sako, kad vienas ar kitas
        patarimas yra nieko vertas, nes rezultatas neatitiko lūkesčių.
      </p>
      <p>
        Labai svarbu visuomet kritiškai vertinti informaciją su mintimi, kad
        psichologija yra fundamentaliai subjektyvus mokslas. Vienas ir tas pats
        patarimas gali būti vienam žalingas, o kitam – naudingas.
      </p>
      <h3>Dviprasmiškumas</h3>
      <div style={{ textAlign: 'center' }}>
        <img src={Article5Card} alt='image' className='article-image' />
      </div>
      <p>„Būk organizuotas. Susitvarkyk kambarį. Turėk aiškią struktūrą.“</p>
      <p>
        Tai yra vienas iš vis labiau populiarėjančių psichologinių patarimų,
        galinčių atrodyti nekaltai ir, galbūt, netgi tinkamas kiekvienam. Vis
        tik kai kuriems šis patarimas gali sugadinti kūrybinį srautą. Taip pat,
        jeigu gyvenime kenčiate nuo neurotizmo ir pernelyg didelio
        perfekcionizmo, uždėjus papildomą sluoksnį struktūros situacija gali tik
        pablogėti. Būtent todėl visuomet labai svarbu individualus kontekstas,
        nes palikus jį už borto labai dažnai sunaikinamas žmonių kūrybiškumas.
      </p>
      <p>
        Tas pats galioja ir įvairioms praktikoms. Pavyzdžiui, svajonių
        išsipildymo vizualizacija (optimizmo repetavimo praktika) žmogui,
        pastoviai ieškančiam patvirtinimo iš kitų, gali prisidėti prie jo
        polinkio abejoti savo gebėjimais siekiant tikslų.
      </p>
      <p>
        Teoriškai, galima sakyti, kad visiems žmonėms negalima duoti to paties
        patarimo, tačiau šiais laikais tai nėra realu. Mūsų skaitomi straipsniai
        ar žiūrimos laidos tiesiog fiziškai negali visko individualizuoti.
        Vienintelis būdas apsisaugoti – patiems prisiimti atsakomybę ir būti
        atidiems. Nuo šiol galite sąmoningai stengtis atkreipti į tai dėmesį.
      </p>
      <h3>Savęs apgaudinėjimas</h3>
      <p>
        Negana to, taip pat esame linkę automatiškai atmesti tai, kas neatitinka
        mūsų pažiūrų. Nenorime kvestionuoti savo įsitikinimų, patys nesuprasdami
        tam priešinamės – visais būdais to pasąmoningai vengiame. Psichologijoje
        dažnai galime sutikti pozityvius dalykus, kurie yra pasislėpę po
        negatyvumo kauke. Pavyzdžiui, didelis nenoras pritaikyti vieną ar kitą
        patarimą gali parodyti, kad mums jo iš tikrųjų gali labai reikėti. Tai
        reiškia, kad dažnai automatiškai atmetame tai, kas mus potencialiai gali
        padaryti sąmoningesniais. Tai vadinama neigimu (angl. <i>denialism</i>),
        ir tai yra vienas stipriausių gynybos ir savęs apgaudinėjimo mechanizmų.
      </p>
      <p>
        Pavyzdžiui, jeigu žmogus, <b>patiriantis sunkumų</b> su kontrole,
        perfekcionizmu ir perdėtu tvarkymusi, perskaitys, kad patarimas apie
        struktūrą – dviprasmiškas, jis staiga gali pradėti neigti faktą, kad
        patarimas nėra universalus. Mat jis prieštarauja jo baziniams
        įsitikinimams. Šis žmogus norėtų, kad visi aplinkui būtų tokie
        organizuoti ir strūkturizuoti kaip jis. Jam būtų sunku suvokti, kad toks
        jo elgesys potencialiai prisideda prie jo kūrybiškumo stokos.
      </p>
      <p>
        Taip pat esame linkę informacijos spragas užpildyti šališka informacija
        ir nuolat pasąmoningai ieškome mūsų įsitikinimus patvirtinančios
        informacijos.
      </p>
      <p>
        Kitas hipotetinis pavyzdys – chaotiškas, tvarkytis nemėgstantis ir
        visiškai struktūros gyvenime neturintis, <b>ir nuo to kenčiantis</b>,
        žmogus, perskaitęs tą patį tekstą gali pradėti teisinti savo elgesį, su
        mintimi, kad truputis struktūros jo gyvenime sunaikins jo kūrybinį
        srautą. Iš tikrųjų, galbūt šiek tiek struktūros ir tvarkos jo gyvenime
        jam padėtų išspręsti jo chaoso keliamas problemas.
      </p>
      <p>
        Galite puikiai matyti, kaip abiejuose hipotetiniuose pavyzdžiuose žmogus
        save apgavo, racionalizuodamas savo elgesį į sau ilgainiui nenaudingą
        pusę.
      </p>
      <p>
        Taip pat skaitydami įvairių sutrikimų simptomus, straipsnius apie
        psichologiją ar tiesiog žiūrėdami vaizdo įrašus esame linkę ne tik
        neatsargiai apibendrinti, bet ir viską, ką girdime pritaikyti sau.
        Dažniausiai tai vyksta automatiškai ir nekreipiame į tai daug dėmesio, o
        po to net nesusimąstydami klijuojame sau ar pažįstamiems tokias etiketes
        kaip „apsišaukėlio sindromas“ (angl. imposter syndrome). Toks elgesys
        gali būti pavojingas – identifikacija gali padaryti žymiai daugiau žalos
        nei naudos, tad svarbu išlikti atidiems.
      </p>
      <p>
        Savęs apgaudinėjimas yra pagrindinis sunkumas, su kuriuo nuolat vis
        susidursite, jeigu nuoširdžiai sieksite pažinti save. „Apgaudinėti save“
        yra natūralu ir nė vienas nesame nuo to apsaugotas. Pradžioje galite
        tiesiog pabandyti atkreipti dėmesį į tai, kaip tai darote.
      </p>
      <h3>Kraštutinumų problema ir balanso prasmė</h3>
      <p>
        Kad galime save potencialiai apgauti išduoda mūsų polinkis į
        kraštutinumus – išgirdę patarimą, nusprendžiame, kad darysime daug arba
        staiga visiškai atsisakysime jo. Balansuoti tarp dviejų kraštutinumų ir
        abejoti – sveika. Svarbu nežaloti savo psichikos, bet tuo pačiu ir
        nenaudoti to kaip pasiteisinimo, kad nedarytumėte nieko išvis.
        Pavyzdžiui, žmogus kenčiantis nuo perdėto noro viską nuolat kontroliuoti
        negali tiesiog imti ir gyventi vadovaudamasis spontaniškumu, nes tai
        gali atskleisti daug pasislėpusio nerimo. Tačiau tas pats žmogus gali
        nuspręsti patarimą šiek pakeisti ir taip labiau pritaikyti savo
        specifinei situacijai: galbūt kartą į dvi dienas pasielgti spontaniškai
        ir neplanuotai – šansas, kad patarimas duos naudos, didesnis. Taip pat
        padidėja tikimybė, kad patarimu bus naudojamasi, nes maži pasikeitimai
        ne taip gąsdina.
      </p>
      <p>
        Galų gale, ypač jeigu abejojame, galiausiai nuspręsti galime tik išbandę
        patarimą. Prieš ką nors pabandydami galime savęs paklausti:
      </p>
      <li>Ar šis patarimas neprisidės prie mano destruktyvaus elgesio?</li>
      <li>
        Kokie mano lūkesčiai ir ko aš siekiu pritaikydamas patarimą ar idėją?
      </li>
      <li>
        Ar aš, pritaikydamas patarimą, neperšoku iš vieno kraštutinumo į kitą?
      </li>
      <li>
        Ar yra būdas pritaikyti patarimą po truputį, neperlenkiant lazdos?
      </li>
      <p>
        Ir taip pat atsiminti, kad <b>nė vienas nesame atsparus</b> nuo:
      </p>
      <li>
        Informacijos, kuri patvirtina mūsų jau esamus įsitikinimus, ieškojimo;
      </li>
      <li>Informacijos apvalinimo ir supaprastinimo;</li>
      <li>Žinių spragų užpildymo šališka informacija;</li>
      <li>Automatinės identifikacijos/informacijos pritaikymo sau.</li>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        {' '}
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
      <div style={{ wordWrap: 'break-word', fontSize: 18 }}>
        <p>
          Holder, J. (2013) <i>‘49 Ways to Write Yourself Well’</i>, Brighton:
          Step Beach Press.
        </p>
        <p>
          Layous, K., Chancellor, J., & Lyubomirsky, S. (2014).{' '}
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
          </a>
          <br />
          Prieiga per internetą: <br />
          <a
            href='http://sonjalyubomirsky.com/files/2012/09/Layous-Chancellor-Lyubomirsky-2014.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            http://sonjalyubomirsky.com/files/2012/09/Layous-Chancellor-Lyubomirsky-2014.pdf
          </a>
        </p>
        <p>
          Pennebaker J., Evans J.F. (2014){' '}
          <i>‘Expressive Writing: Words that Heal’</i>, Idyll Arbor.
        </p>
        <p>
          Richards, S., Richards, P. and Dowling, J. (2020){' '}
          <i>
            ‘Release your instincts. Overcoming Addiction: A Jungian Lecture’
          </i>
          , [vaizdo įrašas]. Prieiga per internetą: <br />
          <a
            href='https://youtu.be/beF-2KBY1gg'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://youtu.be/beF-2KBY1gg
          </a>
        </p>
        <p>
          Richards, S., Richards, P. and Dowling, J. (2020){' '}
          <i>‘Finding Your Destiny by Discovering your Personal Myth’</i>
          , [vaizdo įrašas]. Prieiga per internetą: <br />
          <a
            href='https://youtu.be/MW5NBKS-7Lc'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://youtu.be/MW5NBKS-7Lc
          </a>
        </p>
        <p>
          Richards, S., Richards, P. and Dowling, J. (2020){' '}
          <i>‘The Psychology of Active Imagination and Dissociation’</i>
          , [vaizdo įrašas]. Prieiga per internetą: <br />
          <a
            href='https://youtu.be/QMECOwn8q50'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://youtu.be/QMECOwn8q50
          </a>
        </p>
        <p>
          Sin, N. and Lyubomirsky, S. (2009){' '}
          <i>
            ‘Enhancing well-being and alleviating depressive symptoms with
            positive psychology interventions: a practice-friendly
            meta-analysis’
          </i>
          , Journal of Clinical Psychology, 65(5), pp.467-487.
        </p>
        <p>
          Smyth, J., Stone, A., Hurewitz, A. and Kaell, A. (1999){' '}
          <i>
            ‘Effects of Writing About Stressful Experiences on Symptom Reduction
            in Patients With Asthma or Rheumatoid Arthritis’ Journal of American
            Medical Association
          </i>
          , 281(14), p.1304. Prieiga per internetą: <br />
          <a
            href='https://jamanetwork.com/journals/jama/fullarticle/189437'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://jamanetwork.com/journals/jama/fullarticle/189437
          </a>
        </p>
        <p>
          The Conversation (2020){' '}
          <i>
            ‘Coronavirus responses highlight how humans are hardwired to dismiss
            facts that don&apos;t fit their worldview’
          </i>
          . Prieiga per internetą: <br />
          <a
            href='https://theconversation.com/coronavirus-responses-highlight-how-humans-are-hardwired-to-dismiss-facts-that-dont-fit-their-worldview-141335'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://theconversation.com/coronavirus-responses-highlight-how-humans-are-hardwired-to-dismiss-facts-that-dont-fit-their-worldview-141335{' '}
          </a>
        </p>
      </div>
    </div>
  );
};
