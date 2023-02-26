import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import backgroundImage from '@/images/background-faqs.jpg'
import standardsImage from '@/images/screenshots/standards.png'
import standardsImage2 from '@/images/screenshots/standards2.png'
import standardsImage3 from '@/images/screenshots/standards3.png'
import standardsImage4 from '@/images/screenshots/standards4.png'
import standardsImage5 from '@/images/screenshots/standards5.png'
import standardsImage6 from '@/images/screenshots/standards6.png'
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export default function RightStandards() {
  return(
    <>
      <Head>
        <title>RightStandards - Build your labor model</title>
        <link rel="canonical" href="https://www.getrightwork.com/rightstandards" />
      </Head>
      <div className="overflow-hidden">
        <Header />
        <div>
          <div className="relative py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto w-[70%] text-center">
                <h1 className="text-2xl text-gray-600 font-bold font-display">RightStandards <WorkspacesIcon /></h1>
                <h3 className="text-2xl font-medium text-gray-900 sm:text-5xl mt-3">
                  Take control of your labor standards to generate better forecasts
                </h3>
                <p className="mt-6 text-lg text-gray-600">
                  Easily build and manage your labor model with store-specific inputs and then deploy directly to RightWork or other top workforce management solutions with one click.
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
                    src={standardsImage}
                    alt="A screenshot showing a table with a list of a store's plays."
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
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Customize your labor model with ease</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Easy Labor Standard Management</p>
                        <ul>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Quickly input and manage labor standards with an intuitive interface and easy imports.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Customize labor models to fit your business needs and optimize workforce management.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Keep up with location-specific labor requirements by easily updating labor standards.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 lg:mt-16 xl:mt-16">
                      <div>
                        <Image
                          src={standardsImage2}
                          alt="A screenshot showing a table where you can input a routine for a the Labor Model."
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
                    <div className="sm:px-6 lg:px-0 hidden lg:block mt-20">
                      <div>
                        <Image
                          src={standardsImage3}
                          alt="A screenshot of a Coverage Graph showing a bar chart of the optimal vs scheduled workload at specific times across the day."
                          style={{borderRadius: "20px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                    </div>
                    <div className="px-6 md:px-0 lg:pt-4 lg:pl-16">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">See how input standards affect forecasts in real-time</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sandbox/Playground for Testing</p>
                        <ul>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Test different inputs and demand forecasts to find the optimal labor model for your business.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Accurately predict labor needs so your forecasts do not produce over or understaffing.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Increase workforce efficiency by making informed decisions about labor management.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 flex justify-center items-center lg:hidden">
                      <div>
                        <Image
                          src={standardsImage3}
                          alt="A screenshot of a Coverage Graph showing a bar chart of the optimal vs scheduled workload at specific times across the day."
                          style={{borderRadius: "20px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
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
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Effortlessly manage your different labor model versions</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Version Control System</p>
                        <ul>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Keep track of all changes made to labor models with our Git-style version control system.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Revert back to previous labor models and analyze the impact of any changes made.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Collaborate with team members on labor model management with full transparency and accountability.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 lg:mt-16 xl:mt-1">
                      <div>
                        <Image
                          src={standardsImage6}
                          alt="A screenshot showing a list of commits to the Labor Model and one of the list items is selected with more information about that commit."
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
                    <div className="sm:px-6 lg:px-0 hidden lg:flex justify-center items-center mt-20">
                      <div>
                        <Image
                          src={standardsImage5}
                          alt="A screenshot of the RightWork's daily scheduling view."
                          style={{borderRadius: "10px", border: "3px solid #1C2541", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
                        />
                      </div>
                    </div>
                    <div className="px-6 md:px-0 lg:pt-4 lg:pl-20">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Streamline your labor management workflow</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seamless Integration with RightWork</p>
                        <ul>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Easily integrate your labor model with RightWork for streamlined workforce management.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Optimize labor budgets and forecasts with accurate, location-specific labor standards.
                          </li>
                          <li className="mt-6 text-lg leading-8 text-gray-600">
                            - Turn those forecasts and budgets directly into optimal schedules with RightWorks auto-scheduling feature.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0 flex justify-center items-center lg:hidden">
                      <div>
                        <Image
                          src={standardsImage5}
                          alt="A screenshot of the RightWork's daily scheduling view."
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
