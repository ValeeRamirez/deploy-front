import './flippable-card.css';
import Card2 from './card/card2';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function FlippableCard2() {
    const [showFront, setShowFront] = useState(true);
    return (
        <center><div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card2 onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div></center>
    );
}

export default FlippableCard2;