import Typewriter from "typewriter-effect";
import { forwardRef, useImperativeHandle, useRef } from "react";

const TypewriterComponent = forwardRef(({ myText, onTypingComplete, onTypingPauseComplete, onTypingPause2Complete, onTypingPause3Complete }, ref) => {
    const typewriterRef = useRef(null);
    const cursorTimeoutRef = useRef(null);

    // Expose functions to the parent
    useImperativeHandle(ref, () => ({
        refresh(newText, deletionLength) {
            if (typewriterRef.current) {
                typewriterRef.current
                    .callFunction(() => {
                        const cursor = document.querySelector('.Typewriter__cursor');
                        if (!cursor) return;
                        cursor.classList.remove('cursor-hidden');
                        cursor.classList.remove('cursor-blink');
                        // Clear previous timeout if it exists
                        if (cursorTimeoutRef.current) {
                            clearTimeout(cursorTimeoutRef.current);
                            cursorTimeoutRef.current = null;
                        }
                    })
                    .deleteChars(deletionLength)
                    .pauseFor(100)
                    .typeString(newText)
                    .callFunction(() => {
                        if (onTypingComplete) onTypingComplete();
                    })
                    .pauseFor(100)
                    .callFunction(() => {
                        if (onTypingPauseComplete) onTypingPauseComplete();
                    })
                    .pauseFor(100)
                    .callFunction(() => {
                        if (onTypingPause2Complete) onTypingPause2Complete();
                    })
                    .pauseFor(100)
                    .callFunction(() => {
                        if (onTypingPause3Complete) onTypingPause3Complete();
                    })
                    .pauseFor(200)
                    .callFunction(() => {
                        const cursor = document.querySelector('.Typewriter__cursor');
                        if (!cursor) return;
                        cursor.classList.add('cursor-blink');
                        const blinkCycle = 1000;
                        cursorTimeoutRef.current = setTimeout(() => {
                            cursor.classList.remove('cursor-blink');
                            cursor.classList.add('cursor-hidden');
                            cursorTimeoutRef.current = null;
                        }, blinkCycle * 4);
                    })
                    .start();
            }
        }
    }));

    function typeMyIntro(typewriter) {
        typewriterRef.current = typewriter;
        
        typewriter
            .typeString(myText)
            .callFunction(() => {
                if (onTypingComplete) onTypingComplete();
            })
            .pauseFor(100)
            .callFunction(() => {
                if (onTypingPauseComplete) onTypingPauseComplete();
            })
            .pauseFor(100)
            .callFunction(() => {
                if (onTypingPause2Complete) onTypingPause2Complete();
            })
            .pauseFor(100)
            .callFunction(() => {
                if (onTypingPause3Complete) onTypingPause3Complete();
            })
            .pauseFor(200)
            .callFunction(() => {
            const cursor = document.querySelector('.Typewriter__cursor');
            if (!cursor) return;

            cursor.classList.add('cursor-blink');
            const blinkCycle = 1000; // should match CSS animation duration
            cursorTimeoutRef.current = setTimeout(() => {
                cursor.classList.remove('cursor-blink'); // stop blinking
                cursor.classList.add('cursor-hidden');   // fade out cursor
                cursorTimeoutRef.current = null;
            }, blinkCycle * 4);
            })
            .start();
        }

    return (
        <Typewriter onInit={typeMyIntro} options={{ delay: 64, cursor: "|" , deleteSpeed: 32}} />
    );
});

export default TypewriterComponent;
