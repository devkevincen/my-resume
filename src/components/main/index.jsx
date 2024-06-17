import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

Content.propTypes = {
  isEn: PropTypes.bool.isRequired,
}

export default function Content(props) {
  const { t } = useTranslation()

  return (
    <div>
      <div className="flex flex-col sm:flex-row bg-white h-full text-lg pb-10">
        <div className="flex-1 px-7 pt-7">
          <img src="/assets/avatar-white.png" alt="avatar" className="w-1/2" />
          <h1 className="text-2xl font-bold">{t('name')}</h1>
          <div className="text-xl mt-3">{t('job')}</div>
          <div className="mt-12 sm:mt-50">{t('connect')}</div>
          <div className="flex mt-2">
            <a href="https://x.com/cny1436000" target="_blank" className="mr-2">
              <svg viewBox="0 0 512 512" width="30" height="30">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="https://coderstack.site/" target="_blank" className="mr-2">
              <svg viewBox="0 0 448 512" width="30" height="30">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/devkevincen/"
              target="_blank"
              className="mr-2"
            >
              <svg viewBox="0 0 496 512" width="30" height="30">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            {props.isEn ? (
              <a href="https://www.youtube.com/@YU_CEN/" target="_blank">
                <svg viewBox="0 0 576 512" width="30" height="30">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </a>
            ) : (
              <a href="/assets/douyin.jpg" target="_blank">
                <svg viewBox="0 0 448 512" width="27" height="27">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="flex-1 px-7 pt-7">
          <h1 className="text-2xl font-bold">{t('dreamTitle')}</h1>
          <div className="mt-2">{t('dream')}</div>
          <h1 className="text-2xl font-bold mt-3">{t('aboutTitle')}</h1>
          <h1 className="text-xl font-bold mt-2">{t('eduactionTitle')}</h1>
          <div>
            <div className="">{t('educationalBackground')}</div>
            <div className="">{t('major')}</div>
          </div>
          <div>
            <div className="text-xl font-bold mt-2">{t('experienceTitle')}</div>
            <ol>
              <li className="underline">1. {t('experience1')}</li>
            </ol>
          </div>
          <div>
            <div className="text-xl font-bold mt-2">{t('skillsTitle')}</div>
            <ul>
              <li>HTML、CSS、JavaScript/TypeScript</li>
              <li>Vue.js、React.js、Tainwind CSS</li>
              <li>Java、Spring Boot、Redis、MySQL、RabbitMQ</li>
              <li>etc</li>
            </ul>
          </div>
          <div>
            <div className="text-xl font-bold mt-2">{t('doing')}</div>
            <ul>
              <li>{t('doing1')}</li>
              <li>{t('doing2')}</li>
              <li>{t('etc')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
