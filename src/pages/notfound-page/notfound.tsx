import CatalogBtn from "../../components/catalog-btn/catalog-btn";
import Header from "../../components/header/header";
import "./notfound.scss";

function NotFoundPage(): React.JSX.Element {
    return (
        <>
            <Header />
            <section className="not-found">
                <div className="container">
                    <div className="not-found__wrapper">
                        <h1 className="not-found__title">Ошибка 404</h1>
                        <span className="not-found__text">По какой-то неведомой причине данная страница не нашлась</span>
                        <CatalogBtn buttonProps={'На главную'}/>
                    </div>
                </div>
                
            </section>

        </>
    )
}

export default NotFoundPage;
