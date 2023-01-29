import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - RightWork</title>
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
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Book
              </Link>{' '}
              a call with sales.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
