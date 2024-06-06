import {Routes, Route} from 'react-router-dom'
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main';
import ProductPage from '../../pages/product-page/product';
import CartPage from '../../pages/cart-page/cart';
import NotFoundPage from '../../pages/notfound-page/notfound';
import Header from '../header/header';
import Hero from '../hero/hero';
import Footer from '../footer/footer';

function App() {

    return (
        <HistoryRouter history={browserHistory}>
            <Header />
            <Hero />
            <Routes>
                <Route path={AppRoute.Root} element={<MainPage />} />
                <Route path={AppRoute.Product} element={<ProductPage />} />
                <Route path={AppRoute.Cart} element={<CartPage />} />
                <Route path={AppRoute.NotFound} element= {<NotFoundPage />} />
            </Routes>
            <Footer />
        </HistoryRouter>
    );
}

export default App