import Head from 'next/head'
import styles from '../styles/Home.module.css';
import AboutMe from "./aboutme.js";
import MySkills from "./myskills.js";
import WorkExperience from "./workexperience.js";
import Education from "./education.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import SideNav from "./sidenav.js";
import Home1 from "./home.js"


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Nasmer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SideNav />
            
          </div>

      <div>
        <section className={styles.portfolio}>
          <div>
            <Home1 />
          </div>
        </section>

        <div className="mt-[300px] ml-[420px]">
          <section>
            
            <h3 className="font-bold text-2xl">About Me <span className="font-black text-4xl">Who Am I</span></h3>
            <div>
              <AboutMe />
            </div>
            
          </section>
          
          <section className="mt-[300px]" >
            
            <h3 className="font-bold text-2xl">My Specialty <span className="font-black text-4xl">My Skills</span></h3>
            <div>
              <MySkills />
            </div>
            
          </section>
          
          <section className="mt-[300px]" >
            
            <h3 className="font-bold text-2xl">Experience <span className="font-black text-4xl">Work Experience</span></h3>
            <div>
              <WorkExperience />
            </div>
            
          </section>
            
          <section className="mt-[300px]">
            
            <h3 className="font-bold text-2xl">My Studies <span className="font-black text-4xl">Education</span></h3>
            <div>
              <Education />
            </div>
            
          </section>

          <section className="mt-[300px]">
            
            <h3 className="font-bold text-2xl">Projects <span className="font-black text-4xl">Coding Journal</span></h3>
            <div>
              <Projects />
            </div>
            
          </section>

          <section className="mt-[300px]">
            
            <h3 className="font-bold text-2xl">Contact<span className="font-black text-4xl"> HIRE ME!</span></h3>
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