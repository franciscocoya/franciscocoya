export const getJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'Francisco Coya about page',
    description:
      'Francisco Coya is a Software Engineering student at University Of Oviedo (Oviedo, Spain). He has always interested in software development, specially in how TI companies and firms create their products.',
    keywords:
      'Francisco Coya, University of Oviedo, CIFP de Ponferrada, Colegio San Ignacio de Ponferrada, Ingeniería informática, javascript',
    image: '/assets/images/fc_profile_image_bg_b&w.png',
    url: 'https://franciscocoya.dev/about',
    mainEntityOfPage: {
      '@type': 'WebSite',
      '@id': 'https://franciscocoya.dev/about',
    },

    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Técnico Superior en Desarrollo de Aplicaciones Web',
          description: 'Ciclo Superior de Formación Profesional',
          educationalLevel: 'Técnico Superior',
          issuer: {
            '@type': 'Organization',
            name: 'Centro Integrado de Formación Profesional de Ponferrada',
            url: 'https://www.cifpponferrada.es',
          },
        },
      ],
    },

    skills: [
      'NextJS',
      'ReactJS',
      'SCSS',
      'UI Design',
      'TypeScript',
      'VueJS',
      'SpringBoot',
      'Team work',
    ],
  }
}
