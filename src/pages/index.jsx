import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Integrations } from '@/components/Integrations'
import { Testimonial } from '@/components/Testimonial'


export default function Home() {
  return (
    <>
      <Head>
        <title>RightWork - Auto-scheduling made simple</title>
        <meta
          name="description"
          content="Auto-scheduling made simple."
        />
        <link rel="canonical" href="https://www.getrightwork.com/" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonial />
        <CallToAction />
        <Integrations />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
