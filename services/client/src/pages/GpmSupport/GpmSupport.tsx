import React from 'react';
import gpm1 from '../../assets/gpm1.png';
import gpm2 from '../../assets/gpm2.png';
import gpm3 from '../../assets/gpm3.png';
import gpm4 from '../../assets/gpm4.png';
import gpm5 from '../../assets/gpm5.png';

export const GpmSupport: React.FC = () => {
  //TODO uzdet link
  return (
    <div className='page-content'>
      <p>&quot;Jau Dabar&quot; 1,2% GPM parama:</p>
      <li>
        Spauskite nuorodą{' '}
        <a
          href='https://deklaravimas.vmi.lt/'
          target='_blank'
          rel='noopener noreferrer'
        >
          deklaravimas.vmi.lt
        </a>
      </li>
      <img src={gpm1} className='article-image' />
      <li>Prisijunkite per savo banką arba el. parašą</li>
      <li>Paspauskite laukelį *PILDYTI FORMĄ*</li>
      <img src={gpm2} className='article-image' />
      <li>Paspauskite laukelį *PRAŠYMAS SKIRTI PARAMĄ*</li>
      <img src={gpm3} className='article-image' />
      <li>
        Laukelyje *FORMA ELEKTRONINIAM PILDYMUI* paspauskite gaublio ikoną -
        taip galėsite užpildyti formą tiesiogiai portale
      </li>
      <img src={gpm4} className='article-image' />
      <li>Atsidarius dokumentui, suveskite asmeninę informaciją</li>
      <img src={gpm5} className='article-image' />
      <li>*5 MOKESTINIS LAIKOTARPIS* laukelyje įrašykite 2020 metus</li>
      <li>Pažymėkite varnele *6S Mokesčio dalį skiriu paramos gavėjams*</li>
      <li>*E1 Gavėjo tipas* laukelyje įrašykite skaičių 2 (paramos gavėjas)</li>
      <li>
        *E2 Gavėjo identifikacinis numeris (kodas)* laukelyje suveskite ‘Jau
        Dabar’ identifikacinį numerį, kuris yra: 305708910
      </li>
      <li>
        *E3 Mokesčio dalies paskirtis* laukelyje įrašykite JAU DABAR VEIKLAI
      </li>
      <li>
        *E4 Mokesčio dalies dydis (procentais)* laukelyje įrašykite skiriamą
        paramos dalį: 1,2%
      </li>
      <li>
        *E5 Mokesčio dalį skiriu iki mokestinio laikotarpio* laukelyje
        pasirinkite iki kelintų metų norite šią paramą skirti
      </li>
      <li>
        Viską užpildžius paspauskite viršuje mygtuką *PATEIKTI DEKLARACIJĄ*
      </li>
    </div>
  );
};
