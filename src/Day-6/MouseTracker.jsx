import { useEffect, useState } from "react";

const MouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white px-8 py-6 rounded-md shadow-sm text-center">
                <h2 className="text-lg font-semibold text-slate-700 mb-2">
                    Mouse Position
                </h2>

                <p className="text-slate-600">
                    X: <span className="font-medium">{position.x}</span>
                </p>
                <p className="text-slate-600">
                    Y: <span className="font-medium">{position.y}</span>
                </p>
            </div>
        </div>
    );
};

export default MouseTracker;
