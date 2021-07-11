import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Team } from '../components/Team';
import jau_dabar_gele from '../assets/jau_dabar_gele.png';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className='page-content'>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='reasons'
            id='reasonsAccordionSummary'
            className='accordion-summary'
          >
            Kodėl „Jau Dabar”?
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p className='accordion-paragraph'>
              <div
                style={{
                  textAlign: 'center',
                  // justifyItems: 'center',
                  // verticalAlign: 'middle',
                }}
              >
                <img
                  src={jau_dabar_gele}
                  alt='flower'
                  className='article-image'
                  style={{ maxHeight: '40vh' }}
                />
              </div>
              Šių dienų statistika demaskuoja skaudžią tiesą – Lietuvos
              gyventojų emocinė sveikata yra trapi, dažnai apleista ir
              stigmatizuota. Prieš trejus metus Pasaulio sveikatos organizacijos
              paskelbti duomenys atskleidė, kad pirmaujame pagal{' '}
              <a
                href='https://worldpopulationreview.com/country-rankings/suicide-rate-by-country'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
              >
                savižudybių skaičių
              </a>
              . Be to, spręsdami problemas ar jų vengdami dažnai griebiamės ir
              specialistų nepatvirtintų priemonių – alkoholio. 2016 metais
              Lietuva buvo antra pasaulyje pagal suvartojamo{' '}
              <a
                href='https://ourworldindata.org/grapher/total-alcohol-consumption-per-capita-litres-of-pure-alcohol?time=2015'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
              >
                alkoholio kiekį
              </a>
              . Vis dar didelė, atvira žaizda šalyje – smurtas. Anot 2017 m.
              Lietuvos Statistikos departamento duomenų, šalyje kasdien
              užfiksuojama{' '}
              <a
                href='https://osp.stat.gov.lt/infografikas30'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
              >
                30 smurto artimoje aplinkoje atvejų
              </a>
              .
            </p>
            <p className='accordion-paragraph'>
              Aukšti savižudybių, priklausomybių ir emocinį nestabilumą
              reprezentuojantys skaičiai parodo galimas spragas mūsų švietimo,
              sveikatos ar net ekonomikos sistemose. Mūsų, „Jau Dabar“ komandos,
              tikslas yra padėti žmonėms ar net valstybei emocinės sveikatos
              gerinimo kelyje.
            </p>
            <p className='accordion-paragraph'>
              Tvirtai tikime, kad minėtos problemos yra sisteminės. Mūsų
              nuomone, efektyviausias būdas spręsti tokias, seniai
              įsišaknijusias problemas, yra atsigręžiant į pradinį tašką –
              žmogaus psichiką. Švietimas yra įrankis, kuriuo naudodamiesi
              tikimės padidinti Lietuvos gyventojų norą nuosekliai rūpintis savo
              psichika, ir taip prisidėti prie minėtų problemų prevencijos.
            </p>
            <p className='accordion-paragraph'>
              Vertiname Vyriausybės, kitų organizacijų ir aktyvistų pastangas,
              tad stengiamės dalintis kuo unikalesne informacija ir žiniomis.
              Nesiekiame būti geriausiais ar konkuruoti. Priešingai – norime
              koja kojon dirbti su kitais, siekiančiais pagerinti visuomenės
              emocinę sveikatą ir padėti žmonėms.
            </p>
            <p className='accordion-paragraph'>
              Informacija šiame puslapyje yra žvilgsnis iš{' '}
              <a
                href='https://www.vle.lt/straipsnis/gelmiu-psichologija/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
              >
                gelmių psichologijos
              </a>{' '}
              perspektyvos iš{' '}
              <a
                href='https://www.vle.lt/straipsnis/gelmiu-psichologija/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
              >
                Jungistinės psichologijos
              </a>{' '}
              pakraipos. Žinoma, čia rasite ir kitų psichologijos mokyklų idėjų
              – mes neprioretizuojame dogmų, greičiau teikiame pirmenybę
              veiksmingiems ir ilgalaikiams sprendimo būdams.
            </p>
            <p className='accordion-paragraph'>
              Dalindamiesi gelmių psichologijos įžvalgomis mes nesiekiame
              sumenkinti neuromokslų, kognityvinės psichologijos ar
              psichiatrijos įžvalgų. Priešingai, norime, kad žmonės turėtų
              galimybę pažinti visas įmanomas teorijas ir požiūrius, susijusius
              su jų psichika. Siekiame, kad žmonės turėtų galimybę rinktis iš
              įvairių metodų ir skirtingų prieigos būdų tam, kad pažintų savo
              psichiką bei atrastų sau tinkamiausias mokyklas ar praktikas.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='mission'
            id='missionAccordionSummary'
            className='accordion-summary'
          >
            Misija
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            Mūsų misija yra skleisti informaciją, kuri ne tik įkvėptų, bet ir
            padėtų Lietuvos gyventojams rūpintis psichikos sveikata. Norime, kad
            gelmių psichologijos idėjos, galinčios pagerinti žmonių gyvenimo
            kokybę, būtų pasiekiamos kiekvienam lietuviui.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='content'
            id='contentAccordionSummary'
            className='accordion-summary'
          >
            Veikla
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p>
              Šiame puslapyje dalinsimės informacija apie analitinę
              psichologiją, savipagalbą, psichikos sveikatą, emocijų ir kūrybos
              svarbą, priklausomybes, psichoterapiją, teorines ir praktines
              žinias apie psichiką, protą ir jų ryšį su kūnu bei fizine
              sveikata.
            </p>
            <p>
              Norime paminėti, kad psichinių procesų detalės yra aprašomos
              skirtingai, priklausomai nuo gelmių psichologijos pakraipos.
              Kitaip tariant, skirtingos pakraipos tuos pačius procesus gali
              vadinti skirtingais terminais. Nors mūsų straipsniuose bus dažniau
              naudojami Jungistinės pakraipos terminai, pavyzdžiai ir įžvalgos,
              tai nereiškia, kad mūsų straipsniai būtinai sutampa su visų kitų
              Jungistinės pakraipos atstovų nuomonėmis. Tai taip pat nereiškia,
              kad mes atstovaujame Jungistinei psichologijai ar bet kokiai kitai
              psichologijos pakraipai; mes tiesiog naudojame šios, arba kitų
              teorinių krypčių, įžvalgas kaip įrankį.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='vission'
            id='vissionAccordionSummary'
            className='accordion-summary'
          >
            Vizija
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            Ateityje tikimės, jog mūsų organizacija taps vienu esminių elementų
            Lietuvos visuomenės psichologinės sveikatos gerinimo mechanizme ir
            kovos dėl psichologinių žinių bei savipagalbos paskaitų įtraukimo į
            švietimo sistemą. Svajojame apie valstybę, kurioje rūpinimasis
            asmeniniu tobulėjimu ir psichologine gerove būtų savaime suprantamai
            svarbus ir visiems lengvai pasiekiamas.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='values'
            id='valuesAccordionSummary'
            className='accordion-summary'
          >
            Vertybės
          </AccordionSummary>
          <AccordionDetails
            className='accordion-details'
            style={{ alignItems: 'center' }}
          >
            {/* Mūsų organizacijos vertybės:*/}
            <div className='values-list'>
              <div className='tooltip value'>
                Altruizmas
                <span className='tooltiptext'>
                  Organizacijos tikslas – visiškai altruistiškas. Organizacijos
                  veiksmai orientuoti tik ir tik į visuomenės gerbūvio gerinimą,
                  o ne komandos narių asmeninę sėkmę ar piniginius
                  apdovanojimus.
                </span>
              </div>
              <div className='tooltip value'>
                Sąžiningumas
                <span className='tooltiptext'>
                  Tai yra organizacijos pamatas. Skaidrumas tiek komandoje, tiek
                  su visuomene, valstybe ir kitomis organizacijomis. Mums svarbu
                  ne konkuruoti, o bendradarbiauti su kitais visuomenės emocinei
                  sveikatai svarbiais, patikimais informacijos šaltiniais.
                </span>
              </div>
              <div className='tooltip value'>
                Etinių principų laikymasis
                <span className='tooltiptext'>
                  Visų išvardytų vertybių laikymasis ir prioritetizavimas.
                  Aukšta darbo kokybės, komunikacijos etika. Pagarba tiek
                  komandos, tiek kitiems visuomenės nariams, taip pat – kitaip
                  manantiems ar net mums prieštaraujantiems
                </span>
              </div>
              <div className='tooltip value'>
                Holizmas
                <span className='tooltiptext'>
                  Vykdydami misiją atsižvelgiame į sistemos visumą ir
                  neizoliuojame atskirų jos dalių. Turiniu siekiame holistinio
                  požiūrio į žmogų ir pasaulį – nesusiauriname visko iki atskirų
                  aspektų, žiūrime į ryšius ir sąveikas tarp skirtingų sistemos
                  dalių.
                </span>
              </div>
            </div>
            <div className='values-list'>
              <div className='tooltip value'>
                Tvarumas
                <span className='tooltiptext'>
                  Pateikiama informacija yra orientuota į tvarius pasirinkimus,
                  nes mes siekiame prisidėti prie ilgalaikių pokyčių.
                  Nepropaguojame trumpalaikių sprendimų būdų, netvarių praktikų.
                  Taip pat prioretizuojame ekologiškai tvarius sprendimus.
                </span>
              </div>
              <div className='tooltip value'>
                Perspektyvizmas
                <span className='tooltiptext'>
                  Atpažįstame, kad skirtingas mokslo pakraipas ir pažinimo
                  modelius kiekvienas skaitantis supranta savitai. Kartu
                  atpažįstame savo perspektyvą ir atsižvelgiame į galimą
                  šališkumą, tačiau neatstovaujame vienos dogmos ar tiesos.
                </span>
              </div>
              <div className='tooltip value'>
                Nuoseklumas
                <span className='tooltiptext'>
                  Esame nuoseklūs savo veikloje – kada ir kokias idėjas
                  pristatome. Savo misiją siekiame vykdyti nuosekliai ir
                  sistemingai.
                </span>
              </div>
              <div className='tooltip value'>
                Nepriklausomumas
                <span className='tooltiptext'>
                  Mūsų organizacija nepriklauso nuo valstybės ar kitų
                  organizacijų. Taip pat esame intelektualiai nepriklausomi nuo
                  rėmėjų.
                </span>
              </div>
              <div className='tooltip value'>
                Strategiškumas
                <span className='tooltiptext'>
                  Strategiškai planuojame veiklą ir turinį. Tai reiškia, kad
                  planuojame, apie ką kalbėsime ir kokią įtaką tai ilgainiui
                  padarys visuomenei.
                </span>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='team'
            id='teamAccordionSummary'
            className='accordion-summary'
          >
            Komanda
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <Team />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='history'
            id='historyAccordionSummary'
            className='accordion-summary'
          >
            Mūsų istorija
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <p className='accordion-paragraph'>
              Susipažinę 2015 metais tapome artimais draugais. Marius visuomet
              svajojo apie projektą su draugais, ir prisiminęs, kad esu minėjusi
              apie norą dirbti ne pelno siekiančioje organizacijoje, karantino
              metu pasiūlė pabandyti ką nors sukurti. Man tai buvo tarsi dovana
              – buvau ką tik baigusi magistro studijas, sėdėjau su dideliu
              bagažu žinių ir noru jas kažkur panaudoti ir pritaikyti. Tačiau
              nesugalvojau, kaip tai daryti, ir žinojau, kad viena to
              nesugebėsiu. Taip gimė mūsų projektas: buvo sukurta platforma,
              kurioje galiu dalintis įvairiomis įžvalgomis, informacija ir
              atradimais su tikslu prisidėti prie šviesesnės Lietuvos ateities.
            </p>
            <p className='accordion-paragraph'>
              Viliamės, kad pavyks ne tiesiog sausai dalintis informacija, bet
              ir suteikti žmonėms sąmoningumo, kad jie susimąstytų, imtųsi
              veiksmų ar net klausti savęs klausimų, kurių niekada nėra klausę,
              galvoti apie dalykus, apie kuriuos dar nėra susimąstę. Jeigu
              prisidėsime prie bent vieno žmogaus sąmoningumo, projektas bus
              vertas kiekvienos prie jo praleistos minutės.
            </p>
            <p className='accordion-paragraph'>
              Noriu padėkoti mūsų savanorėms už norą padėti ir prisidėti prie
              projekto vystymo. O dar didesnis ačiū Viliui Gudžiūnui, padėjusiam
              pastatyti šio projekto pamatus. Be jo šio projekto nebūtų.
            </p>
            <p className='authors-name'> – Dominyka</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
