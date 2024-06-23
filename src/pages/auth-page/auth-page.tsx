import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../const/const";
import "./auth-page.scss";
import { useEffect, useState } from "react";
import { useLazyPostUserLoginQuery } from "../../store/products-api";
import { getToken, saveToken } from "../../service/token";
import { useAppDispatch } from "../../hooks/hooks";
import { setUser } from "../../store/app-slice";


function AuthPage(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = getToken();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [postLoginData, {isLoading, isError: isLoginError}] = useLazyPostUserLoginQuery();

    useEffect(() => {
        if (token) {
            navigate(AppRoute.Root)
        }
    }, []);

    const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault();
        postLoginData({username, password, expiresInMins: 10}).unwrap()
            .then((result) => {
                saveToken(result.token);
                dispatch(setUser(result));
                navigate(AppRoute.Root);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo-wrapper">
                        <Link to={AppRoute.Root} aria-label="Go to homepage">
                            <div className="header__logo">Goods4you</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
            <div className="container">
                <section className="auth">
                    <h1 className="auth__title">Login</h1>
                    <div className="auth__wrapper">
                        <form className="auth__form">
                            <input
                                type="text"
                                className="auth__input"
                                placeholder="Login"
                                onChange={(evt) => setUsername(evt.target.value)}/>
                            <input
                                type="text"
                                className="auth__input"
                                placeholder="Password"
                                onChange={(evt) => setPassword(evt.target.value)}/>

                            <button
                                className="auth__submit-btn catalog-btn"
                                type="submit"
                                onClick={(evt) => handleSubmit(evt)}>{isLoading ? '...' : 'Login'}
                            </button>
                            {isLoginError ? <div className="error">login or password is incorrect</div> : ''}
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AuthPage;
