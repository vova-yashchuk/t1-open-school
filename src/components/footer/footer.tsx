import Navigation from "../nav/nav";
import "./footer.scss";


function Footer(): React.JSX.Element {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">Goods4you</div>
                    <Navigation navigationProps={'footer'} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
