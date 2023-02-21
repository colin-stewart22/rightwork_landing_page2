import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt="A background gradient images with shades of blue, light blue, and purple."
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            What are your waiting for?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Get started saving time, optimizing labor, controlling costs, reducing churn, and delighting customers.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  )
}
