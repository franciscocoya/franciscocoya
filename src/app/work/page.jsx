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

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Francisco Coya Portfolio',
    url: 'https://www.franciscocoya.dev/work/',
    description:
      "Francisco Coya's portfolio website. Here you can find my recently work and my projects.",
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.franciscocoya.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'Project',
          position: 1,
          name: 'Lomap',
          description: 'Decentralized application for share your maps.',
          keywords: 'ReactJS, NodeJS, SOLID, Firebase',
          url: 'https://franciscocoya.github.io/lomapes05a_production/',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/leoncamp_thumbnail_work_zzcgbt.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 2,
          name: 'Leon Camp',
          description:
            'web application for booking accommodation in Spain like Airbnb.',
          keywords: 'VueJS, SpringBoot, MySQL',
          url: 'https://leoncamp.netlify.app/',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_leoncamp_app_befypp.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 4,
          name: 'Instagram Unfollow',
          description: 'Check who unfollow you on Instagram.',
          keywords: 'VueJS, TailwindCSS, Pinia',
          url: 'https://instagramunfollow.franciscocoya.dev/',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/instagram_unfollower_thumbnail_work_c6e8el.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 5,
          name: 'Personal Website',
          description: 'My personal website.',
          keywords: 'NextJS, SCSS',
          url: 'https://www.franciscocoya.dev/',
          image: '/assets/images/work_thumbs/thumbnail_personal_website.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 6,
          name: 'Spotify Clone',
          description:
            'Spotify clone using NextJS, Recoil, Prisma and Firebase.',
          keywords: 'NextJS, Recoil, Prisma, Firebase',
          url: 'https://spotify-clone-franciscocoya.vercel.app/',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_spotify_clone_uly8vl.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 7,
          name: 'HelpMe',
          description:
            'Android application for help student to resolve their doubts.',
          keywords: 'Android, Java',
          url: '',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1693414195/work_thumbs/thumbnail_helpme_android_app_tfxdos.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
        {
          '@type': 'Project',
          position: 3,
          name: 'My Wallapop',
          description:
            'Web application for buying and selling second-hand products. Class project for practise SpringBoot and JS technologies.',
          keywords: 'SpringBoot, JS, CSS, HTML, Sellenium, SQlite',
          image:
            'https://res.cloudinary.com/dx94yprzj/image/upload/v1695026674/work_thumbs/mywallapop_thumbnail_work_v1uefd.jpg',
          alumni: 'Francisco Coya',
          isPartOf: {
            '@type': 'WebSite',
            url: 'https://franciscocoya.dev/work/',
          },
        },
      ],
    },
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
            techStack={['NextJS', 'SCSS']}
            gridRowPosition="6 / 7"
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
