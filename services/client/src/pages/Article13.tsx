import React from 'react';
import { isMobile } from 'react-device-detect';

import { Disclaimer } from '../components/Disclaimer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

import { makeStyles } from '@material-ui/core/styles';
// import PokalbisJaudabar from '../assets/PokalbisJaudabar.WAV';

const useStyles = makeStyles({
  card: {
    maxWidth: 290,
    marginBottom: '30px',
  },
  media: { height: 150 },
  content: { height: '100%' },
});

export const Article13: React.FC = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme({});

  const audio = new Audio('../assets/PokalbisJaudabar.WAV');
  audio.play();
  return (
    <div className='page-content article'>
      <Disclaimer />
      {isMobile ? (
        //  <Typography variant="h3">Responsive h3</Typography>
        <h2>
          „Jau Dabar‘‘ vadovė: „Kaip nuspręsime, kad Lietuvoje apie psichikos
          sveikatą kalbame pakankamai?‘‘
        </h2>
      ) : (
        <h1>
          „Jau Dabar‘‘ vadovė: „Kaip nuspręsime, kad Lietuvoje apie psichikos
          sveikatą kalbame pakankamai?‘‘
        </h1>
      )}
      <h4>Interviu su LRT radiju</h4>
      <p style={{ fontWeight: 'bold' }}>
        Birželio 24 dieną{' '}
        <a
          href='https://www.lrt.lt/mediateka/irasas/2000157339/10-12-maisto-technologe-uzmirsome-labai-daug-valgomu-laukiniu-augalu'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'rgb(120, 211, 253)' }}
        >
          LRT radijo{' '}
        </a>
        bangomis nuaidėjo pirmasis mūsų interviu. Vedėja Karolina Panto kalbino
        „Jau Dabar“ organizacijos bendraįkūrėją ir vadovę Dominyką Bodrije.
        Pokalbio metu pasakojama apie organizacijos susikūrimo istoriją,
        vertybes, misiją ir ateities tikslus. Diskusija palietė ir dabartinius
        Lietuvos poreikius ir spragas psichologinio raštingumo srityje.
      </p>
      <div style={{ padding: '10px' }}></div>
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer
          elevation={1}
          // width='500px'
          variation='primary'
          download={false}
          // loop={loop}
          // spacing={spacing}
          debug={false}
          src='https://drive.google.com/uc?export=download&id=1X_tXyp1VbWRzECKzULxiRxT7JCIM7QJM'
        />
      </ThemeProvider>
      <div style={{ padding: '50px' }}></div>
    </div>
  );
};
