import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayouts;
