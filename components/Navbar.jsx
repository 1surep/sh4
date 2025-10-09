import Image from "next/image";
import React from "react";
import { LuUserCog } from "react-icons/lu";



const Navbar=()=>{
    return (
        <div>
            <nav className="px-[1rem] lg:px-[3rem] font-semibold lg:flex items-center justify-between py-3 w-full bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] fixed z-50 hidden ">
                {/* logo */}
                <div className="flex items-center gap-3">
                    <Image src='/logo.jpg' width={80} height={80} alt="sierrah4_logo"/>
                    <div>
                        <p className="text-cyan-600">Sierra H4</p>
                        <p className="text-sm text-green-600 text-center">The Duo Kennel</p>
                    </div>
                </div>


                {/* list */}
                <ul className="flex items-center gap-5">
                    <li className="hvr-underline-from-left cursor-pointer">Home</li>
                    <li className="hvr-underline-from-left cursor-pointer">About Us</li>
                    <li className="hvr-underline-from-left cursor-pointer">Events</li>
                    <li className="hvr-underline-from-left cursor-pointer">PAN 2027</li>
                    <li className="hvr-underline-from-left cursor-pointer">Gallery</li>
                    <li className="hvr-underline-from-left cursor-pointer">SH4 Shop</li>
                    <li className="hvr-underline-from-left cursor-pointer">Contact Us</li>
                </ul>

                {/* Admin login */}
                <div className="flex items-center gap-3 font-black ">Misma <LuUserCog  className="text-2xl"/></div>
                
            </nav>
        </div>
    )



};
export default Navbar;