
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';

const Adverts = lazy(() => import('../pages/Adverts'));
const Home = lazy(() => import('../pages/Home'));
const Favorites = lazy(() => import('../pages/Favorites'));
const MainLayouts = lazy(() => import('../layouts/MainLayouts'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Adverts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
