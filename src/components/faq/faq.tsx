
import "./faq.scss";
import Question from "../question/question";

function Faq(): React.JSX.Element {
    return (
        <section className="faq">
            <div className="container">
                <div className="faq__wrapper">
                    <h2 className="faq__title">FAQ</h2>
                    <ul className="faq__list">
                        <Question />
                        <Question />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq;
