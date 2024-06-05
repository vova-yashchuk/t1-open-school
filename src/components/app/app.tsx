import {Routes, Route} from 'react-router-dom'
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main';
import ProductPage from '../../pages/product-page/product';
import CartPage from '../../pages/cart-page/cart';
import NotFoundPage from '../../pages/notfound-page/notfound';

function App() {

    return (
        <HistoryRouter history={browserHistory}>
            <Routes>
                <Route path={AppRoute.Root} element={<MainPage />} />
                <Route path={AppRoute.Product} element={<ProductPage />} />
                <Route path={AppRoute.Cart} element={<CartPage />} />
                <Route path={AppRoute.NotFound} element= {<NotFoundPage />} />
            </Routes>
        </HistoryRouter>
    );
}

export default App