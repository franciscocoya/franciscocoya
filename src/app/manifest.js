export default function manifest() {
  return {
    name: 'Francisco Coya personal website',
    short_name: 'Francisco Coya',
    description: 'Web application for Francisco Coya personal website',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: './favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
