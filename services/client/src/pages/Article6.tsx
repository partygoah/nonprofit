import React from 'react';
import { isMobile } from 'react-device-detect';

import { AuthorDialog } from '../components/AuthorDialog';
import { Disclaimer } from '../components/Disclaimer';

import Article6Card from '../assets/Article6Card.jpg';
import Article6Pic2 from '../assets/Article6Pic2.jpg';
import Article2Card from '../assets/Article2Card.jpg';
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

export const Article6: React.FC = () => {
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
        <h2>Psichoterapija – tik sergantiems: bet ar tikrai?</h2>
      ) : (
        <h1>Psichoterapija – tik sergantiems: bet ar tikrai?</h1>
      )}
      <h4>Psichoterapijos galia</h4>
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
        Žodis psichoterapija neretai skamba kaip baubas, galbūt net galvojame,
        kad tai – laiko švaistymas arba, kad ji reikalinga tik „sergantiems“. Iš
        tikrųjų, psichoterapija yra galingas įrankis, kuriuo naudodamiesi galime
        neįsivaizduojamai pagerinti savo gyvenimo kokybę. Negana to,
        psichoterapija – kaip praktika – atlieka svarbų vaidmenį platesniame,
        visuomenės, kontekste. Šiame straipsnyje pažvelgsime į psichoterapijos
        prasmę iš šių abiejų, mikro ir makro, perspektyvų.
      </p>
      <div style={{ textAlign: 'center' }}>
        <img src={Article6Pic2} alt='image' className='article-image' />
      </div>
      <div style={{ fontSize: 14, fontStyle: 'italic' }}>
        Nuot. aut. Freepik.com
      </div>
      <h3>Psichoterapijos pripažinimas</h3>
      <p>
        Nors gydymo pokalbiu šaknys gali būti atsektos iki XIX a. antrosios
        pusės, kai, beje, jis dar buvo vadinamas „moraliniu gydymu‘‘ (angl.{' '}
        <i>moral treatment</i>), Amerikos Psichologų Asociacija išleido
        rezoliuciją pripažįstančią psichoterapijos naudą ir efektyvumą tik prieš
        devynerius metus. Ši rezoliucija apima ir sintezuoja daugiau nei šimtą
        skirtingų šaltinių apie psichoterapijos praktiką. Šioje ataskaitoje APA
        rašo, kad:
      </p>
      <li>
        Psichoterapijos esmė slypi santykyje tarp kliento ir terapeuto (aut.
        past. galimai būtent dėl to skirtingos giluminės psichoterapijos
        mokyklos neretai turi potencialą duoti panašų rezultatą);
      </li>
      <li>
        Psichoterapijos rezultatai linkę būti ilgalaikiai ir reikalauja mažiau
        papildomo gydymo negu farmakologinis gydymas (gydymas vaistais);
      </li>
      <li>
        Įvairios psichoterapijos formos yra veiksmingos tiek vaikams, tiek
        suaugusiems, tiek vyresnio amžiaus žmonėms;
      </li>
      <li>
        Psichoterapijos rezultatai jaučiami ir matomi ne tik psichoterapijos
        gydymo laikotarpiu bet ir baigus psichoterapiją;
      </li>
      <li>
        Psichoterapija padeda pagerinti kasdienę nuotaiką ir sumažinti ar net
        užkirsti kelią depresijai, ypač klientams su chroniškomis, sunkiomis
        fizinės sveikatos problemomis;
      </li>
      <li>
        Psichoterapija gali padėti adresuoti sunkumus žmonėms, kurių dar pilnai
        nesugeba apsaugoti socialinės priemonės (pavyzdžiui, etninės mažumos ar
        LGBT).
      </li>
      <p>
        Rezoliucijoje taip pat pabrėžiama, kad psichoterapija gali būti
        naudojama:
      </p>
      <li>Simptomams palengvinti;</li>
      <li>Sumažinti simptomatinius epizodus ateityje;</li>
      <li>Asmenybės pokyčiams;</li>
      <li>Gyvenimo kokybei pagerinti;</li>
      <li>
        Pagelbėti adaptuotis ir geriau funkcionuoti darbe, mokymosi įstaigose ar
        santykiuose;
      </li>
      <li>Padidinti tikimybę gyvenime pasirinkti sveikus sprendimus.</li>
      <h3>Ilgalaikė nauda</h3>
      <p>
        Psichoterapijos galia slypi ilgalaikiuose rezultatuose. Kaip minėta
        anksčiau, jos nauda matoma ne tik psichoterapijos laikotarpiu, bet ir
        praėjus ilgam laikui po psichoterapijos užbaigimo.
      </p>
      <p>
        Pavyzdžiui, analitinės psichologijos teorijoje teigiama, kad baigus
        psichoterapiją, jos nauda žmogaus gyvenime bus matoma ir toliau. Atlikti
        moksliniai tyrimai patvirtino šią prielaidą.
      </p>
      <p>
        Tai interpretuojama ir aiškinama per tai, jog analitinė psichoterapija
        (iš esmės, kaip ir kitos giluminės psichoterapijos rūšys) keičia ne tik
        simptomus, bet ir pačios asmenybės struktūrą iš pamatų. Šis pokytis
        padeda lengviau adaptuotis prie įvairių gyvenimo kontekstų (išorinių
        gyvenimo pokyčių, santykių ir panašiai), tačiau reikia laiko, kad ši
        adaptacija būtų aiškiai matoma. Tai yra viena iš priežasčių, kodėl
        tyrimai, vykdomi su tikslu ištirti psichoterapijos efektyvumą, kartais
        trunka net kelerius metus – visuomet reikia padaryti „tęstinumo“
        peržiūrą (kaip pacientas laikosi praėjus n laiko po psichoterapijos
        užbaigimo).
      </p>
      <h3>Psichoterapija ir psichikos sutrikimai</h3>
      <p>
        Psichoterapija yra ypač naudinga žmonėms, sergantiems psichikos
        sutrikimais – depresija, valgymo, nerimo sutrikimais, priklausomybėmis
        ir kita. Dažnai psichoterapija yra vienas iš veiksmingiausių būdų
        (neretai poruojama kartu su farmakologiniu gydymu, ypač gydymo
        pradžioje) ne tik simptomų mažinimui, bet ir ilgalaikių pozityvių
        rezultatų suteikimui. Giluminė psichoterapija turi potencialo prisidėti
        prie visų išvardintų sutrikimų gydymo, ir yra ypač veiksminga tokioms
        depresijos formoms kaip, pavyzdžiui, egzistencinė depresija. Nors
        giluminės psichoterapija mokyklos „kariauja“ su kognityvinės elgesio
        terapijos atstovais, šių terapijų kombinacija kartais gali būti labai
        veiksminga, ypač stipriems psichikos sutrikimams gydyti.
      </p>
      <h3>Ar psichoterapija veiksminga visiems ir visada?</h3>
      <p>
        Jeigu rašytume, kad nėra nė vieno žmogaus, kuris negavo naudos iš
        psichoterapijos, tai būtų melas. Psichoterapija yra vienas iš daugelio
        psichikos sveikatos gerinimo būdų – kiek daug pasaulyje skirtingų
        žmonių, tiek pat ir skirtingų kombinacijų psichikos sveikatai gerinti.
        Ne visi pacientai patiria tokį patį ar tokio paties stiprumo efektą.
      </p>
      <p>
        Anot mokslininkų, tai gali būti susiję su keletu dalykų: paciento
        sutrikimo lygiu, sunkumais psichoterapeuto ir paciento santykiuose ar
        netgi psichoterapeuto nekompetencija paciento situacijai. Įtakos taip
        pat gali turėti psichoterapijos rūšis (ar tai giluminė ilgalaikė
        psichoterapija ar kognityvinė ir elgesio terapija). O didžiausią
        garantiją sėkmingai psichoterapijai duoda paciento tarpasmeniniai
        įgūdžiai, jo noras keistis ir esamų problemų suvokimas.
      </p>
      <h3>Ar psichoterapija turėtų būti aktuali tik kenčiantiems?</h3>
      <p>
        Tikrai ne! Psichoterapija yra naudinga ne tik psichikos sutrikimų
        turintiems žmonėms – ji taip pat turi didelį potencialą pagerinti
        gyvenimo kokybę bet kam, kas yra pasiruošęs pažvelgti giliau į savo
        vidų. Anot Jungo, psichoterapijos tikslas nėra vien pašalinti kančią (t.
        y., tiesiog panaikinti simptomus). Psichoterapija egzistuoja tam, kad
        padėtų žmonėms gyventi pilnavertį gyvenimą – sėkmingai vystytis, augti,
        tobulėti ir, svarbiausia, norėti tai daryti. Psichoterapija taip pat dar
        vadinama sielos gydymu, nes ji nėra tik apie protą ar mąstymą,
        psichoterapija yra apie visą žmogaus vidinį pasaulį ir jo santykį su
        gyvenimu.
      </p>
      <h3>Platesnis kontekstas</h3>
      <div style={{ textAlign: 'center' }}>
        <img src={Article6Card} alt='image' className='article-image' />
      </div>
      <p>
        Iš pirmo žvilgsnio psichoterapija gali atrodyti kaip sfera, susijusi tik
        su individu – atskirta nuo plačiosios visuomenės dalies. Tačiau bandant
        suprasti kokio nors veiksnio prasmę platesniame kontekste svarbu
        atsitraukti nuo individų ir pažvelgti į sociumo visumą.
      </p>
      <p>
        Vien pripažinus psichoterapijos veiksmingumą ir svarbą, sprendžiant
        tokias problemas kaip priklausomybės, polinkis į savižudybes ar
        psichiniai sutrikimai, jau galima suprasti, kokią didelę rolę
        psichoterapijos praktika užima mūsų visuomenėje. Psichoterapijos
        praktika yra tarsi mechanizmas, veikiantis visuomenės užkulisiuose,
        prisidedantis prie visos sistemos gerovės. Ji ne tik padeda žmonėms
        atrasti giliai viduje pasislėpusius talentus ir troškimus, bet ir
        suteikia įgūdžius juos konstruktyviai išreikšti.
      </p>
      <p>
        Jungas ne kartą yra kalbėjęs apie psichoterapijos, kaip praktikos,
        reikšmę valstybei. Jis teigia, kad psichoterapijos tikslas – prisidėti
        prie individų tobulėjimo – sąmoninga visuomenė gali būti sukurta tik
        kuriant sąmoningus individus. Psichoterapija, padėdama žmonėms suprasti
        save, tuo pačiu metu prisideda prie visuomenės, jai dovanodama
        kūrybingų, inovatyvių ir gyvenime augti norinčių individų.
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
      </div>
      <h3>Šaltiniai:</h3>
      <div style={{ wordWrap: 'break-word', fontSize: 18 }}>
        <p>
          American Psychological Association (2012){' '}
          <i>‘Recognition of Psychotherapy Effectiveness’</i>, resolution
          report. Prieiga per internetą: <br />
          <a
            href='https://www.apa.org/about/policy/resolution-psychotherapy'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.apa.org/about/policy/resolution-psychotherapy
          </a>
        </p>
        <p>
          Feltham, C. (2002){' '}
          <i>‘What&apos;s the good of counselling & psychotherapy?’</i>. London:
          SAGE Publications.
        </p>
        <p>
          Haverkampf, CJ. (2017){' '}
          <i>
            ‘CBT and Psychodynamic Psychotherapy - A Comparison’, Journal of
            Psychiatry Psychotherapy Communication
          </i>
          , 6(4) pp.61-67
        </p>
        <p>
          Gaskin, C. (2014){' '}
          <i>
            ‘The Effectiveness of Psychodynamic Psychotherapy: A Systematic
            Review of Recent International and Australian Research’,
            Psychotherapy and Counselling Journal of Australia, vol. 2, no.1
          </i>
          Prieiga per internetą: <br />
          <a
            href='https://pacja.org.au/2014/07/the-effectiveness-of-psychodynamic-psychotherapy-a-systematic-review-of-recent-international-and-australian-research/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://pacja.org.au/2014/07/the-effectiveness-of-psychodynamic-psychotherapy-a-systematic-review-of-recent-international-and-australian-research/
          </a>
        </p>
        <p>
          Jung, C.G. (1966) <i>‘Some Aspects of Modern Psychotherapy’</i> from{' '}
          <i>‘The Practice of Psychotherapy’</i>, vol.16 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Jung, C.G. (1966) <i>‘The Aims of Psychotherapy’</i> from{' '}
          <i>‘The Practice of Psychotherapy’</i>, vol.16 of{' '}
          <i>‘The Collected Works of C.G.Jung’</i>. London: Routledge & Kegan
          Paul; Princeton, New Jersey: Princeton University Press.
        </p>
        <p>
          Norcross, J. (2011)
          <i>‘History of psychotherapy’</i>. Washington: American Psychological
          Association.
        </p>
        <p>
          Shedler, J. (2010){' '}
          <i>
            ‘The efficacy of psychodynamic psychotherapy’, American Psychologist
          </i>
          , 65(2), pp.98-109. Prieiga per internetą: <br />
          <a
            href='https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf '
            target='_blank'
            rel='noopener noreferrer'
          >
            https://jonathanshedler.com/PDFs/Shedler%20(2010)%20Efficacy%20of%20Psychodynamic%20Psychotherapy.pdf
          </a>
        </p>
      </div>
    </div>
  );
};
