import { getPayload } from 'payload'
import config from '@/payload.config'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { HighlightsSection } from '@/components/HighlightsSection'
import { ProductionsSection } from '@/components/ProductionsSection'
import { EventsSection } from '@/components/EventsSection'
import { WatchSection } from '@/components/WatchSection'
import { CEOMessageSection } from '@/components/CEOMessageSection'
import { CSRSection } from '@/components/CSRSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Concurrently fetch Globals and Collections
  // Only query published items for the live website
  const [
    siteSettings,
    hero,
    about,
    highlights,
    ceoMessage,
    watchSection,
    productionsData,
    eventsData,
    videosData,
    csrData,
  ] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', depth: 2 }),
    payload.findGlobal({ slug: 'hero', depth: 2 }),
    payload.findGlobal({ slug: 'about', depth: 2 }),
    payload.findGlobal({ slug: 'highlights', depth: 1 }),
    payload.findGlobal({ slug: 'ceo-message', depth: 2 }),
    payload.findGlobal({ slug: 'watch-section', depth: 2 }),
    payload.find({
      collection: 'productions',
      where: { publishStatus: { equals: 'published' } },
      sort: 'sortOrder',
      depth: 2,
    }),
    payload.find({
      collection: 'events',
      where: { publishStatus: { equals: 'published' } },
      sort: 'sortOrder',
      depth: 2,
    }),
    payload.find({
      collection: 'videos',
      where: { publishStatus: { equals: 'published' } },
      sort: 'sortOrder',
      depth: 2,
    }),
    payload.find({
      collection: 'csr-initiatives',
      where: { publishStatus: { equals: 'published' } },
      sort: 'sortOrder',
      depth: 2,
    }),
  ])

  const accent = siteSettings.accentColor || '#D6AE5C'
  const logoIcon = getMediaUrl(siteSettings.logoIcon, '/assets/6692a004b32ad002c42101d498c7fa94.png')

  // Section visibility checks (default to 'published' if not yet explicitly saved)
  const isHeroPublished = (hero.sectionStatus || 'published') === 'published'
  const isAboutPublished = (about.sectionStatus || 'published') === 'published'
  const isHighlightsPublished = (highlights.sectionStatus || 'published') === 'published'
  const isProductionsPublished =
    (siteSettings.productionsSectionStatus || 'published') === 'published' &&
    productionsData.docs.length > 0
  const isEventsPublished =
    (siteSettings.eventsSectionStatus || 'published') === 'published' &&
    eventsData.docs.length > 0
  const isWatchPublished =
    (watchSection.sectionStatus || 'published') === 'published' &&
    videosData.docs.length > 0
  const isCEOPublished = (ceoMessage.sectionStatus || 'published') === 'published'
  const isCSRPublished =
    (siteSettings.csrSectionStatus || 'published') === 'published' &&
    csrData.docs.length > 0
  const isContactPublished = (siteSettings.contactSectionStatus || 'published') === 'published'

  return (
    <div style={{ background: '#0B0908', color: '#F4EEE3', minHeight: '100vh' }}>
      <Header siteSettings={siteSettings} />
      <main>
        {isHeroPublished && <HeroSection hero={hero} accent={accent} logoIcon={logoIcon} />}
        {isAboutPublished && <AboutSection about={about} accent={accent} />}
        {isHighlightsPublished && <HighlightsSection highlights={highlights} />}
        {isProductionsPublished && (
          <ProductionsSection productions={productionsData.docs} accent={accent} />
        )}
        {isEventsPublished && <EventsSection events={eventsData.docs} accent={accent} />}
        {isWatchPublished && (
          <WatchSection watchSection={watchSection} videos={videosData.docs} accent={accent} />
        )}
        {isCEOPublished && <CEOMessageSection ceo={ceoMessage} accent={accent} />}
        {isCSRPublished && <CSRSection csrInitiatives={csrData.docs} accent={accent} />}
        {isContactPublished && <ContactSection siteSettings={siteSettings} accent={accent} />}
      </main>
      <Footer siteSettings={siteSettings} accent={accent} />
    </div>
  )
}
