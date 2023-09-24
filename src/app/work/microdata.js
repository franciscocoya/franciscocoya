export const getJsonLd = () => {
  return {
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
}
