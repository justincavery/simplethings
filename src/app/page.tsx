import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoLauraYoga from '@/images/clients/laura-yoga/logo-light.svg'
import logoPeopleScout from '@/images/clients/people-scout/logo-light.svg'
import logoNftx from '@/images/clients/nftx/logo-light.svg'
import logoFloorDao from '@/images/clients/floor/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Laura Yoga', logoLauraYoga],
  ['PeopleScout', logoPeopleScout],
  ['NFTX', logoNftx],
  ['FloorDAO', logoFloorDao],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with dozens of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Empowering Web Innovations for Tomorrow."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Performance and reliability aren't just crucial for top-tier websites; they are essential assets. Missed performance marks often translate to missed revenue. We ensure you don't miss out.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Elevate Your Web Journey with Our Expertise."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Opportunities await when you leverage the right expertise. Let us be your partners in pioneering Web3 projects, speeding up site performance, and more.
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
            <ListItem title="Website Consultancy.">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Boosted Web Performance.">
            With the web's constant evolution, the need for speed is paramount. We specialize in supercharging your site's performance for the best user experience.
            </ListItem>
            <ListItem title="DevOps for Web3 Projects.">
            Our dedicated team is at the forefront of Web3 development, ensuring seamless integration, robust security, and high performance.
            </ListItem>
            <ListItem title="Custom Content Management.">
            Every project is unique, and we recognize that. We offer tailored CMS solutions to cater to your specific needs, moving away from the one-size-fits-all approach.
            </ListItem>
            <ListItem title="Web3 Website Performance.">
            The future is Web3, and we ensure your site is optimized, fast-loading, and ahead of the curve.
            </ListItem>
            <ListItem title="Web Security for Web3.">
            With the advent of Web3, security is more important than ever. Our team ensures your site remains impenetrable and safe.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
           Leading UK-Based Consultancy for the Web's Next Generation.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Specialising in both Web2 and Web3 projects, we push the boundaries of speed, performance, and security.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'PeopleScout', logo: logoPeopleScout }}
      >
        Justin was able to provide us with leading technology solutions and advice. 
        We're always happy to put them in front of the client knowing they'll deliver every time.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
