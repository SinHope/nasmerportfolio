import React from "react";
import styles from '../styles/Home.module.css';

const SideNav = (props) => {
    return (
<div className={styles.sidenav}>
            <img src="\profilephoto.png" alt="Profile Photo" className="h-48 w-80 rounded-full mt-28 bg-white ml-[18px]"></img>
            <h1 className="font-quicksand font-black text-4xl text-center text-teal-900">Nasmer Fontanilla</h1>
            <p className="text-center">Aspring Developer In Singapore</p>
              <div>
                <ul className="list-none">
                    <p className="font-quicksand font-bold text-center mt-[50px]">Home</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">About</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">Skills</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">Experience</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">Education</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">Projects</p>
                    <p className="font-quicksand font-bold text-center mt-[50px]">Contact</p>
                </ul>
              
              </div>
            </div>
            );
        };

        export default SideNav;