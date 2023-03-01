import React from "react"
import Image from 'next/image'
import screenshotTest5 from '@/images/screenshots/test5.png'
import RamenDiningIcon from '@mui/icons-material/RamenDining';

export function Testimonial() {
  return(
    <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-y-0 right-[5%] -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="text-blue-600 flex justify-center">
          <RamenDiningIcon style={{ fontSize: "50px" }}/>
        </div>
        <figure className="mt-8">
          <blockquote className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
            <p>
              “I have seen many scheduling tools across my career in the service industry and RightWork combines the best parts of all of them. The autoscheduler feels like we are giving our managers superpowers and the forecasted labor budgets make it easy to control costs as we grow. This should be a no-brainer for all restaurant chains.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            {/* <div className="mx-auto h-10 w-10 rounded-full bg-red-200"></div> */}
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Lars Koerber</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">President of Operations at Kizuki</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
