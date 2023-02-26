import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

import toastLogo from '@/images/logos/toast.png'
import shiftsLogo from '@/images/logos/7shifts.png'
import squareLogo from '@/images/logos/square.png'
import lightspeedLogo from '@/images/logos/lightspeed.png'


export function Integrations() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl tracking-tight text-slate-900 sm:text-4xl px-5">
            RightWork is flexible
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 px-8">
            It can be used as a standalone scheduling app or can integrate directly into your current labor management system. Pull schedules from your system, optimize them in RightWork, and push them back in minutes.
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center">
          <h4 className="text-2xl">Integrations</h4>
          <div className="w-10/12 flex flex-col justify-center items-center md:flex-row mt-4">
            <div className="w-1/4 h-full mt-4 flex justify-center">
              <Image
                src={toastLogo}
                alt="A picture of the Toast logo"
                width={150}
              />
            </div>
            <div className="w-1/4 h-full mt-4 flex justify-center">
              <Image
                src={shiftsLogo}
                alt="A picture of the 7shift logo"
                width={150}
              />
            </div>
            <div className="w-1/4 h-full mt-6 sm:mt-8 flex justify-center">
              <Image
                src={squareLogo}
                alt="A picture of the Square logo"
                width={150}
              />
            </div>
            <div className="w-1/4 h-full mt-6 sm:mt-8 mb-6 sm:mb-2 flex justify-center">
              <Image
                src={lightspeedLogo}
                alt="A picture of the Lightspeed logo"
                width={150}
                height={50}
              />
            </div>
          </div>
          <h4 className="text-xl mt-4">and many more</h4>
        </div>
        {/* <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}
