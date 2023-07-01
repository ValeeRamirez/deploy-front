import './flippable-card.css';
import Card3 from './card/card3';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function FlippableCard3() {
    const [showFront, setShowFront] = useState(true);
    return (
        <center><div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card3 onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div></center>
    );
}

export default FlippableCard3;
