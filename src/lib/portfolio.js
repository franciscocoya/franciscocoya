import { SKILLS } from './constants.js'
import { getWorkThumbnail } from './thumbs.js'

// translate to english

const _work = [
  {
    id: 'W001',
    slug: 'spotify-clone',
    shortname: 'spotify_clone',
    denomination: 'Spotify Clone',
    summary: 'Clone de la aplicación de Spotify',
    description: 'Clone de la aplicación de Spotify con React JS',
    image: getWorkThumbnail('spotify_clone'),
    skills: [SKILLS.nextjs, SKILLS.sass],
    type: 'frontend',
    category: 'web',
    year: '2021',
    githubRepo_url: 'https://github.com/franciscocoya/spotify_clone',
    work_url: '',
    more_like_this: ['W002'], // related projects
  },
  {
    id: 'W002',
    slug: 'leoncamp',
    shortname: 'leoncamp',
    denomination: 'Leon Camp',
    summary: 'Aplicación web para gestión de alojamientos turísticos',
    description: 'Aplicación web para gestión de alojamientos turísticos',
    image: getWorkThumbnail('leoncamp'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2022',
    githubRepo_url: 'https://github.com/franciscocoya/leoncamp-booking-app',
    work_url: 'https://leoncamp.netlify.app/',
    more_like_this: ['W001'],
  },
  {
    id: 'W003',
    slug: 'lomap',
    shortname: 'lomap',
    denomination: 'Lomap',
    summary: 'Aplicación web descentralizada para compartir mapas',
    description: '...',
    image: getWorkThumbnail('lomap'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2021',
    githubRepo_url: 'https://github.com/Arquisoft/lomap_es5a',
    work_url: 'https://franciscocoya.github.io/lomapes05a_production/',
    more_like_this: ['W001'],
  },
  {
    id: 'W004',
    slug: 'helpme',
    shortname: 'helpme',
    denomination: 'Helpme',
    description:
      'Aplicación móvil para resolución de dudas entre alumnos de la Universidad de Oviedo',
    image: getWorkThumbnail('helpme'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'mobile',
    year: '2021',
    githubRepo_url: 'https://github.com/franciscocoya/HelpMe',
    work_url: '',
    more_like_this: ['W001'],
  },
  {
    id: 'W005',
    slug: 'personal-website',
    shortname: 'personal_website',
    denomination: 'Personal Website',
    description: 'Mi página web personal',
    image: getWorkThumbnail('personal_website'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2021',
    githubRepo_url: 'https://github.com/franciscocoya/franciscocoya',
    work_url: 'https://franciscocoya.dev/',
    more_like_this: ['W001'],
  },
  {
    id: 'W006',
    slug: 'basic-crawler',
    shortname: 'basic_crawler',
    denomination: 'Basic Crawler',
    description: 'Crawler básico para extraer datos de una página web',
    image: getWorkThumbnail('basic_crawler'),
    skills: [SKILLS.vuejs],
    type: 'backend',
    category: 'web',
    year: '2021',
    githubRepo_url:
      'https://github.com/franciscocoya/basic_crawler/tree/master',
    work_url: '',
    more_like_this: ['W001'],
  },
  {
    id: 'W007',
    slug: 'mywallapop',
    shortname: 'mywallapop',
    denomination: 'MyWallapop',
    description:
      'Aplicación web para la compra y venta de productos de segunda mano',
    image: getWorkThumbnail('mywallapop'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2021',
    githubRepo_url: 'https://github.com/TomasArguelles/sdi-2223-entrega1-51',
    work_url: '',
    more_like_this: ['W001'],
  },
  {
    id: 'W008',
    slug: 'instagram-unfollow',
    shortname: 'instagram_unfollower',
    denomination: 'Instagram Unfollow',
    description:
      'Aplicación web para comprobar los usuarios que no te siguen en Instagram',
    image: getWorkThumbnail('instagram_unfollower'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2021',
    githubRepo_url: 'https://github.com/franciscocoya/instagram-unfollow',
    work_url: 'https://instagramunfollow.franciscocoya.dev/',
    more_like_this: ['W001'],
  },
  {
    id: 'W009',
    slug: 'san-ignacio-school',
    shortname: 'san_ignacio_school',
    denomination: 'San Ignacio School',
    description: 'Página web del colegio San Ignacio de Ponferrada',
    image: getWorkThumbnail('san_ignacio_school'),
    skills: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2020',
    githubRepo_url: '',
    work_url: 'https://www.sanignacioponferrada.com/',
    more_like_this: [],
  },
]

const getPortfolioItemBySlug = (slug) => {
  return _work.find((item) => item.slug === slug)
}

const getPortfolioItemById = (id) => {
  return _work.find((item) => item.id === id)
}

const getWorkLinksBySlug = (slug) => {
  const work = _work.find((item) => item.slug === slug)
  return {
    githubRepo_url: work.githubRepo_url,
    work_url: work.work_url,
  }
}

const getRelatedProjects = (slug) => {
  const project = _work.find((item) => item.slug === slug)
  const relatedProjects = project.more_like_this.map((workId) =>
    getPortfolioItemById(workId),
  )
  return relatedProjects
}

/**
 * Check if slug corresponds to a valid existing project
 * @param {*} slug like 'spotify-clone'
 * @returns
 */
const checkIsSlugValid = (slug) => {
  return _work.some((item) => item.slug === slug)
}

const getWork = () => {
  return _work
}

export {
  getPortfolioItemBySlug,
  getWork,
  getRelatedProjects,
  getWorkLinksBySlug,
  checkIsSlugValid,
}
