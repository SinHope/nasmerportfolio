import Head from 'next/head'
import styles from '../styles/Home.module.css';
import AboutMe from "./aboutme.js";
import MySkills from "./myskills.js";
import WorkExperience from "./workexperience.js";



export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Nasmer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
            <div className={styles.sidenav}>
            <img src="\profilephoto.png" alt="Profile Photo" className={styles.profilephoto}></img>
            <h1 className={styles.profilename}>Nasmer Fontanilla</h1>
            <p className={styles.motto}>Aspring Developer In Singapore</p>
              <div>
                <ul className={styles.ul}>
                    <p className={styles.sections}>Home</p>
                    <p className={styles.sections}>About</p>
                    <p className={styles.sections}>Skills</p>
                    <p className={styles.sections}>Experience</p>
                    <p className={styles.sections}>Education</p>
                    <p className={styles.sections}>Projects</p>
                    <p className={styles.sections}>Contact</p>
                </ul>
              
              </div>
            </div>
          </div>

      <div>
        <section className={styles.portfolio}>
          <div>
            <h1 className={styles.title}>
            Hi! 
            <br></br>
            <a href="https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/" target="_blank">I'm Nasmer</a>
            </h1>
          </div>
          <div>
            <img src="\bluefinmaldivesnas1.jpg" alt="bluefinmaldivesnas1" className={styles.homephoto1}></img>
            <img src="\bikelastnas1.jpg" alt="bikelastnas1" className={styles.homephoto2}></img>
          </div>

            <p className={styles.description}>
          Word Hard. Play Hard. <br></br>Live life to the fullest <br></br> with positivity.
            </p>    
            <p className={styles.portfoliofooter}>
            Built with NextJS
            </p>
          <div className={styles.dlcv}>
            <ul className={styles.liststyle}>
              <li><a href="https://www.mediafire.com/file/cgwja5bsm0khkok/COVER+LETTER+280922.docx/file" target="_blank" className={styles.dlcv2}>Download My CV</a></li>
            </ul>
          </div>
        </section>

        <div className={styles.tabs}>
          <section>
            
            <h3>About Me <span className={styles.sectionem}>Who Am I</span></h3>
            <div>
              <AboutMe />
            </div>
            
          </section>
          
          <section className={styles.space1} >
            
            <h3>My Specialty <span className={styles.sectionem}>My Skills</span></h3>
            <div>
              <MySkills />
            </div>
            
          </section>
          
          <section className={styles.space1} >
            
            <h3>Experience <span className={styles.sectionem}>Work Experience</span></h3>
            <div>
              <WorkExperience />
            </div>
            
          </section>
            
          <section className={styles.space1}>
            
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            
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