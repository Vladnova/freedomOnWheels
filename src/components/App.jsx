import MainLayouts from 'layouts/MainLayouts';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import NotFoundPage from 'pages/NotFoundPage';

const Adverts = lazy(() => import('../pages/Adverts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <Adverts />
            </Suspense>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
