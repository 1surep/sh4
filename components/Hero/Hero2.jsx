"use client";
import React from "react";


const Hero2=()=>{
    const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });
    const resetTilt = () => setTilt({ rx: 0, ry: 0 });
    const onMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const ry = ((x - cx) / cx) * 6;
        const rx = (-(y - cy) / cy) * 6;
        setTilt({ rx, ry });
    };
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-black" onMouseMove={onMove} onMouseLeave={resetTilt}>
                <div
                    style={{
                        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                        transition: "transform 200ms ease-out"
                    }}
                    className="text-center"
                >
                    <h1 className="bg-[url('/d2.png')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-extrabold leading-none tracking-tight text-[15vw] uppercase text-pan text-glow">
                        welcome to <br /> PAN 2027
                    </h1>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <a href="#about" className="btn btn-primary">Explore</a>
                        <a href="#tickets" className="btn btn-outline">Get Tickets</a>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <div className="scroll-cue text-white/70 text-sm flex flex-col items-center">
                            <span>Scroll</span>
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