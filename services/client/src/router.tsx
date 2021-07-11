import { RouteModel } from './models/shared';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { SupportUsPage } from './pages/SupportUsPage';

///fixme
export const appRoutes: RouteModel[] = [
  { name: 'Apie mus', path: '/apie-mus', page: AboutUsPage },
  { name: 'Susisiek', path: '/susisiek', page: ContactUsPage },
  { name: 'Parama', path: '/parama', page: SupportUsPage },
];
