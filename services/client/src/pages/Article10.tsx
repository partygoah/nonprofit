import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article11Card from '../assets/Article11Card.jpg';
import Article10Card from '../assets/Article10Card.jpg';
import Article12Card from '../assets/Article12Card.jpg';

import Article10Pic2 from '../assets/Article10Pic2.jpg';

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

export const Article10: React.FC = () => {
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
        <h2>Sąmokslo teorijos: kodėl svarbu iš jų ne tik juoktis? </h2>
      ) : (
        <h1>Sąmokslo teorijos: kodėl svarbu iš jų ne tik juoktis? </h1>
      )}
      <h4>Sąmokslo teorijos - I dalis</h4>
      <div className='authors-container' onClick={handleOpenDoma}>
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div className='authors-container' onClick={handleOpenIze}>
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Sąmokslo teorijos yra linkusios atsirasti greitai, ypač tuo metu, kai
        atsitinka kažkas netikėto. Tai gali būti kokia nors krizė, konfliktas ar
        bet kas kito, kas sukelia nesaugumo ar grėsmės jausmą. Būtent tai
        aiškiai matoma šiandien, koronaviruso pandemijos metu – žmonės
        nepaliaujamai ieško paprastų ir greitų paaiškinimų nerimui nuraminti.
        Kadangi šiuo sunkiu laikotarpiu sąmokslo teorijos tapo ypač aktualiu
        socialiniu, politiniu ir psichologiniu reiškiniu, pabandysime giliau
        pažvelgti į šį mįslingą fenomeną.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article10Card} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>Kas yra sąmokslo teorija?</h3>
      <p>
        Trumpai tariant, tai yra teorija, kuri paaiškina įvykį ar situaciją kaip
        galingų sąmokslininkų slapto sumanymo rezultatą.
      </p>
      <h3>Keletas sąmokslo teorijų pavyzdžių:</h3>
      <li>Vakcinos sukelia autizmą;</li>
      <li>
        COVID-19 yra kokios nors valstybės arba slaptos organizacijos specialiai
        sukurtas bioginklas;
      </li>
      <li>Pasaulį valdo slapta Illuminati organizacija;</li>
      <li>
        Lėktuvai, specialiu įtakingų žmonių užsakymu, po savęs palieka nuodingus
        chemikalus (chemtrailus);
      </li>
      <li>Žemė yra plokščia ir panašiai..</li>
      <p>Iš viso yra šimtai ar net tūkstančiai skirtingų sąmokslo teorijų.</p>
      <h3>Sąmokslo teorijų bruožai pagal termino apibrėžimą:</h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Kadangi mes nė vienas nesame apsaugoti nuo neteisingų įsitikinimų ar
          nuostatų, svarbu suprasti skirtumą tarp sąmokslo teorijos ir tiesiog
          klaidingo įsitikinimo.“
        </aside>
      </div>
      <p>
        <li>
          Teorija, kuri atmeta standartinį įvykio paaiškinimą ir vietoj to
          priskiria tai slaptai žmonių grupei ar organizacijai;
        </li>
        <li>
          Įsitikinimas, kad tos slaptos grupės planai yra kokio nors įvykio
          priežastis;
        </li>
        <li>
          Idėja, kad tam tikri politiniai, ekonominiai įvykiai ar socialinės
          tendencijos yra apgaulingo sąmokslo dalis, kurie yra slepiami nuo
          visuomenės.
        </li>
      </p>
      <p>
        Sąmokslo teorija nėra naujas reiškinys – panašaus braižo fenomenai
        egzistavo nuo neatmenamų laikų. Ankščiau tai buvo vadinama tiesiog
        istorijomis, tačiau dabar jų pasekėjai vadina jas „slaptais faktais“.
      </p>
      <p>
        Kadangi mes nė vienas nesame apsaugoti nuo neteisingų įsitikinimų ar
        nuostatų, svarbu suprasti skirtumą tarp sąmokslo teorijos ir tiesiog
        klaidingo įsitikinimo.
      </p>
      <h3>Sąmokslinis mąstymas turi šiuos kriterijus:</h3>
      <ol style={{ paddingLeft: '20px' }}>
        <li>
          Pasekėjai turi labai stiprų emocinį prisirišimą prie savo teorijos.
          Jie aktyviai priešinasi alternatyviems racionaliems paaiškinimams; į
          savo teoriją neįtraukia įrodymų prieštaraujančių jų teorijai; neretai
          fabrikuojami netikri „įrodymai“ teorijai palaikyti;
        </li>
        <li>
          Stiprus „paranoidinis“ teorijos pagrindas. Sąmokslo teorijos yra
          fundamentaliai dualistinės ( „mes“, geriečiai, prieš „juos‘‘–
          blogiečius). Už sąmokslo teorijų slypi įsitikinimas, kad atidengus
          sąmokslą ir išnaikinus tuos „blogiečius“ viskas bus išspręsta ir
          „blogis“ dings;
        </li>
        <li>
          Įvykiai yra sujungiami ir paaiškinami tokiu būdu, kuris visuomet
          palaiko sąmokslo teorijos esmę. Sąmokslo teorija niekada nebūna
          tiesiog vienas izoliuotas įsitikinimas – tai yra įsitikinimų tinklas,
          gaubiantis vieną kompleksišką teoriją;
        </li>
        <li>
          Sąmokslo teorijų pasekėjai komunikuoja tarpusavyje, organizuoja
          diskusijas ir dalijasi informacija tam, kad sustiprintų savo
          įsitikinimus;
        </li>
        <li>
          Jų „žinios“ yra laikomos „sektantinėmis“ (kylančiomis iš įvairių
          nepatikrintų ir kartais net nežinomų šaltinių);
        </li>
        <li>
          Pasekėjai yra pasiruošę aktyviai persekioti galvojančius kitaip – nori
          juos paveikti, „atvesti į tiesą“.
        </li>
      </ol>
      <p>
        Štai chemtrailų, vakcinų ar plokščios žemės teorijos atitinka visus
        aukščiau išvardintus kriterijus.
      </p>
      <h3>Tiesa ar kliedesiai?</h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Vieno žmogaus paranoidinės deliuzijos gali tapti sąmokslo teorija,
          kai kiti, pradedantys ją sekti, vis pildo papildomais įsitikinimais ar
          „idėjomis“, taip sukurdami visą teorijos tinklą.“
        </aside>
      </div>
      <p>
        Sąmokslo teorijas nuo tvirtai laikomo įsitikinimo ir paranoidinės
        deliuzijos (kliedesių) skiria labai plonas siūlas. Iš tikrųjų, vieno
        žmogaus paranoidinės deliuzijos gali tapti sąmokslo teorija, kai kiti,
        pradedantys ją sekti, vis pildo papildomais įsitikinimais ar
        „idėjomis‘‘, taip sukurdami visą teorijos tinklą. Sąmokslo teorija ja
        tampa tik tuomet, kai palieka subjektyvią vieno žmogaus psichikos
        aplinką ir pradeda cirkuliuoti tarp kitų socialinių grupių. Taip
        sąmokslo teorija „gimsta“ ne tik kaip psichologinis procesas, bet ir
        pasireiškia žmonių elgesyje.
      </p>
      <p>
        Įdomiausia tai, kad sąmokslo teorijų jų pasekėjams tiesiog neįmanoma
        paneigti. Taip yra ne dėl to, kad jos – tiesa, o dėl to, kad teorijas
        gaubiantys įsitikinimai suformuluoti taip, jog bet koks paneigimas yra
        naudojamas kaip argumentas teorijai patvirtinti. Plačiai prieinami
        moksliniai įrodymai, paneigiantys sąmokslo teoriją, veda tik prie dar
        didesnių racionalizavimų ir išvedžiojimų apie teorijos teisingumą. Taip
        pat pati teorija kartais yra jau taip suformuluota, kad jos paneigti yra
        neįmanoma, kaip, pavyzdžiui, reptilijų sąmokslo teorija, kuri teigia,
        kad pasaulį per politiką, ekonomiką ir visuomenę valdo driežai
        humanoidai, kurie gyvenantys pasislėpę žmonių gretose.
      </p>
      <h3>Tikri ir netikri sąmokslai</h3>
      <p>
        Vis dėlto yra keletas sąmokslo teorijų, kurios paaiškėjo esą buvusios
        tiesa – pavyzdžiui, MK-Ultra. MK-Ultra JAV, prezidento N. Rokfelerio
        laikais (1970-aisiais) CŽV išleido daugiau nei 20 mln dolerių tam, kad
        slapta sukurtų programą pavadinimu MK-Ultra. Šios programos tikslas buvo
        atrasti medžiagą, kuri padėtų tardymuose išgauti prisipažinimus. Taip
        pat, alkoholio prohibicijos laikais, 1926 –1933, JAV valdžia slapta dėjo
        nuodus į alkoholį, tam, kad nuo jo atgrasytų žmones. Svarbu suprasti,
        kad tai, jog kelios iš šimtų sąmokslo teorijų paaiškėjo esančios tiesa,
        nepadidina kitų sąmokslo teorijų teisingumo tikimybės. Nors sąmokslo
        teorijos ir turi tokį patį arba labai panašų pamatinį mechanizmą, vis
        dėl to kiekviena teorija skirtinga.
      </p>
      <h3>Trys skirtumai tarp sąmokslo teorijos ir tikros konspiracijos:</h3>
      <ol style={{ paddingLeft: '20px' }}>
        <li>
          <b>Laiko limitas.</b> Tikros konspiracijos netrunka ilgai ir yra
          limituotos laiko. Tuo tarpu sąmokslai, apie kuriuos kalba sąmokslo
          teorijų fanatikai, anot jų, gali trukti dešimtmečius ar netgi
          šimtmečius.
        </li>
        <li>
          <b>Dalyvių skaičius.</b> Tikrose žinomose, jau išaiškėjusiose
          konspiracijose matomas labai mažas konspiratorių skaičius. Tai –
          nenuostabu, nes norint, kad konspiracija pavyktų, reikia ją išlaikyti
          paslaptyje. O tai padaryti dalyvaujant dideliam žmonių skaičiui
          praktiškai neįmanoma. Kuo daugiau žmonių dalyvauja, tuo trumpiau
          viskas išliks paslaptyje.
        </li>
        <li>
          <b>Apimtis.</b> Sąmokslo teorijos yra apie globalius, pasaulinio
          dydžio sąmokslus, darančius įtaką milijonams ar milijardams žmonių.
          Tikros konspiracijos nebūna tokio masto – jų apimtis žymiai mažesnė ir
          labiau limituota.
        </li>
      </ol>
      <div style={{ textAlign: 'center' }}>
        <img src={Article10Pic2} alt='image' className='article-image' />
      </div>
      <h3>
        Kuo sąmokslo teorija skiriasi nuo tiesiog klaidingo įsitikinimo ir kodėl
        svarbu apie tai kalbėti?
      </h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Sąmokslo teorija yra daugiau nei tiesiog per žmones vaikščiojantis
          įsitikinimas – jų plitimas turi stiprias ir pavojingas pasekmes.“
        </aside>
      </div>
      <p>
        Dažnas gali išgirsti apie sąmokslo teoriją ir pasijuokti – juk tai tik
        niekam neįdomūs paistalai! Tačiau sąmokslo teorija yra daugiau nei
        tiesiog per žmones vaikščiojantis įsitikinimas – jų plitimas turi
        stiprias ir pavojingas pasekmes. Įtakingų žmonių jos gali būti
        naudojamos kaip ginklas ideologijų stiprinimui ir netiesioginiam
        visuomenės valdymui (tai neretai galima pamatyti totalitarinėse
        valstybėse). Tai, kad kai kurios sąmokslo teorijos paaiškėjo esančios
        tiesa duoda daugiau galios kitoms, net ir ateityje atsirasiančioms
        teorijoms. Negana to, sąmokslo teorijos yra tame pačiame informacijos
        sraute kaip ir visa kita informacija ir dezinformacija. Internetas
        maitina sąmokslo teorijas – čia bet koks įsitikinimas gali būti
        palaistytas, saugomas ir auginamas.
      </p>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Net jeigu sąmokslo teorijos pagal apibrėžimą ir yra tik fantazijos,
          jos turi didelę įtaką visai žmonijos „ekosistemai“– prisideda prie
          visuomenės formavimosi iš skirtingų pusių.“
        </aside>
      </div>
      <p>
        Net jeigu sąmokslo teorijos pagal apibrėžimą ir yra tik fantazijos, jos
        turi didelę įtaką visai žmonijos „ekosistemai“ – prisideda prie
        visuomenės formavimosi iš skirtingų pusių:
      </p>
      <li>
        Sąmokslo teorijų vedami pasekėjai neretai vykdo neapykantos
        nusikaltimus;
      </li>
      <li>
        Vakcinų atsisakymas ir nusistatymas prieš jas kelia grėsmę visos
        visuomenės gerovei;
      </li>
      <li>
        Nenoras imtis priemonių pasaulio atšilimo prevencijai taip pat neigiamai
        atsiliepia visiems gyvenantiems Žemėje.
      </li>
      <p>
        Visi šie pavyzdžiai rodo kainą, kurią moka visą žmonija, būtent dėl
        sąmokslo teorijų pasekėjų veiksmų.
      </p>
      <h3>Subjektyvumas ir kita medalio pusė</h3>
      <p>
        <div className='article-quote right'>
          <aside style={{ display: 'block' }}>
            „Požiūris į sąmokslo teorijas kaip į bereikšmes nesąmones, kaip ir
            teiginys, kad tiesų tiesa yra kitokia, ir kad ją lengva atskirti,
            yra sudėtingos situacijos supaprastinimas.“
          </aside>
        </div>
        Svarbu suprasti, kad tai, kas vienam yra sąmokslo teorija, kitam tai –
        realybė. Sąmokslo teorija yra galingas fenomenas, sukeliantis nemažai
        pasekmių ir racionalistų vertinamas kaip didelė grėsmė visuomenei.
        Tačiau retai paminima tai, kad vis dėlto, ribos nėra aiškios, kur
        sąmokslo teorija baigiasi ir kur prasideda tiesa. Požiūris į sąmokslo
        teorijas kaip į bereikšmes nesąmones, kaip ir teiginys, kad tiesų tiesa
        yra kitokia, ir kad ją lengva atskirti, yra sudėtingos situacijos
        supaprastinimas.
      </p>
      <h3>Priežastys</h3>
      <p>
        Statistika atskleidžia tam tikrą sąmokslo teorijų pasekėjų profilį.
        Jiems būdingas žemas emocinio intelekto lygis, taip pat žemas
        pasitikėjimas savimi ir žemesnis išsilavinimo lygis. Prie to prisideda
        tokios savybės kaip mokslinis cinizmas, reaktyvumas, etnocentrizmas,
        ksenofobija ir nepolitinis konservatizmas. Tačiau tai vis dėlto nieko
        nepasako apie tikrąsias sąmokslo teorijų atsiradimo priežastis.
      </p>
      <p>
        Moksliniai tyrimai išskiria daug skirtingų priežasčių, kodėl žmogus gali
        tapti sąmokslo teorijos pasekėju, pradedant asmenybės bruožais baigiant
        socialinių poreikių patenkinimu. Sąmokslo teorijų keliavimas iš lūpų į
        lūpas įvairiomis priemonėmis patenkina įvairius politinius,
        psichologinius ir socialinius motyvus. Sociologai tvirtina, kad sąmokslo
        teorijos tenkina socialinius poreikius, tuo tarpu nemažai racionalistų
        įsitikinę, kad pagrindinė problema yra išsilavinimo trūkumas ir
        mokslinis neraštingumas. Padarius gilią mokslinių tyrimų analizę iš
        įvairių disciplinų susidaro įspūdis, kad nėra vieno paprasto
        paaiškinimo, kodėl žmonės tiki sąmokslo teorijomis. Tačiau aišku viena –
        priežastys susideda iš bazinių įsitikinimų, asmenybės struktūros,
        dabartinės psichologinės situacijos ir gyvenimo aplinkybių.
      </p>
      <p>
        Kitame šios serijos straipsnyje kalbėsime apie paviršines sąmokslo
        teorijų atsiradimo ir gyvavimo priežastis – kritinį mąstymą ir mokslinį
        raštingumą.
      </p>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
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
                  variant='body1'
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
          Davis, C. (2021){' '}
          <i>
            ‘Conspiracy Theories are no Longer the Domain of Lovable Weirdos
            Tracking Bigfoot – they’re a Sinister Problem’
          </i>
          , Business Insider. Prieiga per internetą: <br />
          <a
            href='https://www.businessinsider.com/conspiracy-theories-are-more-popular-than-ever-its-a-problem-2020-10?r=US&IR=T'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'rgb(120, 211, 253)' }}
          >
            https://www.businessinsider.com/conspiracy-theories-are-more-popular-than-ever-its-a-problem-2020-10?r=US&IR=T
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
