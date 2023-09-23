'use client'

import WorkCard from '@/components/cards/workCard/workCard'

import styles from './page.module.scss'
import FullWidthLayout from '@/layouts/FullWidthLayout'

function WorkPage() {
  /**
   * Filter the work cards by the selected filter (tech stack)
   * @param {*} filterName
   */
  const handleFilter = (filterName) => {
    console.log(filterName)
  }

  return (
    <FullWidthLayout>
      <div className={styles.workPageWrapper}>
        <h1>Work</h1>

        {/* <div className={styles.workFilterBar}>
        <BaseBadge
          text="JavaScript"
          color="lightgray"
          onClick={() => handleFilter('JavaScript')}
          isBig={true}
        />
        <BaseBadge text="Recoil" color="lightgray" isBig={true} />
        <BaseBadge text="NextJS" color="lightgray" isBig={true} />
      </div> */}

        <div className={styles.workCardGallery}>
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_spotify_clone_uly8vl.jpg'
            }
            status="In Progress..."
            title="Spotify Clone"
            techStack={['NextJS', 'Recoil', 'Prisma', 'Firebase']}
            gridRowPosition="1 / 3"
            isFeatured={true}
            githubRepo_url="https://github.com/franciscocoya/spotify_clone"
          />
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_basic_crawler_ymfrwc.jpg'
            }
            title="Basic Crawler"
            techStack={['Python']}
            isFeatured={false}
            githubRepo_url="https://github.com/franciscocoya/basic_crawler/tree/master"
          />
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/mywallapop_thumbnail_work_v1uefd.jpg'
            }
            title="My Wallapop"
            techStack={['SpringBoot']}
            isFeatured={false}
            githubRepo_url="https://github.com/TomasArguelles/sdi-2223-entrega1-51"
          />
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_helpme_android_app_tfxdos.jpg'
            }
            title="HelpMe"
            techStack={['Android', 'Java']}
            isFeatured={false}
            githubRepo_url="https://github.com/franciscocoya/HelpMe"
          />

          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/leoncamp_thumbnail_work_zzcgbt.jpg'
            }
            title="LoMap"
            techStack={['ReactJS', 'NodeJS', 'SOLID', 'Firebase']}
            isFeatured={false}
            gridRowPosition="3 / 5"
            gridColPosition="2"
            work_url="https://franciscocoya.github.io/lomapes05a_production/"
            githubRepo_url="https://github.com/Arquisoft/lomap_es5a"
          />
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_leoncamp_app_befypp.jpg'
            }
            title="LeonCamp"
            techStack={['Vue 3', 'SpringBoot', 'MySQL']}
            isFeatured={false}
            gridRowPosition="5 / 7"
            gridColPosition="1"
            work_url="https://leoncamp.netlify.app/"
            githubRepo_url="https://github.com/franciscocoya/leoncamp-booking-app"
          />
          <WorkCard
            bgImage={
              'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/instagram_unfollower_thumbnail_work_c6e8el.jpg'
            }
            title="Check Instagram Unfollowers"
            techStack={['Vue 3', 'TailwindCSS', 'Pinia']}
            isFeatured={false}
            work_url="https://instagramunfollow.franciscocoya.dev/"
            githubRepo_url="https://github.com/franciscocoya/instagram-unfollow"
          />
          <WorkCard
            bgImage={
              'https://www.sanignacioponferrada.com/images/web/2020/Fachada2.jpg'
            }
            status="Maintenance..."
            title="San Ignacio's School Website"
            techStack={['Joomla', 'Graphic Design']}
            gridRowPosition="5 / 6"
            isFeatured={false}
            work_url="https://www.sanignacioponferrada.com/"
          />

          <WorkCard
            bgImage={
              '/assets/images/work_thumbs/thumbnail_personal_website.jpg'
            }
            status="v0.0.1"
            title="Personal Website"
            techStack={['NextJS', 'SCSS', ]}
            gridRowPosition="6 / 7"
            isFeatured={false}
            githubRepo_url={'https://github.com/franciscocoya/franciscocoya'}
            work_url="https://www.franciscocoya.dev/"
          />
        </div>
      </div>
    </FullWidthLayout>
  )
}

export default WorkPage
