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
        <title>Go To App Login - RightWork</title>
        <link rel="canonical" href="https://www.getrightwork.com/login" />
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
              Go to RightWork app login
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
        <div className="mt-10">
          <a href="https://getrightwork.dev/">
            <Button
              variant="solid"
              color="blue"
              className="w-3/4"
            >
              <span>
                Proceed to login <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </a>
        </div>
      </AuthLayout>
    </>
  )
}
