import "./header.scss";
import Navigation from "../nav/nav";
import { Link } from "react-router-dom";
import { AppRoute, headerBorderStyle, headerHeight, navStyle } from "../../const/const";
import { useState, useRef, useEffect } from "react";

function Header(): React.JSX.Element {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(window.innerWidth);
    const resizeRef = useRef(null);




    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                handleResize();
            }
        });

        if (resizeRef.current) {
            observer.observe(resizeRef.current);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeRef.current) {
                observer.unobserve(resizeRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (width < 768) {
            setIsCollapsed(true);
        } else {
            setIsCollapsed(false);
        }
    }, [width])

    useEffect(() => {
        const contentElement = contentRef.current;
        console.log(contentElement, 'qqq')
        if (contentElement) {
            if (isCollapsed) {
                contentElement.style.maxHeight = '0';
            } else {
                contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
            }
        }


    }, [isCollapsed]);



    const toggleCollapse = (evt: React.MouseEvent<HTMLDivElement>): void => {
        setIsCollapsed(prevState => !prevState);
        evt.currentTarget.classList.toggle('toggle');
    };

    return (
        <header className="header" style={window.location.pathname !== '/' ? headerHeight : {}} ref={resizeRef}>
            <div className="container">
                <div className="header__wrapper" style={window.location.pathname !== '/' ? headerBorderStyle : {}}>
                    <div className="header__logo-wrapper">
                        <Link to={AppRoute.Root} aria-label="Go to homepage">
                            <div className="header__logo">Goods4you</div>
                        </Link>
                        <div className="header__button" onClick={toggleCollapse} aria-controls="header-navigation"
                            aria-label="Toggle navigation"></div>
                    </div>
                    <div className="header__nav-wrapper" ref={contentRef} style={window.location.pathname !== '/' ? navStyle : {}}>
                        <Navigation navigationProps={'header'} />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
