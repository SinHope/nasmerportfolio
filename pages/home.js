import React, { useEffect } from 'react';



const Home1 = (props) => {
    
    return (
        <><div>
            <h1 className="text-left mt-[100px] ml-[420px] text-6xl font-extrabold motion-safe:animate-fadeIn js-show-on-scroll">
                Hi!
                <br></br>
                <a className="underline hover:underline-offset-4 text-blue-600 transition-all motion-safe:animate-fadeIn js-show-on-scroll" href="https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/" target="_blank">I'm Nasmer</a>
            </h1>
          </div>
          <div className="motion-safe:animate-fadeIn">
            <div>
                <img src="\bluefinmaldivesnas1.jpg" alt="bluefinmaldivesnas1" id="slideshow" className="z-1 w-[500px] fixed ml-[420px] opacity-70 slide"></img>
            </div>
            <div>
                <img src="\bikelastnas1.jpg" alt="bikelastnas1" id="slideshow" className="z-1 w-[460px] fixed ml-[920px] opacity-0 slide"></img>
            </div>
                
          </div>
                <p className="text-left mt-[40px] ml-[420px] text-2xl font-light motion-safe:animate-fadeIn">
                Word Hard. Play Hard. <br></br>Live life to the fullest <br></br> with positivity.
                </p>
                <p className="mt-[10px] ml-[420px] italic motion-safe:animate-fadeIn">
                Built with NextJS
                </p>
                <div className="mt-[10px] ml-[420px]">
                    <ul className="cursor-grabbing border-solid border-2 border-emerald-500 w-36 bg-emerald-200 shadow-2xl hover:w-40 motion-safe:animate-fadeIn">
                        <li className="text-center ml-[0px] duration-1000 hover:text-lg font-sans hover:text-rose-900 hover:font-black transition-all font-black motion-safe:animate-fadeIn"><a href="https://www.mediafire.com/file/cgwja5bsm0khkok/COVER+LETTER+280922.docx/file" target="_blank">Download My CV</a></li>
                    </ul>
                </div></>
    );
};

export default Home1;