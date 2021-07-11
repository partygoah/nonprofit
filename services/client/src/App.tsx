import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SupportUsPage } from './pages/SupportUsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { Article } from './pages/Article';
import { Article2 } from './pages/Article2';
import { Article3 } from './pages/Article3';
import { Article4 } from './pages/Article4';
import { Article5 } from './pages/Article5';
import { Article6 } from './pages/Article6';
import { Article7 } from './pages/Article7';
import { Article8 } from './pages/Article8';
import { Article9 } from './pages/Article9';
import { Article10 } from './pages/Article10';
import { Article11 } from './pages/Article11';
import { Article12 } from './pages/Article12';
import { Article13 } from './pages/Article13';
import { Article14 } from './pages/Article14';

import ScrollToTop from './ScrollToTop';

import Background from './assets/background.png';

export const App: React.FC = () => {
  return (
    <Container
      className='app'
      style={{
        backgroundImage: `url(${Background})`,
        paddingLeft: '0px',
        paddingRight: '0px',
      }}
    >
      {/* <Header tabs={appRoutes} /> */}
      <Header />
      <hr style={{ marginBlockStart: '0px', marginBlockEnd: '0px' }} />
      <ScrollToTop />
      <Switch>
        {/* <Route exact path='/' render={() => <HomePage />} /> */}
        <Route exact path='/' render={() => <ArticlesPage />} />
        <Route exact path='/apie-mus' render={() => <AboutUsPage />} />
        <Route exact path='/susisiek' render={() => <ContactUsPage />} />
        {/* <Route path='/parama' render={(props) => <SupportUsPage { ...props }/>} /> */}
        <Route path='/parama' render={() => <SupportUsPage />} />
        <Route
          path='/straipsniai/psichika-ir-jos-reiksme-1'
          render={() => <Article />}
        />
        <Route path='/straipsniai/pagalba' render={() => <Article2 />} />
        <Route
          path='/straipsniai/psichika-ir-jos-reiksme-2'
          render={() => <Article3 />}
        />
        <Route
          path='/straipsniai/psichika-ir-jos-reiksme-3'
          render={() => <Article4 />}
        />
        <Route
          path='/straipsniai/psichologiniai-patarimai-ir-asmenine-atsakomybe'
          render={() => <Article5 />}
        />
        <Route
          path='/straipsniai/psichoterapijos-galia'
          render={() => <Article6 />}
        />
        <Route
          path='/straipsniai/gelmiu-psichologija'
          render={() => <Article7 />}
        />
        <Route
          path='/straipsniai/praktiku-prasme-asmeniniame-tobulejime-1'
          render={() => <Article8 />}
        />
        <Route path='/straipsniai/pasamone-1' render={() => <Article9 />} />
        <Route
          path='/straipsniai/samokslo-teorijos-1'
          render={() => <Article10 />}
        />
        <Route
          path='/straipsniai/samokslo-teorijos-2'
          render={() => <Article11 />}
        />
        <Route
          path='/straipsniai/samokslo-teorijos-3'
          render={() => <Article12 />}
        />
        <Route
          path='/straipsniai/audio-pokalbis-su-LRT-06-24'
          render={() => <Article13 />}
        />
        <Route path='/straipsniai/pasamone-2' render={() => <Article14 />} />
      </Switch>
      {/* <Switch>
          <Link to='/'>
            <img src={logo} alt='headerLogo' className='logo' />
          </Link>
          {appRoutes.map((route) => (
            <Route exact path={route.path} key={route.name}>
              {route.page}
            </Route>
          ))}
        </Switch> */}
      <hr style={{ marginBlockStart: '0px', marginBlockEnd: '0px' }} />
      <Footer />
    </Container>
  );
};
