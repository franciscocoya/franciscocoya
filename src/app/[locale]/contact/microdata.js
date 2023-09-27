export const getJsonLd = () => {
  // Francisco Coya contact page jsonld
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Francisco Coya',
    description:
      'Francisco Coya is a student at the University of Oviedo, Spain. He is a web developer and a web developtment enthusiast.',
    keywords:
      'Francisco Coya, Escuela de Ingeniería Informática, Universidad de Oviedo, uniovi, Ingeniería Informática del Software, Ingeniería Web, Ingeniería Técnica Informática, University of Oviedo, Asturias, Web Applications Developer in Oviedo',
    image: '/assets/images/fc_profile_image_bg_b&w.png',
    gender: 'male',
    url: 'https://franciscocoya.com',
    sameAs: [
      'https://www.linkedin.com/in/franciscocoya/',
      'https://github.com/franciscocoya',
    ],
    jobTitle: 'Student',
    alumniOf: {
      '@type': 'Organization',
      name: 'University of Oviedo',
      url: 'https://www.uniovi.es',
      telephone: '+34 985 10 27 96',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oviedo',
      addressRegion: 'Asturias',
      addressCountry: 'Spain',
      streetAddress:
        'Campus de Los Catalanes, Calle de Valdés Salas, 33007, Oviedo. Asturias. España',
    },
    email: 'mailto:info@franciscocoya.dev',
  }
}
