import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FlareIcon from '@mui/icons-material/Flare';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#secondary-features">Implementation</MobileNavLink>
            <MobileNavLink href="#testimonials">Integrations</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="#faq">FAQ</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/rightstandards">RightStandards<WorkspacesIcon /></MobileNavLink>
            <MobileNavLink href="/rightspark">RightSpark <FlareIcon /></MobileNavLink>
            <MobileNavLink href="/rightwait">RightWait <ScheduleIcon /></MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="https://meetings.hubspot.com/colin-mac-stewart1">Contact Sales</MobileNavLink>
            <MobileNavLink href="https://getrightwork.dev/">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <div className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                <Popover>
                  <Popover.Button
                    className="relative z-10 flex items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle Navigation"
                  >
                    {({ open }) =>
                    <div className="flex items-center" open={open}>
                      <h3>Products</h3>
                      <ArrowDropDownIcon />
                    </div>}
                  </Popover.Button>
                  <Transition.Root>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div></div>
                    </Transition.Child>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-100 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        as="div"
                        className="absolute inset-x-52 top-full mt-2 flex origin-top flex-col rounded-2xl bg-white p-7 text-lg tracking-tight text-slate-900 shadow-2xl ring-1 ring-slate-900/5 w-[450px]"
                      >
                        <div>
                          <h2 className="text-sm font-bold">Key Product Features</h2>
                          <Popover.Button as={Link} href="/#features">
                            <div className="flex hover:bg-gray-100 rounded-lg p-2 mt-2">
                              <div className="w-20">
                                <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex justify-center items-center text-blue-500">
                                  <CalendarMonthIcon />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-base ml-3 text-gray-700">RightWork Scheduling</h3>
                                  <ChevronRightIcon />
                                </div>
                                <p className="text-gray-500 text-sm ml-3">Automate your labor scheduling process - save time, control costs, and make amazing schedules</p>
                              </div>
                            </div>
                          </Popover.Button>
                        </div>
                        <hr className="m-4 border-slate-300/40" />
                        <div>
                          <h2 className="text-sm font-bold">Additional Options</h2>
                          <Popover.Button as={Link} href="/rightstandards">
                            <div className="flex hover:bg-gray-100 rounded-lg mt-2 p-2">
                              <div className="w-20">
                                <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex justify-center items-center text-blue-500">
                                  <WorkspacesIcon />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-base ml-3 text-gray-700">RightStandards Labor Model</h3>
                                  <ChevronRightIcon />
                                </div>
                                <p className="text-gray-500 text-sm ml-3">Easily build and manage your labor model with store-specific labor standards</p>
                              </div>
                            </div>
                          </Popover.Button>
                          <Popover.Button as={Link} href="/rightspark">
                            <div className="flex hover:bg-gray-100 rounded-lg mt-2 p-2">
                              <div className="w-20">
                                <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex justify-center items-center text-blue-500">
                                  <FlareIcon />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-base ml-3 text-gray-700">RightSpark Incentives</h3>
                                  <ChevronRightIcon />
                                </div>
                                <p className="text-gray-500 text-sm ml-3">Align incentives between your stores and your most important metrics for optimal business performance</p>
                              </div>
                            </div>
                          </Popover.Button>
                          {/* <Popover.Button as={Link} href="/rightwait">
                            <div className="flex hover:bg-gray-100 rounded-lg p-2 mt-2">
                              <div className="w-20">
                                <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex justify-center items-center text-blue-500">
                                  <ScheduleIcon />
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-base ml-3 text-gray-700">RightWait Waitlist</h3>
                                  <ChevronRightIcon />
                                </div>
                                <p className="text-gray-500 text-sm ml-3">Seamlessly manage your waiting and host experience - turn tables faster and delight your customers</p>
                              </div>
                            </div>
                          </Popover.Button> */}
                        </div>
                      </Popover.Panel>
                    </Transition.Child>
                  </Transition.Root>
                </Popover>
              </div>
              <NavLink href="/#secondary-features">Implementation</NavLink>
              {/* <NavLink href="#testimonials">Integrations</NavLink> */}
              <div className="hidden lg:block">
                <NavLink href="/#pricing">Pricing</NavLink>
              </div>
              <div className="hidden lg:block">
                <NavLink href="/#faq">FAQ</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="https://getrightwork.dev/">Sign in</NavLink>
            </div>
            <div className="hidden sm:block">
              <Button href="https://meetings.hubspot.com/colin-mac-stewart1" target="_blank" color="blue">
                <span>
                  Contact Sales
                </span>
              </Button>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
