import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageNasmer from '@/images/portfolioimage.jpg'
import imageBlankProfilePhoto from '@/images/blankprofilephoto.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My Ethos"
        title="Finding Harmony Between Code and Creativity"
        invert
      >
        <p>
        As a passionate developer, I embrace a set of core values that guide my work and life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Growth" invert>
          I am committed to continuous learning and improvement, always seeking to expand my skills 
          and push the boundaries of what I can create.
          </GridListItem>
          <GridListItem title="Integrity" invert>
          My work ethic is built on reliability and transparency. 
          I believe in honest communication and delivering on promises.
          </GridListItem>
          <GridListItem title="Empathy" invert>
          Understanding the user's needs and challenges is at the heart of what I do. 
          I strive to create solutions that not only work but also bring joy and ease to those who use them.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leader',
    people: [
      {
        name: 'Nasmer Fontanilla',
        role: 'Founder / Full Stack Developer / Innovator & Solution Architect',
        image: { src: imageNasmer },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Looking for Partner',
        role: 'NA',
        image: { src: imageBlankProfilePhoto },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)
  const customPages = [
    {
      href: '/hobbies',
      title: 'Hobbies',
      description: 'Exploring my personal interests and activities outside of work.',
    },
    {
      href: '/career-journey',
      title: 'Career Journey',
      description: 'A detailed overview of my professional development and key milestones.',
    },
  ];
  const combinedPages = [...blogArticles, ...customPages];
  return (
    <>
      <PageIntro
        eyebrow="About Me"
        title="Crafting Excellence with Proven Solutions and an Unyielding Passion for Growth"
      >
        <p>
        Professionally, I combine trusted solutions with a relentless drive for innovation, continually learning and refining my work to meet each new challenge.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Yet, the drive that fuels my professional quest is balanced by a
            rich personal life, filled with hobbies and passions that keep me
            grounded and inspired. Whether I’m unraveling the complexities of
            new programming languages, or immersing myself in the art of
            culinary experimentation, each interest I pursue enriches my
            perspective and injects creativity into my professional endeavors.
          </p>
          <p>
            I believe that a well-rounded life cultivates a well-rounded
            professional. My zest for exploration extends beyond the keyboard
            and into the vastness of life’s experiences. In maintaining this
            balance, I bring not only a sharpened skill set to each project but
            also a vibrancy and a fresh, holistic vision.
          </p>
          <p>
            Through our collaboration, we will not only craft solutions that are
            precise and functional but also imbued with the creativity and joy
            that come from a life fully embraced. Let’s build the future—one
            that mirrors the perfection we seek in work and life.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="My Life"
        intro="Walk through part of my personal life"
        pages={combinedPages}
      />

      <ContactSection />
    </>
  );
}
