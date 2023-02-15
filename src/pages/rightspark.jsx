import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import backgroundImage from '@/images/background-faqs.jpg'
import contestImage from '@/images/screenshots/contest.png'
import contestImage2 from '@/images/screenshots/contest2.png'
import contestImage3 from '@/images/screenshots/contest3.png'
import contestImage4 from '@/images/screenshots/contest4.png'
import contestImage5 from '@/images/screenshots/contest5.png'
import FlareIcon from '@mui/icons-material/Flare';

export default function RightSpark() {

  return(
    <div className="overflow-hidden">
      <Header />
      <div>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto w-[70%] text-center">
              <h1 className="text-2xl text-gray-600 font-bold font-display">RightSpark <FlareIcon /></h1>
              <h3 className="text-2xl font-medium text-gray-900 sm:text-5xl mt-3">
                Incentivize your stores to hit your most important metrics
              </h3>
              <p className="mt-6 text-lg text-gray-600">
                Easily set up contests, competitions, and payouts that reward managers for hitting key performance indicators (KPIs) or outperforming their peers
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
            <div className="mt-16 flow-root sm:mt-24 pb-10">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  className="absolute top-0 max-w-none translate-x-[-30%] -translate-y-1/4 -z-10"
                  src={backgroundImage}
                  alt=""
                  width={2000}
                  height={946}
                  unoptimized
                />
                <div className="p-5">
                  <Image
                    src={contestImage}
                    alt=""
                    style={{borderRadius: "10px", border: "3px solid #1C2541"}}
                  />
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
                      <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Motivate your managers</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create a Contest</p>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Make contests in minutes that can quickly elevate your store perfomance through the power of aligned incentives
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9 xl:pl-5">
                          <dt className="inline font-semibold text-gray-900">
                            Choose participants.
                          </dt>{' '}
                          <dd className="inline">You have complete control over which stores can participate in each contest.</dd>
                        </div>
                        <div className="relative pl-9 xl:pl-5 xl:pr-7">
                          <dt className="inline font-semibold text-gray-900">
                            Standalone contest.
                          </dt>{' '}
                          <dd className="inline">One type of contest is `standalone`, where individual stores can compete to hit certain metric thresholds that you define.</dd>
                        </div>
                        <div className="relative pl-9 xl:pl-5 xl:pr-7">
                          <dt className="inline font-semibold text-gray-900">
                            Competition contest.
                          </dt>{' '}
                          <dd className="inline">The other type is `competition`, where multiple stores can compete against each other to achieve prizes and incentives that you set.</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="sm:px-6 lg:px-0 lg:mt-16 xl:mt-5 relative">
                    <div>
                      <Image
                        src={contestImage2}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                      />
                    </div>
                    <div className="absolute -bottom-52 -left-20 hidden xl:block">
                      <Image
                        src={contestImage5}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        width={600}
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
                  <div className="sm:px-6 lg:px-0 flex justify-center items-center hidden lg:block relative">
                    <div className="lg:absolute">
                      <Image
                        src={contestImage3}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        width={300}
                      />
                    </div>
                    <div className="lg:absolute left-60 top-32 hidden lg:block">
                      <Image
                        src={contestImage4}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        width={300}
                      />
                    </div>
                  </div>
                  <div className="px-6 md:px-0 lg:pt-4 lg:pl-12">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Hit your targets</h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Metrics & Payouts</p>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Get the results you want with metrics and payouts you can design to meet your business objectives
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9 xl:pl-5">
                          <dt className="inline font-semibold text-gray-900">
                            Take control over metrics.
                          </dt>{' '}
                          <dd className="inline">RightSpark allows you to select the metrics that matter most to your business and incentivize your store managers to achieve them.</dd>
                        </div>
                        <div className="relative pl-9 xl:pl-5">
                          <dt className="inline font-semibold text-gray-900">
                            Flexible payout options.
                          </dt>{' '}
                          <dd className="inline">You have the power to choose how and when your stores get paid out, giving you greater control over your incentive programs.</dd>
                        </div>
                        <div className="relative pl-9 xl:pl-5">
                          <dt className="inline font-semibold text-gray-900">
                            Data driven insights.
                          </dt>{' '}
                          <dd className="inline">Gain valuable business intelligence and intuitive weekly performance data to see how the stores are performing against the target metrics.</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="sm:px-6 lg:px-0 flex justify-center items-center lg:hidden relative">
                    <div className="md:mr-48 mr-24">
                      <Image
                        src={contestImage3}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        width={300}
                      />
                    </div>
                    <div className="absolute md:right-48 right-10 top-48 md:top-20">
                      <Image
                        src={contestImage4}
                        alt=""
                        style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        width={300}
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
  )
}
