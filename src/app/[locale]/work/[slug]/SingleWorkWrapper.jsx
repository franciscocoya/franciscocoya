'use client'

import BaseButton from '@/components/buttons/baseButton'
import TechLogo from '@/components/cards/techLogo/techLogo'
import ShareIcons from '@/components/socialnetworks/shareIcons/shareIcons'
import {
  checkIsSlugValid,
  getPortfolioItemBySlug,
  getRelatedProjects,
} from '@/lib/portfolio'
import { getWorkThumbnail } from '@/lib/thumbs'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs'
import styles from './page.module.scss'

function SingleWorkWrapper() {
  const [workData, setWorkData] = useState(null)
  const pathname = usePathname()
  const t = useTranslations('Work')
  const locale = useLocale()
  const router = useRouter()

  const getWorkData = () => {
    if (!checkIsSlugValid(_getSlugByLocale(pathname))) {
      notFound()
    }

    // i.e. /work/spotify-clone -> spotify-clone
    const singleWorkSlug = _getSlugByLocale(pathname)

    const workData = getPortfolioItemBySlug(singleWorkSlug)

    const relatedProjects = getRelatedProjects(singleWorkSlug)
    workData.relatedProjects = relatedProjects

    setWorkData(workData)
  }

  const _getSlugByLocale = (pathname) => {
    const pathnameFormatted = pathname?.split('/').filter((item) => item !== '')

    switch (locale) {
      case 'en':
        return pathnameFormatted[1] // i.e. /work/spotify-clone -> spotify-clone

      case 'es':
        return pathnameFormatted[2] // i.e. /es/work/spotify-clone -> spotify-clone

      default:
        return pathnameFormatted[1]
    }
  }

  const handleRedirectToLink = () => (link) => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    getWorkData()
  }, [])

  return (
    <>
      {workData && (
        <div className={styles.singleWorkPageContainer}>
          <div className={styles.singleWorkHeading}>
            <button title={t('go_back_button_title')} onClick={() => router.push(
              locale === 'en' ? '/work' : `/${locale}/work`,
            )}>
              <BsArrowReturnLeft size={32} />
            </button>
            <h1>{workData.denomination}</h1>
            <p>{workData.summary}</p>
            <ShareIcons
              pageUrlToShare={window?.location?.href}
              iconSize="32"
              iconColor="#FFF"
            />
          </div>

          {/* Banner with work thumbnail */}
          <div className={styles.singleWorkBanner}>
            <Image
              src={getWorkThumbnail(workData.shortname)}
              alt=""
              style={{ objectFit: 'cover', borderRadius: '20px' }}
              width={1018}
              height={589}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8rVpWDwAF0AIXvCFmGgAAAABJRU5ErkJggg=="
            />
          </div>

          {/*  Work description and detailed data*/}
          <div className={styles.singleWork_DetailedDataSection}>
            <div className={styles.singleWork_DetailedDataSection__buttons}>
              {workData?.work_url && (
                <BaseButton
                  type="white"
                  text="View Project"
                  onClick={handleRedirectToLink(workData.work_url)}
                />
              )}

              {workData?.githubRepo_url && (
                <BaseButton
                  type="white_outlined"
                  text="View Repo"
                  onClick={handleRedirectToLink(workData.githubRepo_url)}
                />
              )}
            </div>
            <section className={styles.singleWorkDescription}>
              <h2>Description</h2>
              <p>{workData.description}</p>
            </section>
          </div>

          {/* Technologies */}
          <section className={styles.singleWork__TechnologiesSection}>
            <h2>Technologies</h2>
            <div className={styles.techStackContainer}>
              {workData?.skills?.map((skill) => (
                <TechLogo
                  key={skill.name}
                  name={skill.name}
                  link={skill.link}
                />
              ))}
            </div>
          </section>

          {/* related projects */}
          <section>
            <h2>Related Projects</h2>
            <div className={styles.relatedProjectsContainer}>
              {workData.relatedProjects?.map((project) => {
                return (
                  <div key={project.id} className={styles.relatedProjectCard}>
                    <p>{project.denomination}</p>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default SingleWorkWrapper
