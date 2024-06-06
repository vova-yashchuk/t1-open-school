import "./header.scss";
import Navigation from "../nav/nav";

function Header(): React.JSX.Element {
    return (
        <header className="header container">
            <div className="header__logo">Goods4you</div>
            <Navigation navigationProps={'header'} />
        </header>
    )
}

export default Header;
