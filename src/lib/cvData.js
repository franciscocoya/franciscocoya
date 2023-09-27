/**
 * Updated: 2023/09/23
 * Author: Francisco Coya
 * Description: This file contains the data of the CV.
 */
const cv_enGB = {
  version: '1.0.0',
  created: '2023-06-23T17:20:00Z',
  updated: '2023-06-23T17:20:00Z',
  studies: [
    {
      id: 'S1',
      logo_name: 'uniovi_b&w',
      logo_extension: 'png',
      denomination: 'Degree in Software Engineering',
      organization: 'University of Oviedo',
      place: 'Oviedo, Spain',
      status: 'in progress',
      dateStart: 'Sept. 2016',
      dateEnd: 'Jun. 2024',
    },
    {
      id: 'S2',
      logo_name: 'cifp_ponferrada',
      logo_extension: 'png',
      denomination: 'High level training cycle in Web Application Development',
      organization: 'C.I.F.P. Ponferrada',
      place: 'León, Spain',
      status: 'finished',
      dateStart: 'Sept. 2020',
      dateEnd: 'Jun. 2022',
    },
  ],
  experience: [
    {
      id: 'E1',
      shortname: 'proconsi',
      denomination: 'Internship - Programmer in R&D Department',
      organization: 'Proconsi S.L.',
      website: 'https://www.proconsi.com/',
      place: 'León, Spain',
      status: 'finished',
      dateStart: 'Mar. 2022',
      dateEnd: 'Jun. 2022',
    },
  ],
  certifications: [
    {
      id: 'C1',
      logo_name: 'penn_enginnering',
      denomination: 'Programming for the Web with JavaScript',
      organization: 'Penn Engineering',
      credentialId:
        'https://courses.edx.org/certificates/bed6d48bdd8843cf9a2a9968170a10c5',
      issued: 'abr. 2021',
    },
    {
      id: 'C2',
      logo_name: 'openwebinars',
      denomination: 'TypeScript Essentials',
      organization: 'OpenWebinars',
      credentialId: 'https://openwebinars.net/cert/ea1Z',
      issued: 'mar. 2023',
    },
    {
      id: 'C3',
      logo_name: 'uniovi_b&w',
      denomination: 'Benefiting from an IT Systems Security Degree Course',
      organization: 'University of Oviedo',
      credentialId:
        'https://www.campusvirtual.uniovi.es/badges/badge.php?hash=de1d74c2519c29ca33fa3702b2a064dcd1539412&lang=en',
      issued: 'jun. 2023',
    },
  ],
  skills: [
    {
      id: 'SK6',
      denomination: 'Next JS',
      icon: 'nextjs',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK2',
      denomination: 'React JS',
      icon: 'react',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK3',
      denomination: 'Vue 3',
      icon: 'vue',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK1',
      denomination: 'Spring Boot',
      icon: 'springboot',
      category: 'backend',
      type: 'technical',
    },
    {
      id: 'SK4',
      denomination: 'TypeScript',
      icon: 'typescript',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK5',
      denomination: 'Figma',
      icon: 'figma',
      category: 'design',
      type: 'technical',
    },
    {
      id: 'SK7',
      denomination: 'UI Design',
      icon: 'design',
      category: 'design',
      type: 'technical',
    },
  ],
}

const cv_esES = {
  version: '1.0.0',
  created: '2023-06-23T17:20:00Z',
  updated: '2023-06-23T17:20:00Z',
  studies: [
    {
      id: 'S1',
      logo_name: 'uniovi_b&w',
      logo_extension: 'png',
      denomination: 'Grado en Ingeniería Informática del Software',
      organization: 'Universidad de Oviedo',
      place: 'Oviedo, España',
      status: 'in progress', // not transalted for business logic reasons
      dateStart: 'Sept. 2016',
      dateEnd: 'Jun. 2024',
    },
    {
      id: 'S2',
      logo_name: 'cifp_ponferrada',
      logo_extension: 'png',
      denomination:
        'Ciclo formativo de grado superior en Desarrollo de Aplicaciones Web',
      organization: 'C.I.F.P. Ponferrada',
      place: 'León, España',
      status: 'finished',
      dateStart: 'Sept. 2020',
      dateEnd: 'Jun. 2022',
    },
  ],
  experience: [
    {
      id: 'E1',
      shortname: 'proconsi',
      denomination: 'Prácticas - Programador en Departamento I+D',
      organization: 'Proconsi S.L.',
      website: 'https://www.proconsi.com/',
      place: 'León, España',
      status: 'finished',
      dateStart: 'Mar. 2022',
      dateEnd: 'Jun. 2022',
    },
  ],
  certifications: [
    {
      id: 'C1',
      logo_name: 'penn_enginnering',
      denomination: 'Programming for the Web with JavaScript',
      organization: 'Penn Engineering',
      credentialId:
        'https://courses.edx.org/certificates/bed6d48bdd8843cf9a2a9968170a10c5',
      issued: 'abr. 2021',
    },
    {
      id: 'C2',
      logo_name: 'openwebinars',
      denomination: 'TypeScript Essentials',
      organization: 'OpenWebinars',
      credentialId: 'https://openwebinars.net/cert/ea1Z',
      issued: 'mar. 2023',
    },
    {
      id: 'C3',
      logo_name: 'uniovi_b&w',
      denomination:
        'Aprovechamiento de un curso de Grado de Seguridad de Sistemas Informáticos',
      organization: 'Universidad de Oviedo',
      credentialId:
        'https://www.campusvirtual.uniovi.es/badges/badge.php?hash=de1d74c2519c29ca33fa3702b2a064dcd1539412&lang=en',
      issued: 'jun. 2023',
    },
  ],
  skills: [
    {
      id: 'SK6',
      denomination: 'Next JS',
      icon: 'nextjs',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK2',
      denomination: 'React JS',
      icon: 'react',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK3',
      denomination: 'Vue 3',
      icon: 'vue',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK1',
      denomination: 'Spring Boot',
      icon: 'springboot',
      category: 'backend',
      type: 'technical',
    },
    {
      id: 'SK4',
      denomination: 'TypeScript',
      icon: 'typescript',
      category: 'frontend',
      type: 'technical',
    },
    {
      id: 'SK5',
      denomination: 'Figma',
      icon: 'figma',
      category: 'design',
      type: 'technical',
    },
    {
      id: 'SK7',
      denomination: 'Diseño UI',
      icon: 'design',
      category: 'design',
      type: 'technical',
    },
  ],
}

const getCv = (lang) => {
  switch (lang) {
    case 'en-GB':
    case 'en':
      return cv_enGB
    case 'es-ES':
    case 'es':
      return cv_esES
    default:
      return cv_enGB
  }
}

export { getCv }
