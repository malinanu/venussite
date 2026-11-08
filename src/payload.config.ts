import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mcpPlugin } from '@payloadcms/plugin-mcp'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Productions } from './collections/Productions'
import { Events } from './collections/Events'
import { Videos } from './collections/Videos'
import { CSRInitiatives } from './collections/CSRInitiatives'
import { Inquiries } from './collections/Inquiries'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Hero } from './globals/Hero'
import { About } from './globals/About'
import { Highlights } from './globals/Highlights'
import { CEOMessage } from './globals/CEOMessage'
import { WatchSection } from './globals/WatchSection'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Venus Productions CMS',
    },
  },
  collections: [
    Users,
    Media,
    Productions,
    Events,
    Videos,
    CSRInitiatives,
    Inquiries,
  ],
  globals: [
    SiteSettings,
    Hero,
    About,
    Highlights,
    CEOMessage,
    WatchSection,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'venus-productions-secret-key-development-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./venus.db',
    },
    push: false,
  }),
  plugins: [
    mcpPlugin({
      collections: {
        productions: { enabled: true },
        events: { enabled: true },
        videos: { enabled: true },
        'csr-initiatives': { enabled: true },
        inquiries: { enabled: true },
      },
    }),
  ],
  sharp,
})
