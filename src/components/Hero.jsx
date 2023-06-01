import React from 'react'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import RectangleIcon from '@mui/icons-material/Rectangle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export function Hero() {

  const [videoSection, setVideoSection] = React.useState(false)

  function handleClick() {
    setVideoSection(prevState => !prevState)
  }

  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32 relative">
      <div className="hidden absolute top-64 left-64 text-orange-300 opacity-40 -z-10 md:block">
        <CircleIcon style={{ fontSize: "110px"} }/>
      </div>
      <div className="hidden absolute text-orange-300 opacity-40 right-44 top-10 -z-10 md:block">
        <CircleIcon style={{ fontSize: "160px"} }/>
      </div>
      <div className="hidden absolute text-blue-300 opacity-40 left-96 top-5 -z-10 lg:block">
        <CircleIcon style={{ fontSize: "240px"} }/>
      </div>
      <div className="hidden absolute text-blue-300 opacity-40 left-20 top-5 -z-10 md:block">
        <CircleIcon style={{ fontSize: "100px"} }/>
      </div>
      <div className="hidden absolute text-blue-300 opacity-40 right-20 top-96 -z-10 md:block">
        <CircleIcon style={{ fontSize: "140px"} }/>
      </div>
      <div className="hidden absolute text-blue-300 opacity-40 left-20 top-96 -z-1 lg:block">
        <CircleIcon style={{ fontSize: "50px"} }/>
      </div>
      {/* <div className="absolute text-blue-300 opacity-40 right-24 top-96 -z-10">
        <CircleIcon style={{ fontSize: "220px", rotate: "20deg"} }/>
      </div>
      <div className="absolute text-blue-300 opacity-40 left-12 top-20 -z-10">
        <CircleIcon style={{ fontSize: "180px", rotate: "45deg"} }/>
      </div>
      <div className="absolute text-blue-300 opacity-40 left-1/2 top-10 -z-10">
        <CircleIcon style={{ fontSize: "80px", rotate: "45deg"} }/>
      </div> */}
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">AI-powered</span>
        </span>{' '}
        forecasting and scheduling
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Forecast more precisely and create weekly schedules that work for both your employees and your business at the click of a button. Save time, control costs, and take the guesswork out of scheduling.
      </p>
      <div className="mt-10 mb-16 flex justify-center gap-x-6">
        <Button href="/register">Get started</Button>
        <Button
          variant="outline"
          // href="https://www.loom.com/share/89ddd51035114c4791a53cb34fc63e2b"
          // target="_blank"
          onClick={handleClick}
        >
          {!videoSection ?
          <div className="flex items-center">
            <div className="text-blue-600">
              <PlayArrowIcon fontSize="small" />
            </div>
            <span className="ml-1">Watch video</span>
          </div> :
          <div>Hide video</div>}
        </Button>
      </div>
      {videoSection &&
      <div className="w-full md:w-3/4 m-auto rounded-xl bg-blue-200">
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.loom.com/embed/89ddd51035114c4791a53cb34fc63e2b?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true."
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '15px'
            }}
          >
          </iframe>
        </div>
      </div>}
    </Container>
  )
}
