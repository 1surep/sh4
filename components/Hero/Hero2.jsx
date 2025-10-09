"use client";
import React, { useCallback, useMemo } from "react";

const Hero2 = () => {
    const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });
    
    // Memoize the reset function to prevent unnecessary re-renders
    const resetTilt = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);
    
    // Throttle mouse movement to reduce calculations
    const onMove = useCallback((e) => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const ry = ((x - cx) / cx) * 3; // Reduced intensity
            const rx = (-(y - cy) / cy) * 3; // Reduced intensity
            setTilt({ rx, ry });
        });
    }, []);
    
    // Memoize the transform style to prevent recalculation
    const transformStyle = useMemo(() => ({
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 300ms ease-out"
    }), [tilt.rx, tilt.ry]);
    return (
        <>
            <section className="min-h-screen pt-28 flex items-center justify-center bg-black relative" onMouseMove={onMove} onMouseLeave={resetTilt}>
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
                <div
                    style={transformStyle}
                    className="text-center relative z-10"
                >
                    <h1 className="bg-[url('/d2.png')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-extrabold leading-none tracking-tight text-[13vw] uppercase text-pan text-glow-enhanced">
                        welcome to <br /> SIERRA H4.
                    </h1>
                    <div className="lg:mt-3 mt-10 flex items-center justify-center gap-4">
                        <a href="#about" className="btn btn-primary bg-green-500 hover:bg-green-700 hover:text-gray-100 text-gray-900">Join The Adventure</a>
                        {/* <a href="#tickets" className="btn btn-outline">Get Tickets</a> */}
                    </div>

                    <div className="lg:mt-1 mt-10  flex justify-center">
                        <div className="scroll-cue text-white/90 text-sm flex flex-col items-center">
                            <span className="font-medium">Scroll</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


};
export default Hero2;