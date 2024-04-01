import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { BackToTopButton } from '@/components/BackToTopButton'
import imageLaptop from '@/images/laptop.jpg'
import portfoilioPhoto from '@/images/portfolioimage.jpg'
import html5 from '@/images/html5.png'
import csslogo from '@/images/css.png'
import javascriptlogo from '@/images/javascript.png'
import reactjslogo from '@/images/react.png'
import nodejslogo from '@/images/nodejs.png'
import mongodblogo from '@/images/mongodb.png'
import expressjslogo from '@/images/expressjs.png'
import npmlogo from '@/images/npmlogo.png'
import githublogo from '@/images/githublogo.png'
import bootstraplogo from '@/images/bootstrap.png'
import tailwindlogo from '@/images/tailwind.png'
import chatgptlogo from '@/images/chatgpt.png'
import figmalogo from '@/images/figma.png'
import nextjslogo from '@/images/nextjs.png'
import shadcnuilogo from '@/images/shadcnui.png'
import vscodelogo from '@/images/vscode.png'
import restapilogo from '@/images/restapi.png'
import drawiologo from '@/images/drawio.png'
import bcglogo from '@/images/bcglogo.png'
import lfplogo from '@/images/lfplogo.png'
import fcmlogo from '@/images/fcmlogo.jpeg'
import valentineheartlogo from '@/images/valentineheart.png'
import { loadCaseStudies } from '@/lib/mdx'

// ShadnCNUI Tailwind - Imports for Card Component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




function Clients() {
  const aboutText= "Hello! I'm Nasmer, a self-taught & professionally certified Full Stack Developer with eye-catching projects on the side. I started self-learning which peaked my interest and got certified at MAGES Institute Of Excellence in Singapore. Now I'm based in Singapore, awaiting for fantastic opportunities that awaits me."
  
  return (
    <div className="rounded-4xl bg-gradient-to-t from-neutral-950 to-neutral-100 shadow-lg shadow-black py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-5xl font-bold font-sans tracking-wider text-white sm:text-left">
            About Me
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <h1 className="text-white mt-12">{aboutText}</h1>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  const SectionIntro = ({ title, titleClassName, children, className }) => {
  return (
    <section className={className}>
      <h2 className={titleClassName}>{title[0]}<br />{title[1]}</h2>
      {children}
    </section>
  );
};
  return (
    <>
      <SectionIntro
        title={["Leveraging Skills for", "Innovative Solutions"]}
        titleClassName="font-sans font-bold text-5xl ml-96"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="font-sans ml-96 mt-16 text-lg">Continuously Advancing Through Lifelong Learning</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>HTML 5</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image className="ms-8  " src={html5} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>CSS</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={csslogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>Javascript</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={javascriptlogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>ReactJS</CardTitle>
                <CardDescription>Distinction(Favourite Library)</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={reactjslogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>NodeJS</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={nodejslogo} alt="HTML 5" />
              </CardContent>
              <CardFooter className="inset-x-0 bottom-0">
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>MongoDB</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={mongodblogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>ExpressJS</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={expressjslogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>NPM</CardTitle>
                <CardDescription>Distinction(& self learned)</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={npmlogo} alt="HTML 5" />
              </CardContent>
              <CardFooter className="inset-x-0 bottom-0">
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>Github</CardTitle>
                <CardDescription>Capstone Project</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={githublogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>Tailwind</CardTitle>
                <CardDescription>Self-Learned(FavouriteLibrary for CSS, UI & UX)</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={tailwindlogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Documentation <br></br> & Research</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>Bootstrap</CardTitle>
                <CardDescription>Distinction</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={bootstraplogo} alt="HTML 5" />
              </CardContent>
              <CardFooter className="inset-x-0 bottom-0">
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>AI Prompting</CardTitle>
                <CardDescription>Distinction & Self-Learn</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={chatgptlogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified By MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>Figma</CardTitle>
                <CardDescription>Self-Learned & Course Study</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={figmalogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified by MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>NextJS</CardTitle>
                <CardDescription>Self-Learn</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={nextjslogo} alt="HTML 5" />
              </CardContent>
              <CardFooter className="inset-x-0 bottom-0">
                <p className="w-72 text-center">Documentation <br></br> & Exploration</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>ShadCNUI</CardTitle>
                <CardDescription>Self-Learn</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={shadcnuilogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Projects <br></br> & Documentation Research</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <Card className="flex flex-col justify-between p-4 h-full shadow-lg shadow-cyan-500/50 animate-bounce hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>VS Code</CardTitle>
                <CardDescription>Self-Learned & Course Study</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={vscodelogo} alt="HTML 5" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Certified by MAGES Institute <br></br> Of Excellence</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce2 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>RESTAPI</CardTitle>
                <CardDescription>Self-Learn</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={restapilogo} alt="HTML 5" />
              </CardContent>
              <CardFooter className="inset-x-0 bottom-0">
                <p className="w-72 text-center">Documentation <br></br> & Exploration</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between p-4 h-full ml-12 shadow-lg shadow-cyan-500/50 animate-bounce3 hover:shadow-cyan-600/50">
              <CardHeader>
                <CardTitle>DrawIO</CardTitle>
                <CardDescription>Self-Learn</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={drawiologo} alt="HTML 5" className="ml-12" />
              </CardContent>
              <CardFooter>
                <p className="w-72 text-center">Projects <br></br> & Documentation Research</p>
              </CardFooter>
            </Card>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Projects"
        title="Building & solving out of nothing excites me. It's a cycle of joy, thrill and satisfaction"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Theory is important. But practical application should be prioritized.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <div className="hover:shadow-lg transition-shadow duration-300 rounded-lg p-4">
              <a href="https://bikeconnectglobal.vercel.app/">
                <ListItem title="BikeConnectGlobal(BCG)">
                  <div className="w-12 shadow-xl rounded-full inline-block">
                    <Image
                      src={bcglogo}
                      alt="BCG Logo"
                      className="w-full h-full rounded-full bg-transparent"
                    />
                  </div>
                  <div className="mt-2">
                    A big project will be in launched in the future. It will be
                    a social media app to unite all motorcycle riders globally.
                    Built on React with MongoDB supporting the backend. Let's
                    see where this goes. Still in early development stages.
                  </div>
                </ListItem>
              </a>
            </div>

            <div class="h-[1px] bg-gradient-to-r from-neutral-950 to-white mt-8"></div>

            <div className="hover:shadow-lg transition-shadow duration-300 rounded-lg p-4">
              <a href="https://luxury-fishing-product.vercel.app/">
                <ListItem title="Luxury Fishing Products">
                  <div className="w-12 shadow-xl rounded-full inline-block">
                    <Image
                      src={lfplogo}
                      alt="LFP Logo"
                      className="w-full h-full rounded-full bg-transparent"
                    />
                  </div>
                  <div className="mt-2">
                    Showcasing my frontend and designing skills. Love to
                    practise If I were to have my own company, this is a
                    beautiful web to show. And just to let you know, fishing is
                    my #1 hobby!
                  </div>
                </ListItem>
              </a>
            </div>

            <div class="h-[1px] bg-gradient-to-r from-neutral-950 to-white mt-8"></div>

            <div className="hover:shadow-lg transition-shadow duration-300 rounded-lg p-4">
              <a href="https://fs-105-faithful-companions-market.vercel.app/">
                <ListItem title="FaithfulCompanionMarket">
                  <div className="w-12 shadow-xl rounded-full inline-block">
                    <Image
                      src={fcmlogo}
                      alt="FCM Logo"
                      className="w-full h-full rounded-full bg-transparent"
                    />
                  </div>
                  <div className="mt-2">
                    This project was done during my time with MAGES Institute Of
                    Excellence, fulfilling my dinstinction in Full Stack Web
                    Developpment Professional Certificate. My team and I built a
                    e-commerce using various tools such as bootstrap, MongoDB,
                    Redux, etc.
                  </div>
                </ListItem>
              </a>
            </div>

            <div class="h-[1px] bg-gradient-to-r from-neutral-950 to-white mt-8"></div>

            <div className="hover:shadow-lg transition-shadow duration-300 p-4">
              <a href="https://valentine-wish.vercel.app/">
                <ListItem title="ValentineWish">
                  <div className="w-12 shadow-xl rounded-full inline-block">
                    <Image
                      src={valentineheartlogo}
                      alt="Valentine Logo"
                      className="w-full h-full rounded-full bg-transparent"
                    />
                  </div>
                  <div className="mt-2">
                    Just a simple web page i built for someone I like. I hope it
                    brings some blushes and positivity to you too! Build one for
                    your loved one too!
                  </div>
                </ListItem>
              </a>
            </div>

            <div class="h-[1px] bg-gradient-to-r from-neutral-950 to-white mt-8"></div>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56 relative">
        <div className="flex-1 flex justify-center mt-10 md:mt-0 absolute ml-60 mb-24">
          <FadeIn><Image src={portfoilioPhoto} alt="Nasmer" width={350} height={150} objectFit="cover" className="animate-pulse max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ml-96"/></FadeIn>
        </div>
        <FadeIn className="max-w-3xl relative">
          <h1 className="font-display font-sans text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Hi! I am Nasmer.
          </h1>
          <p className="font-sans mt-6 text-xl text-neutral-600">
          Fully driven and passionate developer, crafting web applications and mobile solutions.
          </p>
        </FadeIn>
        
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
      >
      </Testimonial>

      <Services />

      <ContactSection />

      <BackToTopButton />
    </>
  )
}
