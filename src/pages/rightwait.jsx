import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import backgroundImage from '@/images/background-faqs.jpg'
import ScheduleIcon from '@mui/icons-material/Schedule';
import waitlistImage from '@/images/screenshots/waitlist.png'
import waitlistImage2 from '@/images/screenshots/waitlist2.png'
import waitlistImage3 from '@/images/screenshots/waitlist3.png'
import waitlistImage4 from '@/images/screenshots/waitlist4.png'
import waitlistImage5 from '@/images/screenshots/waitlist5.png'
import waitlistImage6 from '@/images/screenshots/waitlist6.png'

export default function RightWait() {
  return(
    <>
      <Head>
        <title>RightWait - Manage your waitlist</title>
        <link rel="canonical" href="https://www.getrightwork.com/rightwait" />
      </Head>
      <div className="overflow-hidden">
        <Header />
        <div>
          <div className="relative py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto w-[70%] text-center">
                <h1 className="text-2xl text-gray-600 font-bold font-display">RightWait <ScheduleIcon /></h1>
                <h3 className="text-2xl font-medium text-gray-900 sm:text-5xl mt-3">
                  Decrease wait times, increase table turnover, and delight customers
                </h3>
                <p className="mt-6 text-lg text-gray-600">
                  Effortlessly manage your waitlist and customer seating preferences - complete with automated text updates, simplified reservations, and integration with RightWork scheduling for better forecasting.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/register"
                    className="rounded-full bg-black px-8 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24 pb-16">
                <Image
                  className="absolute top-0 max-w-none translate-x-[-30%] -translate-y-1/4 -z-10"
                  src={backgroundImage}
                  alt="A background gradient image with shades of pink and light blue."
                  width={2000}
                  height={946}
                  unoptimized
                />
                <div>
                  <Image
                    src={waitlistImage6}
                    alt="A screenshot showing the backend of a waitlist app with a table of people waiting with relevant information."
                    style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Allow customers to join your waitlist from anywhere</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ultimate Flexibility</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Experience the benefits of virtual waitlists by offering customers the option to sign up through multiple channels. Guests can easily join your waitlist through a kiosk, their phone, or your website.
                        </p>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 lg:mt-16 xl:mt-1 relative">
                      <div>
                        <Image
                          src={waitlistImage4}
                          alt="A screenshot showing the frontend of a waitlist app with relative inputs like party size and type of seating preferred."
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                      <div className="hidden lg:block absolute -left-32 -bottom-24">
                        <Image
                          src={waitlistImage3}
                          alt="A screenshot showing a ticket received after entering the inputs for the waitlist app."
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                          width={250}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="sm:px-6 lg:px-0 hidden lg:flex justify-center items-center">
                      <div>
                        <Image
                          src={waitlistImage}
                          alt="A screenshot showing a text conversation between someone waiting and a bot giving updates on their status."
                          style={{borderRadius: "20px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                          width={300}
                        />
                      </div>
                    </div>
                    <div className="px-6 md:px-0 lg:pt-4 lg:pl-1">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">More effective communtication with customers</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dynamic, Automated Texts</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Send automated, customizable texts to your waiting customers to update them on their place in line so they can go do whatever they please. Say goodbye to traditional lines and start delighting customers.
                        </p>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 flex justify-center items-center lg:hidden">
                      <div>
                        <Image
                          src={waitlistImage}
                          alt="A screenshot showing a text conversation between someone waiting and a bot giving updates on their status."
                          style={{borderRadius: "20px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                          width={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Simplify appointment booking and scheduling</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reservations Made Easy</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Streamline your appointment booking and scheduling process with our online booking option. With automated reminders and self-service updates, guests can easily manage their appointments without involving your staff.
                        </p>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 lg:mt-16 xl:mt-1">
                      <div>
                        <Image
                          src={waitlistImage5}
                          alt="A screenshot of a waitlist app where the user can enter in their phone number or click on a button to skip."
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="sm:px-6 lg:px-0 hidden lg:flex justify-center items-center">
                      <div>
                        <Image
                          src={waitlistImage2}
                          alt=""
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                    </div>
                    <div className="px-6 md:px-0 lg:pt-4 lg:pl-20">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Take advantage of customer data</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Better Labor Recommendations</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          Used in conjuctions with the RightWork scheduling app, get more accurate, real-time demand forecasts which allows you to schedule labor more efficiently.
                        </p>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 flex justify-center items-center lg:hidden">
                      <div>
                        <Image
                          src={waitlistImage2}
                          alt="A screenshot of a Deployment Guide showing a bar chart of the employee count and roles at specific times across the day."
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
