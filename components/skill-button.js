import { useState } from 'react';

export default function SkillButton({inpText, altText, image, bgColor}) {
    
    const [myText, setMyText] = useState(inpText);
    const [showImage, setShowImage] = useState(true);
    const className = showImage ? 'skillButton' : 'skillButton-alt';
    const className_noImg = showImage ? 'skillButton-noImg' : 'skillButton-alt';

    function handleMouseEnter() {
        setMyText(altText);
        setShowImage(false);
    }

    function handleMouseExit() {
        setMyText(inpText);
        setShowImage(true);
    }

    if (altText) {
        if (image) {
            return (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className={className} style={{backgroundColor: bgColor ? bgColor : "#7b2cbf" }}>
                {showImage && (<img src={image}/>)}
                <p style={{ fontWeight: showImage ? 'bold' : 'normal' }}>
                    {myText}
                </p>
            </div>
        );
        }
        return (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} className={className_noImg} style={{backgroundColor: bgColor ? bgColor : "#7b2cbf" }}>
                <p>{myText}</p>
            </div>
        );
    }

    if (image) {
        return (
            <div className={className} style={{backgroundColor: bgColor ? bgColor : "#7b2cbf" }}>
                <img src={image}/>
                <p>{inpText}</p>
            </div>
        );
    }
    return (
        <div className={className_noImg} style={{backgroundColor: bgColor ? bgColor : "#7b2cbf" }}>
            <p>{inpText}</p>
        </div>
    );
}