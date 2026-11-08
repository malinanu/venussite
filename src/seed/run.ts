import { getPayload } from 'payload'
import config from '../payload.config'
import { seedDatabase } from './index'

async function run() {
  console.log('Initializing Payload...')
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('--- Running Seed ---')
  await seedDatabase(payload)

  console.log('--- Verifying Productions ---')
  const productions = await payload.find({ collection: 'productions' })
  console.log(`Found ${productions.docs.length} productions:`)
  for (const doc of productions.docs) {
    console.log(`  - [${doc.type}] ${doc.title} (${doc.productionPhase}) [${doc.publishStatus}]`)
  }

  console.log('--- Verifying Events ---')
  const events = await payload.find({ collection: 'events' })
  console.log(`Found ${events.docs.length} events:`)
  for (const doc of events.docs) {
    console.log(`  - ${doc.title} (${doc.sinhalaTitle}) on ${doc.eventDate} at ${doc.venue}`)
  }

  console.log('--- Verifying Videos ---')
  const videos = await payload.find({ collection: 'videos' })
  console.log(`Found ${videos.docs.length} videos:`)
  for (const doc of videos.docs) {
    console.log(`  - ${doc.title} [featured: ${doc.featured}] -> ${doc.youtubeUrl}`)
  }

  console.log('--- Verifying CSR Initiatives ---')
  const csr = await payload.find({ collection: 'csr-initiatives' })
  console.log(`Found ${csr.docs.length} CSR initiatives:`)
  for (const doc of csr.docs) {
    console.log(`  - ${doc.title} (${doc.category})`)
  }

  console.log('--- Verifying Site Settings ---')
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  console.log(`Site Name: ${settings.siteName}`)
  console.log(`Accent Color: ${settings.accentColor}`)
  console.log(`Email: ${settings.email}`)

  console.log('--- Verifying Test Inquiry Submission ---')
  const inquiry = await payload.create({
    collection: 'inquiries',
    data: {
      name: 'Sunil Perera',
      email: 'sunil@example.com',
      category: 'artist',
      organisation: 'Colombo Arts Guild',
      message: 'Interested in staging an upcoming acoustic drama performance in Melbourne.',
    },
  })
  console.log(`Inquiry created successfully with ID: ${inquiry.id}`)

  console.log('--- ALL VERIFICATIONS PASSED ---')
  process.exit(0)
}

run().catch((err) => {
  console.error('Error during verification:', err)
  process.exit(1)
})

