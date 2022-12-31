import React from "react";
import Link from 'next/link';
import AboutMe from "./aboutme.js";



const SideNav = (props) => {
    return (
<div className="w-[360px] fixed overflow-y-auto h-full bg-emerald-100 top-0 right-0 left-0">
            <img src="\profilephoto.png" alt="Profile Photo" className="h-48 w-80 rounded-full mt-12 bg-white ml-[18px]"></img>
            <h1 className="font-quicksand font-black text-4xl text-center text-teal-900">Nasmer Fontanilla</h1>
            <p className="text-center">Aspring Developer In Singapore</p>
              <div>
                <ul className="list-none">
                    <Link href="/" smooth={true} duration={1000} className="scroll-smooth"><p className="font-quicksand font-bold text-center mt-[50px]">Home</p></Link>
                    <Link href="/aboutme"><p className="font-quicksand font-bold text-center mt-[30px]">About</p></Link>
                    <p className="font-quicksand font-bold text-center mt-[30px]">Skills</p>
                    <p className="font-quicksand font-bold text-center mt-[30px]">Experience</p>
                    <p className="font-quicksand font-bold text-center mt-[30px]">Education</p>
                    <p className="font-quicksand font-bold text-center mt-[30px]">Projects</p>
                    <p className="font-quicksand font-bold text-center mt-[30px]">Contact</p>
                </ul>
              
              </div>
            </div>
            );
        };


        export default SideNav;