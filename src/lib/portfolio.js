import { SKILLS } from './constants.js'

// translate to english

const _work = [
  {
    id: 'W001',
    slug: 'spotify-clone',
    shortname: 'spotify-clone',
    denomination: 'Spotify Clone',
    description: 'Clone de la aplicación de Spotify con React JS',
    image: 'spotify-clone.png',
    url: 'https://spotify-clone-8d5e7.web.app/',
    SKILLS: [SKILLS.nextjs],
    type: 'frontend',
    category: 'web',
    year: '2021',
    more_like_this: ['W002'], // related projects
  },
  {
    id: 'W002',
    slug: 'leon-camp',
    shortname: 'leon-camp',
    denomination: 'Leon Camp',
    description: 'Aplicación web para gestión de alojamientos turísticos',
    image: 'leoncamp.png',
    url: 'https://spotify-clone-8d5e7.web.app/',
    SKILLS: [SKILLS.vuejs],
    type: 'frontend',
    category: 'web',
    year: '2022',
    more_like_this: ['W001'],
  },
]

const getPortfolioItemBySlug = (slug) => {
  return _work.find((item) => item.slug === slug)
}

const getPortfolioItemById = (id) => {
  return _work.find((item) => item.id === id)
}

const getRelatedProjects = (slug) => {
  const project = _work.find((item) => item.slug === slug)
  console.log('project', project)
  const relatedProjects = project.more_like_this.map((workId) =>
    getPortfolioItemById(workId),
  )
  return relatedProjects
}

const getWork = () => {
  return _work
}

export { getPortfolioItemBySlug, getWork, getRelatedProjects }
