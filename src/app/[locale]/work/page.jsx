import WorkCard from '@/components/cards/workCard/workCard'
import styles from './page.module.scss'
import FullWidthLayout from '@/layouts/FullWidthLayout'
import { getJsonLd } from './microdata'
import { getWorkThumbnail } from '@/lib/thumbs'
import { useTranslations } from 'next-intl'

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
            bgImage={getWorkThumbnail('smt_web')}
            status={t('projects.p1.status')}
            title={t('projects.p1.title')}
            techStack={['Wordpress', 'PHP', 'JavaScript', 'GIS', 'AVL']}
            gridRowPosition="1 / 3"
            isFeatured={true}
            work_url="https://smt.ponferrada.org"
          />

          <WorkCard
            bgImage={getWorkThumbnail('smt_digital_signage')}
            status={t('projects.p2.status')}
            title={t('projects.p2.title')}
            techStack={['Angular', 'Node.js', 'Fastify', 'Figma', 'Redis', 'GIS', 'AVL']}
            gridRowPosition="2 / 3"
            isFeatured={true}
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('spotify_clone')}
            status={t('projects.p3.status')}
            title={t('projects.p3.title')}
            techStack={['NextJS', 'Recoil', 'Prisma', 'Firebase']}
            gridRowPosition="1 / 3"
            isFeatured={true}
            githubRepo_url="https://github.com/franciscocoya/spotify_clone"
          />

          <WorkCard
            bgImage={getWorkThumbnail('sd_ponferradina')}
            status={t('projects.p4.status')}
            title={t('projects.p4.title')}
            techStack={['PHP', 'JavaScript', 'LaLiga CMS', 'MySQL', 'WordPress']}
            isFeatured={true}
          />

          <WorkCard
            bgImage={getWorkThumbnail('lomap')}
            title={t('projects.p5.title')}
            techStack={['ReactJS', 'NodeJS', 'SOLID', 'Firebase']}
            isFeatured={false}
            gridColPosition="2"
            work_url="https://franciscocoya.github.io/lomapes05a_production/"
            githubRepo_url="https://github.com/Arquisoft/lomap_es5a"
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('basic_crawler')}
            title={t('projects.p6.title')}
            techStack={['Python']}
            isFeatured={false}
            githubRepo_url="https://github.com/franciscocoya/basic_crawler/tree/master"
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('mywallapop')}
            title={t('projects.p7.title')}
            techStack={['SpringBoot', 'JPA']}
            isFeatured={false}
            githubRepo_url="https://github.com/TomasArguelles/sdi-2223-entrega1-51"
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('helpme')}
            title={t('projects.p8.title')}
            techStack={['Android', 'Java']}
            isFeatured={false}
            githubRepo_url="https://github.com/franciscocoya/HelpMe"
          />

          
          <WorkCard
            bgImage={getWorkThumbnail('leoncamp')}
            title={t('projects.p9.title')}
            techStack={['Vue 3', 'SpringBoot', 'MySQL', 'SCSS']}
            isFeatured={false}
            gridRowPosition="5 / 7"
            gridColPosition="1"
            work_url="https://leoncamp.netlify.app/"
            githubRepo_url="https://github.com/franciscocoya/leoncamp-booking-app"
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('instagram_unfollower')}
            title={t('projects.p10.title')}
            techStack={['Vue 3', 'TailwindCSS', 'Pinia']}
            isFeatured={false}
            work_url="https://instagramunfollow.franciscocoya.dev/"
            githubRepo_url="https://github.com/franciscocoya/instagram-unfollow"
          />
          
          <WorkCard
            bgImage={getWorkThumbnail('san_ignacio_school')}
            status={t('projects.p11.status')}
            title={t('projects.p11.title')}
            techStack={['Joomla', 'Graphic Design', 'PHP', 'Wordpress', 'JavaScript']}
            isFeatured={false}
            work_url="https://www.sanignacioponferrada.com/"
          />

          <WorkCard
            bgImage={getWorkThumbnail('personal_website')}
            title={t('projects.p12.title')}
            techStack={['NextJS', 'SCSS', 'JSON+LD']}
            isFeatured={false}
            githubRepo_url={'https://github.com/franciscocoya/franciscocoya'}
            work_url="https://www.franciscocoya.dev/"
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
