import { useState, useRef, useEffect } from "react";
import "./question.scss"

function Question(): React.JSX.Element {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const contentRef = useRef<HTMLLIElement>(null);
  
    useEffect(() => {
      const contentElement = contentRef.current;
      if (contentElement) {
        if (isCollapsed) {
            contentElement.style.maxHeight = '80px';
           } else {
             contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
           }
      }
        
      
    }, [isCollapsed]);
  
    const toggleCollapse = (evt: React.MouseEvent<HTMLDivElement>): void => {
      setIsCollapsed(prevState => !prevState);
      evt.currentTarget.previousElementSibling?.classList.toggle('hidden');
      evt.currentTarget.classList.toggle('rotate');
    };

    return (
        <li ref={contentRef} className={`faq__item content ${isCollapsed ? 'collapsed' : ''}`}>
            <p className="faq__item-title">Question 1</p>
            <p className="faq__item-text">Long answer to the first question</p>
            <div className="faq__item-button" onClick={toggleCollapse} aria-controls="faq-answer">
                <img src="/icons/plus.svg" alt="cross button" />
            </div>
        </li>
    )
}

export default Question;