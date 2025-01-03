import { useTranslations } from 'next-intl'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--pacifico'
})

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="w-full border-t border-[var(--rss-color-border)] box-border">
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
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
            <p className="max-w-xs">{t('description')}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-bold text-[var(--rss-color-text)]">
                {t('footer.resources')}
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/guide/introduction/what-is-it.html"
                    target="_blank"
                  >
                    {t('footer.docs')}
                  </a>
                </li>
                {/* <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="/Blog"
                  >
                    {t('footer.blog')}
                  </a>
                </li> */}
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/about/changelog.html"
                    target="_blank"
                  >
                    {t('footer.releases')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-bold text-[var(--rss-color-text)]">
                {t('footer.more')}
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/about/about-us.html"
                    target="_blank"
                  >
                    {t('footer.about')}
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/about/contact-us.html"
                    target="_blank"
                  >
                    {t('footer.contact')}
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/about/contact-us.html"
                    target="_blank"
                  >
                    {t('footer.feedback')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-bold text-[var(--rss-color-text)]">
                {t('footer.legal')}
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/policy/user-agreement.html"
                    target="_blank"
                  >
                    {t('footer.terms')}
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="https://doc.rsstabs.com/policy/privacy-policy.html"
                    target="_blank"
                  >
                    {t('footer.privacy')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            <a
              className="text-[var(--rss-color-text-3)] hover:text-[var(--rss-color-text)]"
              href="https://x.com/rsstabs"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-[var(--rss-color-text-3)] hover:text-[var(--rss-color-text)]"
              href="https://github.com/AIXCap/rss-website"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Github</span>
            </a>
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {t('footer.copyright', {
              year: new Date().getFullYear()
            })}
          </span>
        </div>
      </div>
    </footer>
  )
}
