import React from 'react';
import { isMobile } from 'react-device-detect';

import { Disclaimer } from '../components/Disclaimer';
import { AuthorDialog } from '../components/AuthorDialog';

import Article2Card from '../assets/Article2Card.jpg';
import Article4Card from '../assets/Article4Card.jpg';
import Article5Card from '../assets/Article5Card.jpg';
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

export const Article2: React.FC = () => {
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
      {isMobile ? (
        <h2>Pirmas žingsnis – nuspręsti kreiptis pagalbos. O kas toliau?</h2>
      ) : (
        <h1>Pirmas žingsnis – nuspręsti kreiptis pagalbos. O kas toliau?</h1>
      )}
      <p style={{ fontWeight: 'bold' }}>
        Psichologas, psichoterapeutas, psichiatras – įprastai žmonėms tai skamba
        kaip vienas ir tas pats dalykas. Jei reikėtų tiksliai įvardinti, kuo
        skiriasi šie specialistai, pasimestų ne vienas. Tad šiandien kviečiame
        kartą ir visiems laikams išsiaiškinti, kuo skiriasi šie specialistai. Ir
        ne tik – kartu papasakosime, kuo skiriasi giluminė psichoterapija ir
        kognityvinė elgesio terapija, ir ką daryti nusprendus kreiptis pagalbos.
      </p>
      <h3>Nuo ko pradėti?</h3>
      <p>
        Pirmas žingsnis, kurį jau padarėme, – pripažinome sau, kad mūsų
        problemai išspręsti mūsų pačių įžvalgų ar jėgų nepakanka ir nusprendėme
        kreiptis pagalbos. Kreiptis galime pas psichologą, psichoterapeutą ar
        psichiatrą.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article2Card} alt='image' className='article-image' />
      </div>
      <h3>Tad kuo gi skiriasi psichologai, psichiatrai ir psichoterapeutai?</h3>
      <p>
        <b>Psichologai</b> turi būti įgiję nemedicininį psichologijos bakalauro
        ir magistro laipsnį. Psichologai gali konsultuoti, padėti įvertinti
        problemą ir rasti sprendimo būdus. Psichologas, neįgavęs papildomo
        išsilavinimo skirto psichoterapijai, psichoterapijos paslaugų teikti
        negali.
      </p>
      <p>
        <b>Psichiatrai</b> yra įgiję medicinos išsilavinimą, tad gali ne tik
        diagnozuoti, bet ir išrašyti vaistus. Iš{' '}
        <a
          href='https://www.vle.lt/straipsnis/gelmiu-psichologija/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          gelmių psichologijos
        </a>{' '}
        perspektyvos, „gydymas vaistais‘‘ dažnai būna tik simptomų paslėpimas, o
        norint iš tikrųjų išspręsti problemą, turėtų būti taikoma
        psichoterapija. Tačiau tai jokiais būdais nereiškia, kad vaistai yra
        nenaudingi. Strategiškai paskyrus vaistus (kartais vaistai yra tiesiog
        būtini, ypač gydymo pradžioje, nes simptomai gali būti per stiprūs, kad
        pavyktų sėkmingai dirbti su pacientu) galima gauti didelės naudos ir
        ženkliai palengvinti gydymo eigą.
      </p>
      <p>
        <b>Psichoterapeutai</b> šalia psichologijos bakalauro ir magistro
        laipsnio (arba medicinos išsilavinimo, jeigu tai – psichiatras), turi
        būti baigę podiplomines savo psichoterapijos pakraipos studijas.
        Psichoterapeutai gali ne tik konsultuoti, bet ir teikti ilgalaikes
        psichoterapines paslaugas. Svarbu suprasti, jog podiplominių studijų
        metu specialistai patys privalo pereiti tam tikrą psichoterapijos sesijų
        skaičių (gali svyruoti nuo šimto iki kelių šimtų valandų, priklausomai
        nuo pakraipos), kas nėra įtraukta į psichologijos magistro studijas. Tai
        padeda užtikrinti, kad specialistas bus išsprendęs kiek įmanoma daugiau
        asmeninių problemų, giliau save pažins ir tokiu būdu galės efektyviau
        padėti klientui, nes jau pats bus nuėjęs tam tikrą dalį savęs pažinimo
        kelio.
      </p>
      <h3>Psichiatras, psichologo konsultacija ar pokalbio terapija?</h3>
      <p>
        Jeigu norite giliau pažinti save ir savo asmenybę arba susiduriate su
        kokiais nors gyvenimo sunkumais, kuriems galbūt trūksta tam tikrų
        įgūdžių, galite išbandyti pokalbio terapiją (psichoterapiją arba
        psichologo konsultacijas).
      </p>
      <p>
        Jeigu manote, kad turite stiprių psichinių problemų, simptomai jums
        trukdo kasdieniame gyvenime ar įtariate sau kokį nors psichinį
        sutrikimą, galite ne tik išbandyti pokalbio terapiją arba konsultacijas
        su psichologu, tačiau taip pat galite kreiptis į psichiatrą.
      </p>
      <h3>Pokalbio terapija – ne tik paprastas pokalbis</h3>
      <p>
        Sumanius išbandyti pokalbio terapiją, turite du pasirinkimus – vieną iš
        giluminės psichoterapijos šakų (Lietuvoje lengviausia rasti yra
        psichodinaminę, egzistencinę, Geštalto, Jungistinę), arba kognityvinę
        elgesio terapiją.
      </p>
      <p>
        Kognityvinė elgesio terapija (toliau – KET) yra trumpalaikė (kartais
        gali apsiriboti 6 – 20 susitikimų) ir yra orientuota į strategišką
        minčių ir elgesio keitimą, su tikslu pašalinti simptomus per limituotą
        laiko tarpą.
      </p>
      <p>
        Iš gelmių psichologijos perspektyvos, KET gali pašalinti simptomus,
        tačiau neišsprendžia problemos iš pamatų – problema gali atsinaujinti ir
        pasireikšti per kitokius simptomus. To priežastys, anot gelmių
        psichologijos specialistų, gali būti tai, kad KET neatsižvelgia į
        žmogaus pasąmonę, o koncentruojasi į paviršių. Nors užduotys, kurias
        rekomenduoja KET specialistai, gali būti puikūs savipagalbos ir
        prevencijos būdai, jos neanalizuoja gilesnių žmogaus psichikos
        sluoksnių. Tuo tarpu įrodymai apie giluminės psichoterapijos metodų
        efektyvumą auga. Tyrimai rodo, kad giluminė psichoterapija turi
        ilgalaikį ir gilesnį poveikį nei vien kognityvinė (pažinimo) ar
        bihevioristinė (elgesio) terapijos.
      </p>
      <p>
        Giluminė psichoterapija dažniausiai yra ilgalaikė psichoterapija (nors
        tų pakraipų specialistai taip pat neretai siūlo trumpalaikes
        konsultacijas). Giluminės psichoterapijos šakos yra unikalios tuo, kad
        jos atsižvelgia į pasąmonę ir jos ryšį su sąmone. Šios psichoterapijos
        tikslas yra žvelgti giliau, su tikslu išanalizuoti žmogaus asmenybę iš
        pagrindų. Nors skirtingos giluminės psichoterapijos šakos turi
        skirtingus metodus, dažniausiai viskas priklauso nuo paciento būdo, nes
        paciento pasąmonė neretai yra matoma kaip terapijos eigos vedlė.
      </p>
      <p>
        KET vyksta konfrontacija su pasąmone, o giluminė psichoterapija
        bendradarbiauja su ja. Nors KET ir giluminės psichoterapijos atstovai
        neretai „kariauja‘‘, svarbu suprasti, kad abi pokalbio terapijos šakos
        turi savo unikalią paskirtį. Pavyzdžiui, KET gali būti naudinga gydant
        valgymo sutrikimus ar priklausomybių problemas, kartu sujungus ją su
        gilumine psichoterapija. Taip pacientas išmokomas tam tikrų įgūdžių ir
        supažindinamas su savo mąstymu (KET). Be to, tokiu būdu paliečiami
        gilesni psichikos sluoksniai, iš kurių sutrikimas ir kyla (giluminė
        psichoterapija).{' '}
      </p>
      <h3>Kuo skiriasi psichologo konsultacija nuo psichoterapijos?</h3>
      <p>
        Psichoterapija – ilgalaikis procesas (gali trukti nuo kelių mėnesių iki
        kelių metų), o konsultacijos gali apsiriboti tam tikru susitikimų
        skaičiumi – pavyzdžiui, 20. Psichoterapijoje terapeutas dirba su
        mintimi, kad matys klientą dar daug kartų, tad vis giliau ir giliau
        „kapstysis“ asmenybėje, o per tą laiką bus išsprendžiama ne viena
        problema ir įgyta nemažai naujų įgūdžių. Tad psichoterapija vykdoma su
        tikslu kiek įmanoma giliau pažvelgti į save ir savo asmenybę, o
        konsultacija yra tikslingesnis procesas, labiau fokusuotas į šiuo metu
        patiriamus sunkumus.
      </p>
      <h3>Į ką svarbu atkreipti dėmesį renkantis specialistą:</h3>
      <li>
        Į specialisto išsilavinimą. Kaip anksčiau minėta, psichologas mažiausiai
        turi turėti psichologijos bakalauro ir magistro laipsnį.
        Psichoterapeutas papildomai dar būti baigęs savo psichoterapijos
        pakraipos podiplomines studijas.
      </li>
      <li>
        Į tai, kokiose srityse specialistas specializuojasi. Pavyzdžiui, jeigu
        įtariate, kad turite valgymo sutrikimų, ieškokite specialisto, kuris
        savo aprašyme yra paminėjęs, jog tai yra viena iš jo specializacijos
        sričių.
      </li>
      <li>
        Į konsultacijos laiką. Konsultacija neturėtų trukti trumpiau nei 45–50
        minučių ir ne ilgiau negu valandą.
      </li>
      <li>
        Į patį žmogų. Svarbu dėmesį atkreipti, kaip jaučiatės pasiskaitę apie
        specialistą – ar manote, o gal net jaučiate, kad norėtumėte giliau
        susipažinti su šiuo žmogumi, ir kad jis giliau pažintų jus.
      </li>
      <li>
        Į tai, kokios pakraipos psichoterapiją specialistas praktikuoja.
        Svarbiausia, kad psichoterapeutas būtų aiškiai įvardijęs pagal kokią
        psichoterapinę paradigmą dirba. Tuomet galima pasiskaityti apie tą
        paradigmą, ir apsispręsti, ar manote, kad ji galėtų jums tikti. Nors
        pakraipų metodai skiriasi, visos giluminės terapijos paradigmos turi
        didelį potencialą atskleisti ir padėti atrasti asmenybę iš pamatų.
      </li>
      <li>
        Tiesa, gali būti, kad specialistas, pas kurį apsilankėte, jums netiks.
        Tačiau tai nereiškia, kad jums netinka terapija ir viską reikia mesti.
        Gali būti, kad kol surasite sau tinkamiausią, jums teks išbandyti du ar
        daugiau specialistų ar terapijos rūšių. Šios paieškos – visiškai
        normalios.
      </li>
      <p>
        Finansinis aspektas dažnai gali būti lemiantis, kokios pakraipos
        psichoterapiją pasirinksime. Pavyzdžiui, Jungistinės arba
        transpersonalinės psichoterapijos kainos gali būti didesnės (vien dėl
        to, kad šių specialistų Lietuvoje yra mažiau) negu psichodinaminės ar
        egzistencinės psichoterapijos. Jeigu finansai neleidžia rinktis būtent
        tos pakraipos psichoterapijos, kuria esame susidomėję, nusiminti
        nereikia, nes psichoterapijoje pats svarbiausias aspektas (svarbesnis
        negu metodas, kuriuo naudojamasi), nuo kurio priklauso viso proceso
        sėkmė, yra pats santykis tarp kliento ir psichoterapeuto.
      </p>
      <p>
        Jeigu finansinės galimybės neleidžia pasirinkti specialisto privačiai,
        daugiau informacijos apie nemokamas paslaugas valstybinėse sveikatos
        priežiūros įstaigose galite rasti{' '}
        <a
          href='http://www.psichologusajunga.lt/index.php?p=690&lng=lt'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          čia
        </a>
        .
      </p>
      <h3>Pirmasis susitikimas</h3>
      <p>
        Jeigu pirmasis susitikimas jums kelia nerimą, tai yra visiškai normalu.
        Galite nustebti sužinoję, kad ir psichologas neretai šiek tiek nerimauja
        prieš pirmąjį susitikimą – juk ir jam tai pažintis su nauju žmogumi.
        Tokie jausmai – visiškai natūralūs.
      </p>
      <p>
        Pirmo susitikimo metu gauname galimybę papasakoti apie save, psichologas
        ar psichoterapeutas gali užduoti kiek daugiau klausimų, nei įprasta
        psichoterapijoje. Visa tai daroma, norint sužinoti kuo daugiau
        tikslingesnės informacijos apie žmogų, kad galėtų nuspręsti, ar tikrai
        gali jam padėti.
      </p>
      <p>
        Savo ruožtu ir jūs ne tik galite, bet ir turite atkreipti dėmesį į tai,
        kaip jaučiamės kalbėdami su šiuo žmogumi. Ar jums patinka jo bendravimo
        būdas, tarpusavio atmosfera? O svarbiausia – ar manome, kad galėsite juo
        pasitikėti?
      </p>
      <p>
        Labai svarbu su specialistu būti visiškai atviriems, nors tai padaryti
        ir nelengva, ypač kai žmogų matome pirmą kartą. Tačiau privalome
        prisiminti, kad tik būdami atviri sulauksime būtent mūsų situacijai
        tinkamo atgalinio ryšio ir pagalbos. Tad jeigu ateiname dėl nerimo ar
        depresyvios nuotaikos, bet nesakome, kad piknaudžiaujame narkotinėmis
        medžiagomis, nebūname visiškai atviri, psichoterapijos procesas gali
        pasunkėti.
      </p>
      <p>
        Tačiau prisiminkite – psichologas ar psichoterapeutas neturėtų prašyti
        tučtuojau apsispręsti, ar norite tęsti darbą su jais. Tam turi būti
        duota bent jau porą dienų.
      </p>
      <h3>
        Jeigu jums skubiai reikia emocinio palaikymo, svarstote apie savižudybę
        ar savęs žalojimą skambinkite:
      </h3>
      <div>„Jaunimo linija“ – 8 800 28888</div>
      <div>„Vilties linija“ – 116 123</div>
      <div>„Pagalbos moterims linija“ – 8 800 66366</div>
      <div>„Pagalbos vyrams linija“ (18.00-21.00) - 860411119</div>
      <h3>Susiję straipsniai</h3>
      <div className='articles-list'>
        {' '}
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
          American Psychological Association (2021) APA Dictionary of
          Psychology. Prieiga per internetą: <br />
          <a href='https://dictionary.apa.org/'>https://dictionary.apa.org/</a>
        </p>
        <p>
          American Psychological Association (2021) ‘How to choose a
          psychologist’. Prieiga per internetą: <br />
          <a href='https://www.apa.org/topics/psychotherapy/choose-therapist'>
            https://www.apa.org/topics/psychotherapy/choose-therapist
          </a>
        </p>
        <p>
          Haverkampf, CJ. (2017) ‘CBT and Psychodynamic Psychotherapy - A
          Comparison’, Journal of Psychiatry Psychotherapy Communication, 6(4)
          pp.61-67
        </p>
        <p>
          Pacifica Graduate Institute (2021) ‘What is Depth Psychology? - An
          Introduction’, Pacifica Graduate Institute. Prieiga per internetą:{' '}
          <br />
          <a href='https://www.pacifica.edu/about-pacifica/what-is-depth-psychology/'>
            https://www.pacifica.edu/about-pacifica/what-is-depth-psychology/
          </a>
        </p>
        <p>
          Richards, P., Richards, S. and Dowling, J., (2020) ‘Carl Jung versus
          CBT’ [vaizdo įrašas] Prieiga per internetą: <br />
          <a href='https://www.youtube.com/watch?v=JVUIsYDfBlo&t=4s'>
            https://www.youtube.com/watch?v=JVUIsYDfBlo&t=4s
          </a>
        </p>
      </div>
    </div>
  );
};
