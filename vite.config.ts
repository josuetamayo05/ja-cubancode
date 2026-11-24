import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { siteData } from './src/data/siteData'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Genera un HTML con metadatos propios por proyecto y servicio, y el sitemap. */
function seoPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'seo-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const base = siteData.brand.siteUrl
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      const pages = [
        ...siteData.projects
          .filter((p) => p.caseStudy)
          .map((p) => ({
            path: `/proyectos/${p.slug}`,
            title: p.title,
            description: p.summary,
          })),
        ...siteData.services.map((s) => ({
          path: `/servicios/${s.slug}`,
          title: s.title,
          description: s.details.subtitle,
        })),
      ]

      for (const page of pages) {
        const url = escapeHtml(base + page.path)
        const title = escapeHtml(`${page.title} | ${siteData.person.name}`)
        const desc = escapeHtml(page.description)
        const html = template
          .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
          .replace(/(name="description"\s+content=")[^"]*/, (_, a) => a + desc)
          .replace(/(rel="canonical" href=")[^"]*/, (_, a) => a + url)
          .replace(/(property="og:title"\s+content=")[^"]*/, (_, a) => a + title)
          .replace(/(property="og:description"\s+content=")[^"]*/, (_, a) => a + desc)
          .replace(/(property="og:url"\s+content=")[^"]*/, (_, a) => a + url)
        const dir = resolve(outDir, page.path.slice(1))
        mkdirSync(dir, { recursive: true })
        writeFileSync(resolve(dir, 'index.html'), html)
      }

      const urls = ['/', ...pages.map((p) => p.path)]
        .map((p) => `  <url><loc>${escapeHtml(base + p)}</loc></url>`)
        .join('\n')
      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
})
