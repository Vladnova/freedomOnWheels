import MainLayouts from 'layouts/MainLayouts';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';

const Adverts = lazy(() => import('../pages/Adverts'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Adverts />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
