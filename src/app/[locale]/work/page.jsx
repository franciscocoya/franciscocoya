import WorkCard from '@/components/cards/workCard/workCard'
import styles from './page.module.scss'
import FullWidthLayout from '@/layouts/FullWidthLayout'
import { getJsonLd } from './microdata'
import { getWorkThumbnail } from '@/lib/thumbs'
import { useTranslations } from 'next-intl'
import { getWorkLinksBySlug } from '@/lib/portfolio'

export const metadata = {
  title: 'Portfolio | Francisco Coya',
  description: 'Francisco Coya portfolio',
  canonical: 'https://franciscocoya.dev/work',
  robots: 'index,follow',
  openGraph: {
    title: 'Work',
    description: 'Check out my projects 💡 I hope you like them!',
    url: 'https://franciscocoya.dev/work',
    site_name: 'Francisco Coya',
    images: [
      {
        url: 'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/leoncamp_thumbnail_work_zzcgbt.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],

    type: 'website',
  },
}

function WorkPage() {
  const t = useTranslations('Work')
  const jsonLd = getJsonLd()

  return (
    <FullWidthLayout>
      <div className={styles.workPageWrapper}>
        <h1>{t('title')}</h1>

        <div className={styles.workCardGallery}>
          <WorkCard
            bgImage={getWorkThumbnail('spotify_clone')}
            slug="spotify-clone"
            status={t('projects.p1.status')}
            title={t('projects.p1.title')}
            techStack={['NextJS', 'Recoil', 'Prisma', 'Firebase']}
            gridRowPosition="1 / 3"
            isFeatured={true}
            githubRepo_url={getWorkLinksBySlug('spotify-clone').githubRepo_url}
            animationDelay={0.1}
          />
          <WorkCard
            bgImage={getWorkThumbnail('basic_crawler')}
            slug="basic-crawler"
            title={t('projects.p2.title')}
            techStack={['Python']}
            isFeatured={false}
            githubRepo_url={getWorkLinksBySlug('basic-crawler').githubRepo_url}
            animationDelay={0.2}
          />
          <WorkCard
            bgImage={getWorkThumbnail('mywallapop')}
            slug="mywallapop"
            title={t('projects.p3.title')}
            techStack={['SpringBoot']}
            isFeatured={false}
            githubRepo_url={getWorkLinksBySlug('mywallapop').githubRepo_url}
          />
          <WorkCard
            bgImage={getWorkThumbnail('helpme')}
            slug="helpme"
            title={t('projects.p4.title')}
            techStack={['Android', 'Java']}
            isFeatured={false}
            githubRepo_url={getWorkLinksBySlug('helpme').githubRepo_url}
            animationDelay={0.3}
          />

          <WorkCard
            bgImage={getWorkThumbnail('lomap')}
            slug="lomap"
            title={t('projects.p5.title')}
            techStack={['ReactJS', 'NodeJS', 'SOLID', 'Firebase']}
            isFeatured={false}
            gridRowPosition="3 / 5"
            gridColPosition="2"
            work_url={getWorkLinksBySlug('lomap').githubRepo_url}
            githubRepo_url={getWorkLinksBySlug('lomap').work_url}
            animationDelay={0.4}
          />
          <WorkCard
            bgImage={getWorkThumbnail('leoncamp')}
            slug="leoncamp"
            title={t('projects.p7.title')}
            techStack={['Vue 3', 'SpringBoot', 'MySQL']}
            isFeatured={false}
            gridRowPosition="5 / 7"
            gridColPosition="1"
            work_url={getWorkLinksBySlug('leoncamp').work_url}
            githubRepo_url={getWorkLinksBySlug('leoncamp').githubRepo_url}
            animationDelay={0.5}
          />
          <WorkCard
            bgImage={getWorkThumbnail('instagram_unfollower')}
            slug="instagram-unfollow"
            title={t('projects.p6.title')}
            techStack={['Vue 3', 'TailwindCSS', 'Pinia']}
            isFeatured={false}
            work_url={getWorkLinksBySlug('instagram-unfollow').work_url}
            githubRepo_url={
              getWorkLinksBySlug('instagram-unfollow').githubRepo_url
            }
            animationDelay={0.6}
          />
          <WorkCard
            bgImage={getWorkThumbnail('san_ignacio_school')}
            slug="san-ignacio-school"
            status={t('projects.p8.status')}
            title={t('projects.p8.title')}
            techStack={['Joomla', 'Graphic Design']}
            gridRowPosition="5 / 6"
            isFeatured={false}
            work_url={getWorkLinksBySlug('san-ignacio-school').work_url}
            animationDelay={0.7}
          />

          <WorkCard
            bgImage={getWorkThumbnail('personal_website')}
            slug="personal-website"
            title={t('projects.p9.title')}
            techStack={['NextJS', 'SCSS']}
            gridRowPosition="6 / 7"
            isFeatured={false}
            githubRepo_url={'https://github.com/franciscocoya/franciscocoya'}
            work_url="https://www.franciscocoya.dev/"
            animationDelay={0.8}
          />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </FullWidthLayout>
  )
}

export default WorkPage
