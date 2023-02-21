import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Register() {

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = {
      firstName,
      lastName,
      company,
      phone,
      email
    }

    const response = await fetch('api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age': 2592000,
        'Access-Control-Allow-Credentials': true,
      },

      body: JSON.stringify(form)
    })

    const content = await response.json();
    console.log(content)

    // alert(content.data.tableRange)

    console.log(process.env)

    console.log(form)

    setFirstName("")
    setLastName("")
    setCompany("")
    setPhone("")
    setEmail("")

  }



  return (
    <>
      <Head>
        <title>Book a Call - RightWork </title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <div className="absolute top-10 left-10">
            <Link href="/" aria-label="Home">
              <div>
                <ArrowBackIcon />
              </div>
            </Link>
          </div>
          <Link href="/" aria-label="Home">
            <div className="mt-10">
              <Logo className="h-10 w-auto" />
            </div>
          </Link>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Book a Call
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Talk to one of our sales specialists today
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            value={firstName}
            required
            onChange={event => setFirstName(event.target.value)}
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            value={lastName}
            autoComplete="family-name"
            required
            onChange={event => setLastName(event.target.value)}
          />
          <TextField
            className="col-span-full"
            label="Company"
            id="company"
            name="company"
            type="company"
            value={company}
            autoComplete="company"
            required
            onChange={event => setCompany(event.target.value)}
          />
          <TextField
            className="col-span-full"
            label="Phone number"
            id="phone"
            name="phone"
            type="phone"
            value={phone}
            autoComplete="phone"
            required
            onChange={event => setPhone(event.target.value)}
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={email}
            autoComplete="email"
            required
            onChange={event => setEmail(event.target.value)}
          />
          <div className="col-span-full mt-2">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Book <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
