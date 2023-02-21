import logo from '@/images/screenshots/logo.png'
import Image from 'next/image'

export function Logo(props) {
  return (
    <div className="mb-1 mr-2">
      <Image
        src={logo}
        alt="A picture of the RightWork logo"
        width={150}
      />
    </div>
  )
}
