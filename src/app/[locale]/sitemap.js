const URL = 'https://franciscocoya.dev'

export default async function sitemap() {
  const routes = ['', '/about', '/work', '/contact'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
