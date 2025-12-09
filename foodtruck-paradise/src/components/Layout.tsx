import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    cartItemsCount: number;
    favoritesCount: number;
    onApplyPromo: (code: string) => boolean;
    isPromoApplied: boolean;
}

const Layout = ({ cartItemsCount, favoritesCount, onApplyPromo, isPromoApplied }: LayoutProps) => {
    return (
        <div className="app">
            <Header
                cartItemsCount={cartItemsCount}
                favoritesCount={favoritesCount}
                onApplyPromo={onApplyPromo}
                isPromoApplied={isPromoApplied}
            />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
