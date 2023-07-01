import './flippable-card.css';
import Card1 from './card/card1';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function FlippableCard1() {
    const [showFront, setShowFront] = useState(true);
    return (
        <center><div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card1 onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div></center>
    );
}

export default FlippableCard1;
