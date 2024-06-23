import { Routes, Route } from 'react-router-dom'
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main';
import ProductPage from '../../pages/product-page/product-page';
import CartPage from '../../pages/cart-page/cart';
import NotFoundPage from '../../pages/notfound-page/notfound';
import Footer from '../footer/footer';
import AuthPage from '../../pages/auth-page/auth-page';
import PrivateRoute from '../private-route/private-route';
import { getToken } from '../../service/token';
import { useState } from 'react';
import { useGetUserByTokenQuery } from '../../store/products-api';



function App() {
    const [token ] = useState(getToken());
    const { isLoading: isUserLoading } = useGetUserByTokenQuery(token);
  
    return (
        <HistoryRouter history={browserHistory}>
            <Routes>
                <Route path={AppRoute.Root}
                    element={<PrivateRoute isUserLoading={isUserLoading} component={<MainPage />}></PrivateRoute>} />
                <Route path={AppRoute.Product}
                    element={<PrivateRoute isUserLoading={isUserLoading} component={<ProductPage />}></PrivateRoute>} />
                <Route path={AppRoute.Cart}
                    element={<PrivateRoute isUserLoading={isUserLoading} component={<CartPage />}></PrivateRoute>} />
                <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
                <Route path={AppRoute.Auth}
                    element={<AuthPage />} />
            </Routes>
            <Footer />
        </HistoryRouter>
    );
}

export default App