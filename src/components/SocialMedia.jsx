import Link from 'next/link'
import clsx from 'clsx'
import { LinkedinIcon } from 'lucide-react'

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9 1.641-1.853 3.378-1.853 3.609 0 4.275 2.374 4.275 5.461v6.283zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.065.925 2.065 2.063 0 1.139-.925 2.065-2.065 2.065zM6.691 20.452H3.982V9h2.709v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.204 24 24 23.227 24 22.271V1.729C24 .774 23.204 0 22.225 0z"
      />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.202a2.994 2.994 0 00-2.104-2.118C19.502 3.562 12 3.562 12 3.562s-7.502 0-9.394.522a2.994 2.994 0 00-2.104 2.118C.002 8.094 0 12 0 12s.002 3.906.502 5.798a2.994 2.994 0 002.104 2.118c1.892.522 9.394.522 9.394.522s7.502 0 9.394-.522a2.994 2.994 0 002.104-2.118C24 15.906 24 12 24 12s-.002-3.906-.502-5.798zM9.545 15.565V8.435l6.368 3.564-6.368 3.566z"
      />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M21.5 12.5c0 4.135-3.365 7.5-7.5 7.5s-7.5-3.365-7.5-7.5 3.365-7.5 7.5-7.5V3c-5.25 0-9.5 4.25-9.5 9.5S8.75 22 14 22s9.5-4.25 9.5-9.5h-2z"/>
      <path d="M14 3.25V7.5c2.76 0 5 2.24 5 5h2C21 8.25 17.75 5 14 5v2.25A3.25 3.25 0 0 0 17.25 10.5H14v5A2.5 2.5 0 0 1 11.5 18v0a2.5 2.5 0 0 1-2.5-2.5v-11h2v11a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5h-3.25A3.25 3.25 0 0 1 14 7.25V3.25z"/>
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.204-.102-1.204-.59-1.387-.658-.183-.066-.316-.102-.448.102-.133.205-.515.658-.63.793-.116.135-.232.153-.43.051-1.24-.564-2.3-1.996-2.65-2.868-.116-.29.116-.266.33-.88.05-.15.026-.273-.025-.375-.05-.103-.448-1.077-.612-1.474-.163-.398-.33-.344-.448-.351-.12-.008-.26-.008-.4-.008a.733.733 0 0 0-.527.246c-.196.205-.733.701-.733 1.707 0 1.006.738 1.976.842 2.115.104.14 1.47 2.246 3.568 3.18.71.315 1.26.505 1.693.643.575.185 1.1.158 1.514-.31.38-.43 1.222-1.42 1.396-2.01.175-.59.175-1.09.07-1.192zm2.006-8.61C17.333 3.345 14.73 2 12 2 6.477 2 2 6.478 2 12c0 1.846.528 3.575 1.437 5.05L2 22l4.95-1.437A9.958 9.958 0 0 0 12 22c5.522 0 10-4.478 10-10 0-2.73-1.344-5.333-3.522-7.228zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  );
}

export const socialMediaProfiles = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/', icon: LinkedInIcon },
  { title: 'Github', href: 'https://github.com/SinHope', icon: GitHubIcon },
  { title: 'YouTube', href: 'https://www.youtube.com/channel/UCe2iiKDlnL3Rr1N2K-eMQRA', icon: YouTubeIcon },
  { title: 'TikTok', href: 'https://www.tiktok.com/@tiktokwithnas', icon: TikTokIcon },
  { title: 'Whatsapp', href: 'https://wa.me/6598620945', icon: WhatsAppIcon },
]

export function SocialMedia({ className, invert = false }) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
