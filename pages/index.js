import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AboutMe from "./aboutme.js";
import MySkills from "./myskills.js";
import WorkExperience from "./workexperience.js";
import Education from "./education.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import SideNav from "./sidenav.js";
import Home1 from "./home.js";
import {Link} from "react-scroll";
import React, { useState, useEffect } from 'react'; 



export default function Home() {

  const AnimateOnScroll = () => {
    useEffect(() => {
      const animate = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      }
  
      const observer = new IntersectionObserver(animate)
      const targets = document.querySelectorAll('.animate-on-scroll')
      targets.forEach(target => observer.observe(target))
    }, [])
  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Nasmer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="pageTransition" content="fade 1000" />
      </Head>

      <div className="motion-safe:animate-fadeIn">
      <div className="w-[360px] block fixed float-left overflow-y-scroll h-full bg-emerald-100 top-0 right-0 left-0">
            <img src="\profilephoto.png" alt="Profile Photo" className="h-48 w-80 rounded-full mt-12 bg-white ml-[18px]"></img>
            <h1 className="font-quicksand font-black text-4xl text-center text-teal-900">Nasmer Fontanilla</h1>
            <p className="text-center">Aspring Developer In Singapore</p>
              <div aria-expanded="false">
                <ul className="list-none">
                    <Link to="home1" spy={true} smooth={true} offset={-200} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[50px] duration-300">Home</p></Link>
                    <Link to="aboutme" spy={true} smooth={true} offset={-60} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">About</p></Link>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">Skills</p></Link>
                    <Link to="experience" spy={true} smooth={true} offset={-50} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">Experience</p></Link>
                    <Link to="education" spy={true} smooth={true} offset={-50} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">Education</p></Link>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">Projects</p></Link>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={1000}><p className="hover:underline decoration-emerald-500 decoration-2 hover:text-2xl underline-offset-8 duration-1000 font-quicksand font-bold text-center mt-[30px]">Contact</p></Link>
                </ul>
              
              </div>
            </div>
            <section id="home1" className="">
              <div>
                <Home1 />
              </div>
            </section>
          </div>

      <div >
        

        <div className="mt-[300px] ml-[420px]">
          <section>
            
            <h3 id="aboutme" className="font-bold text-2xl motion-safe:animate-fadeIn js-show-on-scroll">About Me <span className="font-black text-4xl">Who Am I</span></h3>
            <div>
              <AboutMe />
            </div>
            
          </section>
          
          <section id="skills" className="mt-[300px]" >
            
            <h3 className="font-bold text-2xl motion-safe:animate-fadeIn js-show-on-scroll">My Specialty <span className="font-black text-4x motion-safe:animate-fadeInl">My Skills</span></h3>
            <div>
              <MySkills />
            </div>
            
          </section>
          
          <section id="experience" className="mt-[300px]" >
            
            <h3 className="font-bold text-2xl motion-safe:animate-fadeIn">Experience <span className="font-black text-4xl motion-safe:animate-fadeIn">Work Experience</span></h3>
            <div>
              <WorkExperience />
            </div>
            
          </section>
            
          <section id="education" className="mt-[300px]">
            
            <h3 className="font-bold text-2xl motion-safe:animate-fadeIn">My Studies <span className="font-black text-4xl motion-safe:animate-fadeIn">Education</span></h3>
            <div>
              <Education />
            </div>
            
          </section>

          <section id="projects" className="mt-[300px]">
            
            <h3 className="font-bold text-2xl motion-safe:animate-fadeIn">Projects <span className="font-black text-4xl motion-safe:animate-fadeIn">Coding Journal</span></h3>
            <div>
              <Projects />
            </div>
            
          </section>

          <section id="contact" className="mt-[300px]">
            
            <h3 className="font-bold text-2xl motion-safe:animate-fadeIn">Contact<span className="font-black text-4xl motion-safe:animate-fadeIn"> HIRE ME!</span></h3>
            <div>
              <Contact />
            </div>
            
          </section>
            
        </div>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
}