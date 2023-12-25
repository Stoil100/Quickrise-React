import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/navigation';
import Footer from './Footer/footer';

export const RootLayout = () => {
    return (
        <>
          <Navigation />
            <Outlet />
          <Footer/>
        </>
    );
};
