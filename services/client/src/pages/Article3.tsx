import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { Disclaimer } from '../components/Disclaimer';
import { AuthorDialog } from '../components/AuthorDialog';

import Article3Card from '../assets/Article3Card.jpg';
import Article3Pic2 from '../assets/Article3Pic2.jpg';
import Article4Card from '../assets/Article4Card.jpg';
import Article1Card from '../assets/Article1Card.jpg';

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

export const Article3: React.FC = () => {
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
        <h2>101 priežastis, kodėl nereikia ignoruoti savo vidinio balso</h2>
      ) : (
        <h1>101 priežastis, kodėl nereikia ignoruoti savo vidinio balso</h1>
      )}
      <h4>Psichika ir Jos Reikšmė – II dalis</h4>
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
        2018 metų duomenys rodo, kad tik 17 proc. Lietuvos gyventojų savo
        sveikatą tikrinasi profilaktiškai. Dažniausiai į gydytojų kabinetus
        pasibeldžiame jau sunegalavę ar išlaukę iki paskutinės minutės, kol jau
        patys susitvarkyti nebegalime. Esame linkę imtis veikmų, kai stipriau
        nesugaluojame. Deja, dažnai, kai jau būna per vėlu.
      </p>
      <p>
        Tiesa, šie duomenys atspindi mūsų susirūpinimą fizine sveikata. Deja,
        psichologiniai negalavimai dažnai ignoruojami dėl Lietuvoje esančios
        stigmos, ypač mažesniuose miesteliuose. Nors galima pastebėti, kaip
        situacija po truputį gerėja, stigma vis dar yra. Tad norime to ar
        nenorime, ji daro įtaką mūsų sprendimams.
      </p>
      <p>
        Šiandien nagrinėsime klausimą ar tam, kad pradėtume rūpintis savo
        psichika ir nuspręstume skirti psichologinei sveikatai dėmesio reikia
        laukti negalavimų ar simptomų. Taip pat atsakysime į klausimus, kurie
        galbūt padės apsispręsti, ar norime skirti laiko ir pastangų pažinti
        save giliau.
      </p>
      <h3>Kada jau tikrai reikėtų pradėti kažką daryti?</h3>
      <div style={{ textAlign: 'center' }}>
        <img src={Article3Card} alt='image' className='article-image' />
      </div>
      <p>
        Tam, jog nuspręstume pradėti darbą su savimi ir aktyviai rūpintis savo
        psichikos sveikata, tikrai nereikia laukti, kol išryškės gyvenimą
        apsunkinantys simptomai. Juk pagrindiniai principai, kurių reikia
        laikytis, norint pasirūpinti kūnu yra reguliarus sportas, mityba ir
        gebėjimas jausti ar atpažinti pakitimus, jog būtų galima laiku kreiptis
        pagalbos. Tas pats galioja ir psichikos sveikatai, kurios gerovė
        priklauso nuo savistabos įgūdžių ir bazinių psichologijos žinių.
        Savistabos įgūdžiai įgaunami juos praktikuojant, panašiai kaip raumenys
        užauginami sportuojant.
      </p>
      <p>
        <b>Savęs pažinimas yra naudingas visiems</b>, nes visuomet yra kur
        tobulėti, tad pagrindinis motyvas gali būti tiesiog noras pagerinti
        gyvenimo kokybę ar padidinti komfortą. Psichika ir psichikos sveikata
        pradžioje gali pasirodyti kaip didelis ir sunkiai aprėpiamas dalykas,
        tad pradėti galima nuo pabandymo įsivardinti konkrečias vietas ar dalis,
        kuriose norėtųsi pokyčio.
      </p>
      <p>
        Galbūt šie klausimai padės jums apsispręsti, ar norite pažinti save
        giliau ir galbūt patobulėti toje srityje, kurioje atsakėte ‘taip’:
      </p>
      <li>Ar esu patenkintas savo gyvenimu, ar man kažko trūksta? </li>
      <li>Ar turiu problemų santykiuose (su šeima, draugais, poroje)?</li>
      <li>Ar esu linkęs stipriai nusivilti savo iškeltais lūkesčiais? </li>
      <li>Ar nesugebu atsekti, kaip staiga pasikeičia mano nuotaikos?</li>
      <li>
        Ar pajutęs jausmą, kuris man kelia diskomfortą, jį vertinu neigiamai ir
        tučtuojau stengiuosi jo atsikratyti?
      </li>
      <li>Ar man gyvenime trūksta prasmės?</li>
      <li>Ar nemoku išbūti su jausmais ir esu linkęs nuo jų bėgti?</li>
      <li>Ar neturiu saiko jausmo?</li>
      <li>Ar elgiuosi impulsyviai ir po to dėl to gailiuosi?</li>
      <li>Ar nemoku atsiprašyti / pripažinti esantis neteisus?</li>
      <li>Ar bijau atrodyti silpnas?</li>
      <li>Ar kankina klausimas, jog nežinau, kas aš esu?</li>
      <li>Ar nežinau, ko aš noriu?</li>
      <li>Ar negatyviai vertinu savo kūną?</li>
      <li>Ar turiu sunkumų santykyje su maistu?</li>
      <li>Ar pastoviai kritikuoju tai, ką matau veidrodyje?</li>
      <li>Ar sunku susikaupti?</li>
      <li>Ar bijau/nemoku būti vienas?</li>
      <li>Ar man atrodo, kad mane nuolat nori kas nors apgauti?</li>
      <li>Ar esu nepatenkintas savimi kokioje nors gyvenimo srityje?</li>
      <li>Ar mano meilė sau priklauso nuo to, kaip atrodau?</li>
      <li>Ar mano meilė sau priklauso nuo to, kiek daug ar mažai padarau?</li>
      <li>Ar esu perfekcionistas?</li>
      <li>Ar esu linkęs dalykus per daug permąstyti (angl. overthinking)?</li>
      <li>Ar nesugebu įvardinti kylančių jausmų?</li>
      <li>Ar ištikus netikėtumams pasimetu ir puolu į paniką?</li>
      <li>Ar sunku prisiimti atsakomybę?</li>
      <li>Ar esu linkęs prisiimti atsakomybę už kitus?</li>
      <li>Ar neturiu ilgalaikių tikslų arba svajonių?</li>
      <li>Ar esu linkęs aukotis dėl kitų?</li>
      <li>Ar esu emociškai neprieinamas?</li>
      <li>Ar man sunku pasitikėti žmonėmis ar institucijomis?</li>
      <li>Ar esu linkęs meluoti?</li>
      <li>Ar esu linkęs pulti į kraštutinumus?</li>
      <li>
        Ar gyvenu su mintimi, kad atsitikus kokiam nors išoriniam dalykui
        jausiuosi geriau ir taip vengiu žvelgti vidun? (pavyzdžiui, kai
        išsikraustysiu iš čia bus gerai arba kai išeisiu iš darbo viskas
        susitvarkys)
      </li>
      <li>Ar savyje laikau daug paslapčių?</li>
      <li>Ar mano tinginystė trukdo man siekti tikslų?</li>
      <li>Ar nemoku tvarkytis su pinigais?</li>
      <li>Ar gyvenu fantazijų pasaulyje ir sunku būti čia ir dabar?</li>
      <li>
        Ar gėda ir kaltė trukdo man gyventi tokį gyvenimą, kokio norėčiau?
      </li>
      <li>Ar man sunku žmonėms pasakyti ne, kai to noriu?</li>
      <li>Ar man sunku nubrėžti ribas?</li>
      <li>
        Ar mano balsas galvoje, kai kalbuosi su savimi, yra kritiškas ir
        nedraugiškas?
      </li>

      <p>
        Jeigu yra klausimų, į kuriuos atsakėte teigiamai, gilesnis savęs
        pažinimas galėtų padėti atrasti priežastis ir taip galbūt prisidėti prie
        geresnės gyvenimo kokybės. Tai nėra visi įmanomi klausimai, susiję su
        žmogaus elgesiu ar psichologija. Tačiau tai yra klausimai, kurie gali
        padėti susiaurinti veiklos sritis, veikti tarsi kelrodis, ir parodyti,
        jog galbūt yra, kur padirbėti, siekiant pagerinti savo psichikos
        sveikatą.
      </p>
      <p>
        <b>Neišsigąskite, jeigu į daug klausimų atsakėte teigiamai.</b> Tai
        natūralu, o svarbiausia – pakeičiama. Kaip ir minėjome pirmame tekste,
        tai gilesnių procesų simptomai, kurie, paaukojus laiko ir dėmesio, yra
        išsprendžiami. Jūs neprivalote taikstytis su jais visą gyvenimą sakydami
        <span style={{ fontStyle: 'italic' }}>„toks jau aš esu‘‘</span>, jūs
        galite sau padėti.
      </p>
      <p>
        Taip pat svarbu suprasti, kad pirmas padėjimo sau žingsnis taip pat gali
        būti pagalbos prašymas. Jūs neprivalote to daryti vieni, jeigu tam yra
        galimybė (apie tai daugiau šiame{' '}
        <Link to='/straipsniai/pagalba'>straipsnyje</Link>).
      </p>
      <p>
        Toliau esantys klausimai galimai nurodo į gilesnes problemas, galinčias
        signalizuoti apie rimtus psichologinius sutrikimus. Tad rekomenduojame į
        juos atsakyti labai rimtai ir nuoširdžiai.
      </p>

      <li>Ar mane pastoviai kankina nemiga arba miegu per daug?</li>
      <li>
        Ar išbandžiau daug neveiksmingų (arba veiksmingų tik trumpam laikui)
        būdų savo sunkiai būsenai pagerinti ir nebežinau ko imtis?
      </li>
      <li>Ar aš patiriu nevaldomą liūdesį?</li>
      <li>Ar aš patiriu nevaldomą ir gilų vienišumo jausmą?</li>
      <li>
        Ar nerimas ir panikos atakos trukdo man gyventi komfortabilų gyvenimą?
      </li>
      <li>Ar patiriu nesuvaldomus pykčio priepuolius?</li>
      <li>Ar kyla minčių apie savižudybę?</li>
      <li>Ar esu apsėstas savo svorio/išvaizdos? Badauju/persivalgau?</li>
      <li>Ar esu linkęs į savęs žalojimą?</li>
      <li>
        Ar esu linkęs piknaudžiauti medžiagomis, kurios keičia mano būseną?
      </li>
      <li>Ar esu patyręs seksualinę prievartą, fizinį arba emocinį smurtą?</li>
      <li>Ar esu (fiziškai ar emociškai) smurtavęs prieš kitus?</li>
      <li>Ar nekenčiu savęs?</li>
      <li>Ar nekenčiu gyvenimo?</li>
      <li>
        Ar gyvenimą stipriai apsunkina ir netgi gyventi trukdo gilūs
        egzistenciniai klausimai, į kuriuos, atrodo, niekas negalėtų atsakyti,
        net jei ir kreipčiausi pagalbos?
      </li>
      <p>
        Teigiamai atsakius į bent į vieną iš šių klausimų rekomenduojame
        kreiptis specialistų pagalbos. Apie tai daugiau informacijos galite
        rasti <Link to='/straipsniai/pagalba'>čia</Link>.
      </p>
      <h3>Ką man su šia informacija daryti?</h3>
      <p>
        Į šiuos klausimus galite žiūrėti tarsi tai būtų klausimai apie kūno
        sveikatą. Juk jeigu į klausimą „ar neretai jaučiu diskomfortą ar skausmą
        nugaros apačioje?’‘ nedvejojate, kad reikia kreiptis pagalbos, mat
        puikiai suprantate, kad sumažinę diskomfortą dabar galbūt išvengsite
        nugaros problemų ateityje.{' '}
      </p>
      <p>Pradžioje užtenka pastebėti.</p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article3Pic2} alt='mirror' className='article-image' />
      </div>
      <p>
        Neprivalote visko imtis iškart, neprivalote netgi tą pačią akimirką
        imtis veiksmų. Pradėti galite nuo pastebėjimo. Tai galite daryti
        pasiimdami vieną klausimą savaitei ir sąmoningai stengdamiesi pastebėti,
        kur ir kaip dažnai su problema susiduriate.
      </p>
      <p>
        Pavyzdžiui, jeigu į klausimą „ar sunku susikaupti?‘‘ atsakėte teigiamai,
        galite bandyti pasirašyti protinę pastabą kaskart, kai patiriate sunkumų
        susikaupdami. Galbūt vakare galite skirti kelias minutes ir užrašyti
        visas situacijas, kuriose nepavyko sutelkti dėmesio, kai to reikėjo.
        Taip lengviau atskirsite, kiek stipriai tai trukdo siekti ilgalaikių
        tikslų. Identifikavę problemą ir pastebėję jos įtaką kasdieniame
        gyvenime galėsite nuspręsti, ar norite imtis veiksmų tai problemai
        išspręsti. Tą pačią strategiją galima taikyti visiems klausimams.
      </p>
      <p>
        Jeigu teigiamai atsakėte į kelis klausimus, galite bandyti prioretizuoti
        pagal tai, kas jums aktualiausia ir sukelia daugiausiai sunkumų.
        Prioretizavimas gali jus pastūmėti imtis veiksmų (kadangi problema jums
        svarbi), tačiau taip pat gali veikti priešingai („problema tokia didelė
        ir pasireiškia taip dažnai, jog net nenoriu nieko apie tai
        daryti.Tiesiog noriu viską pamiršti‘‘), tad prioretizuodami būkite
        pastabūs.
      </p>
      <p>
        Kitame šios serijos straipsnyje kalbėsime apie tai, ką galime padaryti,
        tam, kad pagerinti savo psichologinę gerovę.
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
            to='/straipsniai/psichika-ir-jos-reiksme-1'
            style={{ textDecoration: 'none' }}
          >
            <CardActionArea>
              {/* <CardHeader className={classes.header} title='2021-03-31' /> */}
              <CardMedia className={classes.media} image={Article1Card} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
                  component='h2'
                  color='textPrimary'
                  align='left'
                >
                  Kodėl svarbu skirti dėmesio savo vidiniam pasauliui?
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  Psichika ir Jos Reikšmė - I dalis
                </Typography>
                <Typography align='right' color='textSecondary'>
                  2021-03-31
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
          Kauno Diena, 2018 m. spalio 31 d. Straipsnis. „Statistika apnuogino
          problemą: kaip prižiūrėti sveikatą lietuviai žino, bet to nedaro‘‘
          Prieiga per internetą: <br />
          <a href='https://m.kauno.diena.lt/naujienos/sveikata/sveikata/statistika-apnuogino-problema-kaip-priziureti-sveikata-lietuviai-zino-bet-nedaro-887156'>
            https://m.kauno.diena.lt/naujienos/sveikata/sveikata/statistika-apnuogino-problema-kaip-priziureti-sveikata-lietuviai-zino-bet-nedaro-887156
          </a>
        </p>
        <p>
          American Psychological Association (2013) ‘Recognizing the Signs and
          Symptoms of Depression’ . Prieiga per internetą: <br />
          <a href='https://www.apa.org/topics/depression/symptoms'>
            https://www.apa.org/topics/depression/symptoms
          </a>
        </p>
        <p>
          Brown, B. (2015) ‘Netobulumo dovana: kaip nustoti gyventi svetimą ir
          pradėti gyventi savo gyvenimą’, vert. Choromanskis, K.. Vilnius:
          Tapati.
        </p>
        <p>
          Layous, K., Chancellor, J. and Lyubomirsky, S. (2014) ‘Positive
          activities as protective factors against mental health conditions’,
          Journal of Abnormal Psychology, 123(1), pp.3-12.
        </p>
        <p>
          Suka, M., Yamauchi, T. and Sugimori, H. (2016). ‘Help-seeking
          intentions for early signs of mental illness and their associated
          factors: comparison across four kinds of health problems’. BMC Public
          Health 16(1). Prieiga per internetą: <br />
          <a href='https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-016-2998-9'>
            https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-016-2998-9
          </a>
        </p>
        <p>
          Woodman, M. (2009) ‘Addiction to perfection’. Brantford, Ont.: W. Ross
          MacDonald School Resource Services Library.
        </p>
      </div>
    </div>
  );
};
