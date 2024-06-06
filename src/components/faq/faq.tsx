import "./faq.scss";

function Faq(): React.JSX.Element {
    return (
        <section className="faq container">
                    <div className="faq__wrapper">
                        <h2 className="faq__title">FAQ</h2>
                        <ul className="faq__list">
                            <li className="faq__item">
                                <p className="faq__item-title">Question 1</p>
                                <p className="faq__item-text">Long answer to the first question</p>
                                <div className="faq__item-button">
                                    <img src="/icons/plus.svg" alt="cross button" />
                                </div>
                            </li>
                            <li className="faq__item">
                                <p className="faq__item-title">Question 2</p>
                                <p className="faq__item-text">Long answer to the first question</p>
                                <div className="faq__item-button">
                                    <img src="/icons/plus.svg" alt="cross button" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
    )
}

export default Faq;
