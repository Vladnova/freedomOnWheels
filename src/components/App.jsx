import MainLayouts from 'layouts/MainLayouts';
import Adverts from 'pages/Adverts';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Adverts />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  );
};
