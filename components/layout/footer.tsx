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
              target="_blank"
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
                  d="M11.6027 1H13.4799L8.89772 6.21015L14.2699 13.6H10.1463L6.8831 9.01985L3.16924 13.6H1.29053L6.16544 8.05785L1 1H5.23231L8.19295 5.21415L11.6027 1ZM10.7157 12.3399H11.8637L4.60266 2.19415H3.37335L10.7157 12.3399Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              className="text-[var(--rss-color-text-3)] hover:text-[var(--rss-color-text)]"
              href="https://github.com/AIXCap/rss-website"
              target="_blank"
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
            <a
              className="text-[var(--rss-color-text-3)] hover:text-[var(--rss-color-text)]"
              href="https://discord.gg/H8kNygrx"
              target="_blank"
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
                  d="M12.5019 2.41695C11.5378 1.97705 10.5065 1.65431 9.43401 1.47296C9.42594 1.47159 9.41764 1.47233 9.41011 1.47508C9.40258 1.47782 9.39618 1.47546 9.39618 1.48546C9.26524 1.72525 9.12085 2.03545 9.01766 2.27727C7.87454 2.10573 6.73535 2.10573 5.62685 2.27727C5.52366 2.03069 5.37445 1.72525 5.24275 1.48546C5.24275 1.47546 5.23635 1.47782 5.22882 1.47508C5.22129 1.47233 5.21299 1.47159 5.20492 1.47296C4.13239 1.65431 3.10186 1.97705 2.13701 2.41695C2.13087 2.41932 2.12547 2.42361 2.12166 2.42917C0.310636 5.17303 -0.185841 7.84693 0.0577299 10.4863C0.0584189 10.4962 0.0646739 10.5057 0.0729199 10.5114C1.35889 11.4447 2.60006 12.0186 3.81889 12.4006C3.82696 12.4027 3.83526 12.4003 3.84095 12.3941C4.12741 11.9981 4.38459 11.5793 4.60723 11.1377C4.61199 11.1277 4.60692 11.1158 4.59618 11.1114C4.19126 10.9547 3.80461 10.7641 3.43095 10.5495C3.41945 10.5429 3.41868 10.5253 3.42941 10.5175C3.50767 10.4593 3.58594 10.3987 3.66114 10.3374C3.66759 10.332 3.67643 10.3305 3.68373 10.3335C6.11748 11.4515 8.74039 11.4515 11.1395 10.3335C11.1468 10.3297 11.1557 10.3313 11.1629 10.3366C11.2381 10.3979 11.3163 10.4593 11.3953 10.5175C11.4061 10.5253 11.4061 10.5429 11.3938 10.5495C11.0202 10.7687 10.6335 10.9547 10.2286 11.1106C10.2179 11.115 10.2136 11.1277 10.2183 11.1377C10.4463 11.5785 10.7035 11.9973 10.9838 12.3933C10.9887 12.4003 10.9978 12.4027 11.0058 12.4006C12.2331 12.0186 13.4743 11.4447 14.7603 10.5114C14.7693 10.5057 14.7748 10.4969 14.7755 10.4871C15.0685 7.4267 14.2854 4.77685 12.5102 2.43002C12.5072 2.42361 12.5018 2.41932 12.4956 2.41695H12.5019ZM4.96016 8.90257C4.22861 8.90257 3.62659 8.23675 3.62659 7.41767C3.62659 6.59858 4.21448 5.93276 4.96016 5.93276C5.71293 5.93276 6.30786 6.60571 6.29373 7.41767C6.29373 8.23675 5.70587 8.90257 4.96016 8.90257ZM9.68721 8.90257C8.95566 8.90257 8.35364 8.23675 8.35364 7.41767C8.35364 6.59858 8.94153 5.93276 9.68721 5.93276C10.44 5.93276 11.0349 6.60571 11.0208 7.41767C11.0208 8.23675 10.44 8.90257 9.68721 8.90257Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Discord</span>
            </a>
            <a
              className="text-[var(--rss-color-text-3)] hover:text-[var(--rss-color-text)]"
              href="https://t.me/+3ma6wQJ6uVwzM2U1"
              target="_blank"
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
                  d="M14.7576 1.515L12.5616 13.1392C12.4016 13.8632 11.9816 14.0352 11.3696 13.6952L7.93561 11.1272L6.28361 12.7072C6.11161 12.8792 5.96761 13.0232 5.63761 13.0232L5.87161 9.52316L12.1396 3.84716C12.3996 3.61316 12.0856 3.48316 11.7396 3.71716L3.91561 8.58716L0.515609 7.51516C-0.188391 7.29516 -0.200391 6.81516 0.667609 6.47516L13.8176 0.511156C14.3976 0.291156 14.9456 0.635156 14.7576 1.51516V1.515Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Telegram</span>
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
