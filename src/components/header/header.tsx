import "./header.scss";
import Navigation from "../nav/nav";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const/const";

function Header(): React.JSX.Element {
    return (
        <header className="header container">
            <Link to={AppRoute.Root}>
                <div className="header__logo">Goods4you</div>
            </Link>
            <Navigation navigationProps={'header'} />
        </header>
    )
}

export default Header;
