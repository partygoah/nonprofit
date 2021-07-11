import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';
import { HighlightedQuote } from '../components/HighlightedQuote';

import Article10Card from '../assets/Article10Card.jpg';
import Article11Card from '../assets/Article11Card.jpg';
import Article12Card from '../assets/Article12Card.jpg';

import Article12Pic2 from '../assets/Article12Pic2.jpg';

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

export const Article12: React.FC = () => {
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
        <h2>Ką turi bendro pasąmonė ir sąmokslo teorijos?</h2>
      ) : (
        <h1>Ką turi bendro pasąmonė ir sąmokslo teorijos?</h1>
      )}
      <h4>Giluminės sąmokslo teorijų atsiradimo priežastys</h4>
      <h5>Sąmokslo teorijos - III dalis</h5>
      <div className='authors-container' onClick={handleOpenDoma}>
        Autorė: <span className='authors'>Dominyka</span>
      </div>
      <div className='authors-container' onClick={handleOpenIze}>
        Redaktorė: <span className='authors'>Izabelė</span>
      </div>
      <p style={{ fontWeight: 'bold' }}>
        Sąmokslo teorijas psichologiniame lygmenyje galima prilyginti
        narkotikams – jos dovanoja paprastą išeitį sudėtingoms problemoms, bet
        tik iki tol, kol tai tampa spąstais. Bendrystės jausmas, narcisizmas,
        galia, asmeninės atsakomybės išsižadėjimas, nepasitikėjimas savimi,
        paranoja, projekcija – visa tai susiję su sąmokslo teorijų atsiradimo ir
        gyvavimo priežastimis. Apie tai šiandien ir kviečiame pasikalbėti.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article12Card} alt='image' className='article-image' />
      </div>
      {/* <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div> */}
      <h3>Fenomenologinis požiūris</h3>
      <HighlightedQuote>
        Gyvenime mums reikia prisitaikyti ne tik prie išoriniame pasaulyje
        vykstančių pokyčių – mums tenka prisitaikyti ir prie vidiniame pasaulyje
        vykstančių procesų ar iš ten kylančių jėgų.
      </HighlightedQuote>
      <p>
        Ankstesniame straipsnyje apžvelgėme mokslinio raštingumo nebuvimo ir
        kognityvinių įgūdžių įtaką sąmokslo teorijų atsiradimui ir paplitimui. Į
        sąmokslo teorijas žvelgėme iš mokslinio racionalizmo perspektyvos. Nors
        tame straipsnyje diskutuoti aspektai ir yra svarbūs, jie taip pat –
        limituoti. Būtent todėl šiame straipsnyje bandysime gvildenti visiškai
        kitokį – labiau fenomenologinį – požiūrį. Šioje dalyje analizuosime
        gilesnes priežastis, susijusias su pasąmone, pamatiniais įsitikinimais
        ir psichikos sveikata.
      </p>
      <p>
        Jungistinė psichologija (ypač pačio Jungo metodas ir požiūris) yra
        fenomenologinis mokslas. Tai reiškia, kad koncentruojamasi į subjektyvų
        patyrimą, nei pilnai priimant, nei pilnai atmetant analizuojamą
        fenomeną. Tai leidžia įsigilinti į patį fenomeną, nes bandoma atsisakyti
        bet kokių išankstinių nuostatų ir gilintis į patyrimą ir jo reikšmę
        patiriančiajam.
      </p>
      <p>
        Gyvenime mums reikia prisitaikyti ne tik prie išoriniame pasaulyje
        vykstančių pokyčių – mums tenka prisitaikyti ir prie vidiniame pasaulyje
        vykstančių procesų ar iš ten kylančių jėgų. Spaudimas, kylantis iš
        pasąmonės, reikalauja stiprios asmenybės, tam, kad būtų galima su
        pasąmone užmegzti sąmoningą ir taikų santykį. Sąmokslo teorijos yra
        būtent apie negebėjimą to padaryti. Tai yra apie įgūdžių, padedančių
        užmegzti ryšį su „nesuprantamu“ arba „kitu“, trūkumą. Tas „svetimas“
        gali būti simptomas, sapnas ar bet koks kitas nesuprantamas reiškinys,
        prašantis būti suvokiamas simboliškai, o ne tiesiogiai.
      </p>
      <p>
        Apačioje rasite punktus apie sąmokslo teorijų pasekėjų psichologiją ir
        jos unikalumą. Visi žemiau išvardinti punktai realybėje vienas su kitu
        yra persipynę – dėl to jie gali atrodyti labai glaudžiai susiję.
      </p>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Aklas aiškumo siekimas glaudžiai susijęs su negebėjimu išlaikyti
          priešybių įtampos ir sudėtingumo tiek vidiniame, tiek išoriniame
          pasaulyje.“
        </aside>
      </div>
      <li>
        <b>Galia.</b> Atmesdami populiariuosius naratyvus žmonės jaučiasi įgavę
        tam tikrą galią;
      </li>
      <li>
        <b>Individualumas.</b> Negebėjimas susikurti savo pilnavertės asmenybės
        susijungia su troškimu atsiskirti nuo masių, kurias pasekėjai vadina
        „naiviais“. Sąmokslo teorijos suteikia unikalumo ir ypatingumo jausmą –
        <i>„žinau daugiau, nei kiti“</i>, <i>„turiu slaptos išminties“</i>.
        Žinoma, svarbi asmenybės augimo proceso dalis – suvokti save atskirai
        nuo socialinių normų ar visuomenės poreikių. Tačiau sąmokslo teorijos
        yra nesąmoningas kraštutinis atsakas, neturintis nieko bendro su
        sąmoningu savo, kaip individo, suvokimu;
      </li>
      <li>
        <b>Nežinios baimė.</b> Žmonės linkę į keistus paaiškinimus vien todėl,
        kad išlaikytų įsitikinimą, kad pasaulis yra nuspėjamas ir pastovus. Iš
        tikrųjų sąmokslo teorijos tikro saugumo nesuteikia – jos tik padeda
        nuimti truputį nerimo ir suteikia skaidrumo iliuziją. Aklas aiškumo
        siekimas glaudžiai susijęs su negebėjimu išlaikyti priešybių įtampos ir
        sudėtingumo tiek vidiniame, tiek išoriniame pasaulyje;
      </li>
      <li>
        <b>Asmeninė atsakomybė.</b> Kaltės perkėlimas ant kitų sumažina politinę
        atsakomybę:{' '}
        <i>
          „Jeigu nesugebu pakeisti savo gyvenimo, tai reiškia, kad yra kažkokia
          stipresnė neigiama jėga valdanti pasaulį‘‘
        </i>
        . Sąmokslo teorijų pasekėjai turi asmeninės atsakomybės ir įžvalgų
        trūkumą. Pasekėjai tiki, kad sąmokslas yra taip puikiai sugalvotas, kad
        įgyvendinti „teisingumą“ yra praktiškai neįmanoma. Pavyzdžiui, jie
        geriau renkasi tikėti, kad globalinis atšilimas yra melas vietoj to, kad
        imtųsi bent minimalių priemonių dėl atsargumo;
      </li>
      <li>
        <b>Gelbėtojai.</b> Sąmokslo teorijų pasekėjai trokšta prasmingo,
        teisingo ir laisvo nuo kančios pasaulio. Jie nuoširdžiai tiki, kad yra
        herojinėje kelionėje ir yra pasiruošę perduoti savo valią tos kelionės
        lyderiams;
      </li>
      <li>
        <b>Silpnas ego.</b> Būtent žmonės, kenčiantys nuo gilių gėdos,
        menkavertiškumo, nepasitikėjimo, pykčio, nežinios baimės ar bejėgiškumo
        jausmų lengviau pasiduoda įvairioms manipuliacijoms. Nepakankamai
        stiprus sąmoningasis „aš“ reiškia tai, kad dažnai nesame pakankamai
        stiprūs susidurti su tiesa akis į akį, ir dėl to galime būti linkę kurti
        paprastus paaiškinimus;
      </li>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Sąmokslo teorijos dengia asmeninius kompleksus, kurie pasireiškia
          neasmeniškais būdais.“
        </aside>
      </div>
      <li>
        <b>Bendrystės jausmas.</b> Sąmokslo teorija suteikia bendrystės jausmą,
        nes tikėdami ja, pasekėjai prisijungia vieni prie kitų. Pačios sąmokslo
        teorijos gali būti matomos kaip platformos, sukurtos su tikslu surasti
        panašaus mąstymo individų tam, kad įveiktų giliai viduje užslėptą
        susvetimėjimą. Kadangi jų – mažuma, tai sukuria bendrystės iliuziją –
        jausmą, kad esi ne vienas, kažko „didesnio“ dalis, kažkur pritampi
        (panašu į genčių formavimosi mechanizmą). Žmonės neturintys aiškios
        tapatybės ir asmenybės (silpnas ego) tiesiog šaukiasi kažko, kas jiems
        galėtų suteikti tapatybės jausmą. Tas jausmas, randamas sąmokslo teorijų
        pasekėjų bendruomenėje, gali atrodyti gyvybiškai svarbus;
      </li>
      <li>
        <b>Paranoja.</b> Sąmokslo teorijos dengia asmeninius kompleksus, kurie
        pasireiškia neasmeniškais būdais. Pastovus jausmas, kad negalima
        pasitikėti autoritetais ir kad socialinė tvarka vis griūna. Šis
        šališkumas apie autoritetus galimai yra artimai susijęs su tėvų
        kompleksais (
        <i>
          pasąmoningas struktūrinis elementas, asocijuojamas su motinos ar tėvo
          patirtimis, suvokimu ir vaizdiniais
        </i>
        ). Tai yra pamatiniai kompleksai, galintys daryti didelę įtaką žmogaus
        gyvenimui, mąstymui ir šališkumui. Tad institucijos ar valdžia yra
        simboliniai bazinių vertybių ir gyvenimo pagrindų priminimai, glaudžiai
        susiję su tėvų kompleksu. Kitaip tariant, pasąmoningai ieškoma, kuo
        patvirtinti neišspręstus vidinius konfliktus ar psichologinius sunkumus;
      </li>
      <li>
        <b>Reikšmės jausmas ir kontrolė</b>. Sąmokslo teorijos suteikia
        reikšmingumo ir paaiškinimų šiame „pavojingame“ pasaulyje;
      </li>
      <li>
        <b>Narcisizmas.</b> Vienas mokslinis tyrimas rado glaudžią koreliaciją
        tarp narcisistinių bruožų ir sąmokslo teorijų pasekėjų. Didelis
        egocentriškumas, susireikšminimas ir pažeidžiamumas pasaulinio masto
        įvykiams ar tendencijoms (tokie įvykiai parodo, kad žmogus vis dėlto
        nėra pasaulio centras) būdingi sąmokslo teorijų pasekėjams;
      </li>
      <li>
        <b>Vertybės.</b> Kai kurie mokslininkai siūlo į sąmokslo teorijas
        žiūrėti kaip į būdą iškomunikuoti savo asmenines vertybes. Tai reiškia,
        kad sąmokslo teorijų pasekėjai neturi kitų platformų savo vertybių
        komunikavimui ar praktikavimui. Tad jie sąmokslo teorijomis bando
        paryškinti savo pamatines vertybes, taip sukurdami iliuziją, kad
        prasmingai organizuoja ir kontroliuoja savo gyvenimus;
      </li>
      <li>
        <b>Savo tikrojo tikslo ir pašaukimo neradimas.</b> Tikėjimas sąmokslo
        teorijomis taip pat susijęs su nuobodulio jausmu. Savo pašaukimą rasti
        nelengva – tam, kad suprastume, kas mums teikia laimę ir prasmę, pirma
        reikia pažinti save, pažvelgti į savo asmenybės gelmes. Tai padaryti –
        pažvelgti savo vidiniam sąmokslininkui į akis – yra herojiška užduotis,
        reikalaujanti daug emocinio darbo, laiko, drąsos ir pastangų. Deja, kuo
        mažiau ego yra sąmoningas apie savo šešėlį, tuo jis yra labiau linkęs
        būti jo valdomu (
        <i>
          „geriau kentėsiu nuo iliuzijos kančios negu akis į akį susidursiu su
          tikromis problemomis savyje“
        </i>
        ).
      </li>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Visur matomi sąmokslai, nors iš tikrųjų tai tėra pasidalijimai
          psichikoje.“
        </aside>
      </div>
      <li>
        <b>Fragmentacija ir poliarizacija.</b> Sąmokslo pasekėjų psichika –
        pasidalijusi ir stipriai fragmentuota. Aiškus, moralizuojantis gero ir
        blogo padalinimas, su baziniu įsitikinimu, kad „aš – geras, jie –
        blogi“. Tai yra apie vieną psichikos dalį, kuri yra nukreipta prieš
        kitą. Viena iš jų nusakoma kaip bloga (kažkas, prieš ką reikia būtinai
        kovoti). Toks psichikos pasidalinimas atsispindi tame, kaip matomas
        pasaulis. Kitaip sakant, tokia pasaulėžiūra apie pasaulį nepasako nieko.
        Tačiau pasako, kaip pasidalinusi psichika.
      </li>
      <li>
        <b>Projekcija</b> – mūsų pasąmoningos psichikos dalys, atsispindinčios
        išoriniame pasaulyje (žmonėse, institucijose, pasaulėžiūroje).{' '}
        <b>
          Visur matomi sąmokslai, nors iš tikrųjų tai tėra pasidalijimai
          psichikoje.
        </b>
      </li>
      <li>
        Taip pat pasąmoninga savo bazinių įsitikinimų projekcija (jeigu aš
        sąmokslaučiau, vadinasi, ir jie sąmokslauja)
      </li>
      <h3>
        „Meilė iš pirmo žvilgsnio“ – <i>participation mystique</i>
      </h3>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Tikrieji motyvai – paslėpti ir neaiškūs net pačiam pasekėjui, mat
          jėgos, maitinančios sąmokslo ideologiją, yra pasąmoningos.“
        </aside>
      </div>
      <p>
        Participation mystique (mistinis dalyvavimas) yra terminas, kilęs iš{' '}
        <a
          href='https://www.vle.lt/straipsnis/antropologija/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          antropologijos
        </a>{' '}
        srities, kurį plačiai naudojo Jungas. Šis terminas yra apie instinktyvų
        susitapatinimą, sąveiką, kai vyksta pasąmonės lygio komunikacija. Vienas
        iš participation mystique pavyzdžių yra stiprus susižavėjimas, arba
        „meilė iš pirmo žvilgsnio“, kurios metu vyksta pasąmoningas
        susitapatinimas, o po kurio laiko išsisklaido tarsi rūkas ir žmogus
        nubloškiamas į skaudžią realybę. Sąmokslo teorijos turi panašų veikimo
        principą – nesąmoningai pagrįstą susitapatinimą, apvelkamą
        racionalizacijomis ir „paaiškinimais“.
      </p>
      <p>
        Anot Jungo, viena pagrindinių psichologijos aksiomų (
        <i>pradinis, be įrodymo priimamas teorijos teiginys</i>) yra ta, kad kai
        psichikos dalis atsiskiria nuo sąmonės, ji tik atrodo neaktyvuota. Iš
        tikrųjų ji apsėda visą asmenybę tokiu stiprumu, kad individo tikslai
        būna suklastoti tos atsiskyrusios dalies interesams patenkinti. Apjungus
        tai su sąmokslo teorijų pasekėjų pavyzdžiu, tai reiškia, kad{' '}
        <b>
          tikrieji motyvai – paslėpti ir neaiškūs net pačiam pasekėjui, mat
          jėgos, maitinančios sąmokslo ideologiją, yra pasąmoningos.
        </b>
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article12Pic2} alt='image' className='article-image' />
      </div>
      <h3>Mitologija, pasakojimai ir religija</h3>
      <div className='article-quote left'>
        <aside style={{ display: 'block' }}>
          „Sąmokslo teorijos situacijoje pasąmonės turinys sėkmingai
          projektuojamas į kitus žmones ar aplinką, tuo pačiu maitina pasekėjus
          fantazijomis apie nugalėtą blogį.“
        </aside>
      </div>
      <p>
        Religiniai tikėjimai (
        <i>dogmatiniai įsitikinimai, neturintys nieko bendro su dvasingumu</i>)
        skiriasi nuo sąmokslo teorijų tik tuo, kad sąmokslo teorijos iš šalies
        atrodo gana ateistinės (žmogus kuria sąmokslą, žmogus yra blogio
        šaltinis ir panašiai). Kartais žmonės pakeičiami humanoidais,
        reptilijomis ar ateiviais. Sąmokslo teorijos situacijoje pasąmonės
        turinys sėkmingai projektuojamas į kitus žmones ar aplinką, tuo pačiu
        maitina pasekėjus fantazijomis apie nugalėtą blogį.
      </p>
      <p>
        Didelis troškimas pasakojimams, „slaptai išminčiai“ ir panašiai, gali
        būti susijęs su psichikos poreikiu mitui. Dabar, iš akiračio po truputį
        traukiantis tradiciniams religiniams mitams, sąmokslo teorijos yra
        puikus taikinys projekcijoms. Dievai su antžmogiškomis galiomis yra
        pakeisti slaptaisiais agentais, illuminati, žydais ar ateiviais.
      </p>
      <p>
        Iš Jungistinės psichologijos perspektyvos, religijose randami dievai,
        mituose ir pasakose esantys veikėjai neturi atvaizduoti konkrečių
        figūrų, tačiau jie yra psichologinių procesų reprezentacijos,
        padedančios išspręsti įvairias problemas, su kuriomis gali susidurti
        žmonės. Pavyzdžiui, drakonas su keliomis galvomis gali reprezentuoti
        sudėtingą emocinę būseną, su kuria reikia susitvarkyti. Simbolis
        suteikia galimybę pažvelgti į savo vidinio pasaulio situaciją.
      </p>
      <div className='article-quote right'>
        <aside style={{ display: 'block' }}>
          „Kai sąmoningasis „aš“ neugdo ryšio su pasąmone, viskas priimama
          tiesiogiai, o ne simboliškai.“
        </aside>
      </div>
      <p>
        Tačiau kai sąmoningasis „aš“ neugdo ryšio su pasąmone, viskas priimama
        tiesiogiai, o ne simboliškai. Tokia psichika yra linkusi į mechanistinį,
        fragmentuotą pasaulio matymą, kuriame daug paranojos, tuštumos, o tuo
        pačiu – didelis intuicijos, suteikiančios kontekstą, trūkumas.
        Pavyzdžiui, sąmokslo teorijų fanatikai neretai cituoja religinius
        tekstus, neva jie tiesiogiai pranašauja ateitį ir puikiai atspindi tai,
        kas vyksta šiandieniniame pasaulyje. Tačiau retai pagalvojama apie tai,
        kad galbūt religiniai tekstai nėra apie tiesioginį jų priėmimą – tikroji
        jų vertė yra interpretavime ir metaforose, kurios, nepriimant jų
        tiesiogiai, gali suteikti didelės vertės psichologiniame ir dvasiniame
        (jeigu tai yra aktualu) augime.
      </p>
      <h3>Savirefleksija</h3>
      <p>O su kokiu požiūriu mes sutinkame sąmokslo teorijų idėjas?</p>
      <p>
        Su humoru? Laikome jas pavojingomis? Ar iškart priimame kaip tiesą? Ką
        tai pasako apie mus?
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
