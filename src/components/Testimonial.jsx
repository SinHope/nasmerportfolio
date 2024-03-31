import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { ScrollArea } from "@/components/ui/scroll-area"


import magesnasmer from '@/images/magenasmer.jpg'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container className="snap-x">
      <ScrollArea className="h-[600px] w-[1200px] rounded-md border border-4 border-cyan-500 p-4 shadow-lg shadow-cyan-500/50">
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image src={magesnasmer} alt="screenshot" unoptimized />
              <p className="underline decoration-double font-bold mt-6 transform hover:scale-y-110 ease-in duration-100">Source:  
              <a href="https://www.facebook.com/photo?fbid=798248328995351&set=pcb.798247898995394" className="ml-px italic font-extrabold">
              MAGES Institute Of Excellence Facebook Page</a></p>
            </figcaption>
          </figure>
        </FadeIn>
      </ScrollArea>
      </Container>
    </div>
  )
}
