import React from "react";

const HeroThree=()=>{
    const animals = [
        "🍺 Address: Freetown, Sierra Leone  🍺",  " 👣 Phone-Number:+232-80-668590  👣",  "🍺 Email: h4sierra@gmail.com 🍺", 
        "🍺 Address: Freetown, Sierra Leone  🍺",  " 👣 Phone-Number:+232-80-668590  👣",  "🍺 Email: h4sierra@gmail.com 🍺", 
       
       
    ];


    return (
        <section id="section5" className="w-full  ">
            <div className="news-ticker-container">
                <div className="news-ticker text-gray-100">
                    {/* Repeat 4 times to ensure smooth looping */}
                    {[...animals, ...animals, ...animals, ...animals].map((animal, index) => (
                        <span key={index} className="news-ticker-item">
                            {animal}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );


};
export default HeroThree;