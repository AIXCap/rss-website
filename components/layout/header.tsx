import { useTranslations } from 'next-intl'
import { Pacifico } from 'next/font/google'
import ShimmerButton from '@/components/ui/shimmer-button'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { Link } from '@/i18n/routing'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--pacifico'
})

export default function Header() {
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 box-border transition-colors backdrop-blur-md h-16 box-border">
      <div className="mx-auto w-full h-full max-w-screen-xl xl:pb-2 flex justify-between items-center px-5 box-border">
        <a className="flex items-center gap-2" href="/">
          <svg
            className="w-9 h-9"
            viewBox="0 0 1154 1024"
            fill="none"
            p-id="781"
          >
            <path
              d="M145.31 382.692l-16.067-58.37c-11.964-44.245 13.692-89.937 57.712-102.738l254.75-70.582-296.381 231.69z m871.46 16.832L751.05 869.497c-22.755 39.818-73.474 53.678-113.313 30.948L348.856 737.104a86.147 86.147 0 0 1-24.688-21.43c-9.966-12.94-15.911-28.525-17.081-44.818s2.473-32.568 10.483-46.8L583.227 154.07a77.874 77.874 0 0 1 22.405-25.453 83.286 83.286 0 0 1 90.635-5.839l289.226 163.681c39.818 22.61 53.81 73.202 31.26 113.061z m-385.258-237.77c-18.131 14.167-21.341 40.362-7.168 58.486a41.782 41.782 0 0 0 58.487 7.168c8.71-6.81 14.356-16.794 15.699-27.756s-1.723-22.019-8.524-30.73c-14.173-18.124-40.363-21.335-58.494-7.168zM197.56 553.805c-28.2-36.293-21.806-88.556 14.329-116.972L420.03 274.129 234.769 601.415l-37.205-47.598z m521.989 266.343c-3.229-11.375-10.066-19.973-20.507-25.796s-21.347-7.113-32.722-3.872c-11.373 3.231-19.973 10.066-25.795 20.507-5.82 10.435-7.113 21.347-3.872 32.722 3.229 11.373 10.066 19.973 20.507 25.795 10.435 5.82 21.347 7.114 32.722 3.872 11.373-3.229 19.973-10.066 25.795-20.507 5.82-10.435 7.113-21.347 3.872-32.72z m66.941-104.006c-1.224-3.929-3.738-6.784-7.538-8.567-21.814-9.938-44.703-15.811-68.664-17.619s-47.445 0.617-70.476 7.269c-23.091 6.454-44.338 16.751-63.769 30.889-19.418 14.14-35.793 31.173-49.132 51.099l-0.544 0.974c-1.888 3.389-2.345 6.819-1.367 10.266 0.824 4.048 3.122 7.122 6.909 9.234l26.415 14.72c3.267 1.823 6.669 2.307 10.216 1.465s6.366-2.823 8.439-5.938c19.519-28.275 45.785-47.103 78.805-56.483 33.013-9.382 65.264-7.183 96.739 6.598 3.409 1.559 6.839 1.764 10.305 0.615s6.103-3.354 7.918-6.619l14.722-26.415c2.11-3.781 2.447-7.618 1.021-11.488z m55.937-99.892c-1.156-4.067-3.572-6.947-7.232-8.65-35.126-17.36-72.203-27.756-111.227-31.213-39.027-3.459-77.464 0.252-115.326 11.117-37.92 10.666-72.561 27.735-103.936 51.195-31.373 23.461-57.429 51.817-78.18 85.05l-0.325 0.583c-1.888 3.391-2.321 6.919-1.274 10.569 0.893 3.922 3.172 6.895 6.819 8.927l27.986 15.6c3.265 1.823 6.732 2.26 10.416 1.324s6.506-3.002 8.454-6.189c17.328-27.101 38.839-50.035 64.518-68.814s52.995-32.272 81.953-40.496c28.949-8.226 59.282-11.115 90.995-8.657s62.03 10.717 90.949 24.794c3.33 1.684 6.819 1.964 10.444 0.824s6.386-3.409 8.274-6.8l15.6-27.986c2.034-3.654 2.406-7.376 1.105-11.181z"
              p-id="782"
              fill="white"
            ></path>
          </svg>
          <span className={`${pacifico.className} font-700 text-[22px]`}>
            RssTabs
            <span className="text-[var(--rss-color-text-2)]">.com</span>
          </span>
        </a>

        <div className="flex items-center h-full text-[14px]">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="opacity-70 hover:opacity-100">
              {t('header.features')}
            </Link>
            <Link href="/#hot-feeds" className="opacity-70 hover:opacity-100">
              {t('header.pricing')}
            </Link>
            <Link href="/docs" className="opacity-70 hover:opacity-100">
              {t('header.docs')}
            </Link>
            <Link href="/support" className="opacity-70 hover:opacity-100">
              {t('header.support')}
            </Link>
          </div>
          <div className="hidden md:block w-[1px] h-5 bg-[var(--rss-color-border)] rounded-full ml-8 mr-5"></div>
          {/* <ShimmerButton className="shadow-xl" background="var(--rss-color-bg)">
            <span className="text-center text-sm text-[var(--rss-color-text)]">
              {t('get-free')}
            </span>
          </ShimmerButton> */}
          <Button className="rounded-full" variant="ghost" size="icon">
            <Languages />
          </Button>
        </div>
      </div>
    </header>
  )
}
