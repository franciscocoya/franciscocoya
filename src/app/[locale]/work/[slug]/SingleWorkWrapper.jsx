'use client'

import styles from './page.module.scss'
import Image from 'next/image'
import BaseButton from '@/components/buttons/baseButton'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { getPortfolioItemBySlug, getRelatedProjects } from '@/lib/portfolio'
import { useEffect, useState } from 'react'

function SingleWorkWrapper() {
  const [workData, setWorkData] = useState(null)
  const pathname = usePathname()
  const locale = useLocale()

  const getWorkData = () => {
    // i.e. /work/spotify-clone -> spotify-clone
    const singleWorkSlug = _getSlugByLocale(pathname)
    const workData = getPortfolioItemBySlug(singleWorkSlug)
    setWorkData(workData)
  }

  const _getSlugByLocale = (pathname) => {
    switch (locale) {
      case 'en':
        return pathname.split('/')[2] // i.e. /work/spotify-clone -> spotify-clone

      case 'es':
        return pathname.split('/')[3] // i.e. /es/work/spotify-clone -> spotify-clone

      default:
        return pathname.split('/')[2]
    }
  }

  const getWorkRelatedProjects = () => {
    const singleWorkSlug = _getSlugByLocale(pathname)
    const relatedProjects = getRelatedProjects(singleWorkSlug)
    setWorkData({
      ...workData,
      relatedProjects,
    })
  }

  useEffect(() => {
    getWorkData()
    getWorkRelatedProjects()
  }, [workData])

  return (
    <>
      {workData && (
        <div className={styles.singleWorkPageContainer}>
          <h1>{workData.denomination}</h1>

          {/* Banner with work thumbnail */}
          <div className={styles.singleWorkBanner}>
            <Image
              src="/assets/images/work_thumbs/thumbnail_personal_website.jpg"
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
          <div>
            <div>
              <BaseButton type="white" text="View Project" />
              <BaseButton type="white_outlined" text="View Repo" />
            </div>
            <section className={styles.singleWorkDescription}>
              <h2>Description</h2>
              <p>{workData.description}</p>
            </section>
          </div>

          {/* Technologies */}
          <section>
            <h2>Technologies</h2>
            <div className={styles.techStackContainer}></div>
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
