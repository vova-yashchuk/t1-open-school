import Navigation from "../nav/nav";
import "./footer.scss";


function Footer(): React.JSX.Element {
    return (
        <footer className="footer container">
            <div className="footer__wrapper">
                <div className="footer__logo">Goods4you</div>
                <Navigation navigationProps={'footer'} />
            </div>
        </footer>
    )
}

export default Footer;
