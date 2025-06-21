import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

export default defineConfig({
  lang: 'en-US',
  title: 'OpenAuthCert Documentation',
  description: 'Documentation for OpenAuthCert',
  themeConfig: {
    sidebar,
    nav: [
      { text: 'English', link: '/en/' },
      { text: 'Română', link: '/ro/' },
      { text: 'Polski', link: '/pl/' }
    ]
  }
})
