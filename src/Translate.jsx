import React, { useRef, useEffect } from 'react';

const Translate = () => {
    const googleTranslateRef = useRef(null);

    useEffect(() => {
        let intervalId;

        const checkGoogleTranslate = () => {
            if (window.google && window.google.translate && window.google.translate.TranslateElement && window.google.translate.TranslateElement.InlineLayout) {
                clearInterval(intervalId);

                new window.google.translate.TranslateElement(
                    { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL },
                    googleTranslateRef.current
                );
            }
        };

        intervalId = setInterval(checkGoogleTranslate, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div
                ref={googleTranslateRef}
            ></div>
        </div>
    );
};

export default Translate;
