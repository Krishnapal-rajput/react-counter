import { useEffect, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    let intervalId = null;
    
    useEffect(() => {
        if (isActive) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive]);

    const startCounter = () => {
        setIsActive(true);
    };

    const pauseCounter = () => {
        setIsActive(false);
    };

    const resetCounter = () => {
        setIsActive(false);
        setCount(0);
    };

    return (
        <div className="container">
            <div className="counter">{count}</div>
            <div className="controls">
                <button onClick={startCounter} className="start">Start</button>
                <button onClick={pauseCounter} className="pause">Pause</button>
                <button onClick={resetCounter} className="reset">Reset</button>
            </div>
        </div>
    );
}
