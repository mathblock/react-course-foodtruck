
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    cartItemsCount: number;
    favoritesCount: number;
}

const Layout = ({ cartItemsCount, favoritesCount }: LayoutProps) => {
    return (
        <div className="app">
            <Header cartItemsCount={cartItemsCount} favoritesCount={favoritesCount} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
