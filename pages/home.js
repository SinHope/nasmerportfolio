import React from 'react';
import styles from '../styles/Home.module.css';

const Home1 = (props) => {
    return (
       <><div>
            <h1 className="text-left mt-[100px] ml-[420px] text-6xl font-extrabold">
                Hi!
                <br></br>
                <a className="underline hover:underline-offset-4 text-blue-600 transition-all" href="https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/" target="_blank">I'm Nasmer</a>
            </h1>
        </div><div>
                <img src="\bluefinmaldivesnas1.jpg" alt="bluefinmaldivesnas1" className={styles.homephoto1}></img>
                <img src="\bikelastnas1.jpg" alt="bikelastnas1" className={styles.homephoto2}></img>
            </div><p className="text-left mt-[40px] ml-[420px] text-2xl font-light">
                Word Hard. Play Hard. <br></br>Live life to the fullest <br></br> with positivity.
            </p><p className="mt-[10px] ml-[420px] italic">
                Built with NextJS
            </p><div className="mt-[10px] ml-[420px]">
                <ul className="cursor-grabbingborder-solid border-2 border-emerald-500 w-36 bg-emerald-200 shadow-2xl ">
                    <li className="cursor-grabbing text-center ml-[0px] hover:text-lg font-serif hover:text-rose-900 hover:font-black transition-all"><a href="https://www.mediafire.com/file/cgwja5bsm0khkok/COVER+LETTER+280922.docx/file" target="_blank">Download My CV</a></li>
                </ul>
            </div></>
    );
};

export default Home1;