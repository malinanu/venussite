import type { Payload } from 'payload'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const seedDatabase = async (payload: Payload) => {
  payload.logger.info('— Starting Venus Productions CMS Seed —')

  // 1. Create Default Admin User
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  let adminUser
  if (existingUsers.docs.length === 0) {
    adminUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@venusproductions.com.au',
        password: 'Password123!',
        name: 'Rochelle Hettiarachchi',
        role: 'admin',
      },
    })
    payload.logger.info('Created admin user: admin@venusproductions.com.au')
  } else {
    adminUser = existingUsers.docs[0]
  }

  // 2. Upload Mockup Media Assets
  const assetsDir = path.resolve(dirname, '../../../assets')
  const mediaMap: Record<string, number> = {}

  if (fs.existsSync(assetsDir)) {
    const assetFiles = [
      { file: '6692a004b32ad002c42101d498c7fa94.png', alt: 'Venus Productions Logo Icon' },
      { file: '802167aeeeca580eecd49d948f62fbe2.png', alt: 'Venus Productions Wordmark' },
      { file: '66e72f72abbbe63d894d1e3f4a13ec69.png', alt: 'Left Curtain Motif' },
      { file: '12457606c98126387fa62a5dbf6b4fc4.png', alt: 'Right Curtain Motif' },
      { file: '35478477a5ba01d7a257ad47d5fe48b5.svg', alt: 'Traditional Crest Motif' },
      { file: '755b4debe523031de5cd68f014bb8bf2.png', alt: 'Venus Emblem Art' },
      { file: '45f2f2c9ae8a68ded0adf847272c6242.jpg', alt: 'Natath Ayek Sura Mathin Key Art' },
      { file: '060df3a0073b10dc57dc6476de99d7f7.jpg', alt: 'Sriyani Amarasena Conversation' },
      { file: 'a829600621c4ec8607d558a084e4cab2.jpg', alt: 'Swaranjana Concert Poster' },
      { file: '1cc02c98749a2bb42fef7353c3dd624b.jpg', alt: 'Sathsara Miyasiya Concert Poster' },
      { file: '21fcc1231d1eb98cee214704e9f28f09.jpg', alt: 'Wingfield Family Stage Drama Poster' },
      { file: 'f296a96ae165f0a65a50498b13067de5.jpg', alt: 'Nathuwama Bari Minihek Poster' },
      { file: '1d50863d566a049d94004e2a269b466c.jpg', alt: 'Bimsara as Shanika Interview' },
      { file: '596eac41b1f1f6fbf65845ec063535ad.jpg', alt: 'Sathsara Miyasiya Melbourne' },
      { file: 'e47632fe5de874f00ca67e7cf47387b6.jpg', alt: 'Wingfield Family Melbourne Tour' },
      { file: '9629927f3f396e5e256e3876e17e1028.jpg', alt: 'CSR Lady Ridgeway Hospital Donation' },
      { file: '09706f6cf8b897cd91bb906313dc9c4c.jpg', alt: 'CSR Community Event Nugegoda' },
    ]

    for (const item of assetFiles) {
      const filePath = path.join(assetsDir, item.file)
      if (fs.existsSync(filePath)) {
        try {
          const fileBuffer = fs.readFileSync(filePath)
          const mimeType = item.file.endsWith('.svg')
            ? 'image/svg+xml'
            : item.file.endsWith('.png')
            ? 'image/png'
            : 'image/jpeg'

          const created = await payload.create({
            collection: 'media',
            data: {
              alt: item.alt,
            },
            file: {
              data: fileBuffer,
              name: item.file,
              mimetype: mimeType,
              size: fileBuffer.length,
            },
          })
          mediaMap[item.file] = created.id
        } catch (err: any) {
          payload.logger.warn(`Could not upload ${item.file}: ${err.message}`)
        }
      }
    }
    payload.logger.info(`Uploaded ${Object.keys(mediaMap).length} media items`)
  }

  // 3. Seed Productions
  const existingProductions = await payload.find({ collection: 'productions', limit: 1 })
  if (existingProductions.docs.length === 0) {
    await payload.create({
      collection: 'productions',
      data: {
        title: 'Natath Ayek Sura Mathin',
        slug: 'natath-ayek-sura-mathin',
        type: 'teledrama',
        productionPhase: 'now-streaming',
        publishStatus: 'published',
        broadcaster: 'Swarnawahini',
        episodes: 52,
        premiereDate: '18 April',
        synopsis:
          'A compelling teledrama bringing authentic Sri Lankan family drama, romance and societal intrigue to prime-time television, now streaming internationally.',
        keyArt: mediaMap['45f2f2c9ae8a68ded0adf847272c6242.jpg'] || undefined,
        trailerUrl: 'https://www.youtube.com/watch?v=czyzGBj8cdQ',
        watchUrl: 'https://www.youtube.com/playlist?list=PLB-GuAsjHIZbuvSG1ia9F6DmEyeK0l5Yl',
        sortOrder: 1,
      },
    })

    await payload.create({
      collection: 'productions',
      data: {
        title: 'Red Soil',
        slug: 'red-soil',
        type: 'feature-film',
        productionPhase: 'in-production',
        publishStatus: 'published',
        director: 'Prasanna Withanage',
        producer: 'Rochelle Hettiarachchi',
        premiereDate: 'To be confirmed',
        synopsis:
          'A cinematic feature film directed by celebrated filmmaker Prasanna Withanage, capturing a resonant and unforgettable Sri Lankan story of resilience and love.',
        trailerUrl: 'https://www.youtube.com/watch?v=czyzGBj8cdQ',
        sortOrder: 2,
      },
    })
    payload.logger.info('Created 2 productions: Natath Ayek Sura Mathin, Red Soil')
  }

  // 4. Seed Events / Shows
  const existingEvents = await payload.find({ collection: 'events', limit: 1 })
  if (existingEvents.docs.length === 0) {
    const eventsData = [
      {
        title: 'Swaranjana',
        sinhalaTitle: 'ස්වරාංජනා',
        slug: 'swaranjana',
        type: 'concert' as const,
        eventDate: '30 Aug 2026',
        venue: 'Tony Sheumack Centre of Performing Arts, Beaconhills College, Berwick Campus VIC',
        description: 'A night of melodies that touch the heart, with Amarasiri Peiris and Nirosha Virajini.',
        poster: mediaMap['a829600621c4ec8607d558a084e4cab2.jpg'] || undefined,
        sortOrder: 1,
      },
      {
        title: 'Sathsara Miyasiya',
        sinhalaTitle: 'සත්සර මියැසිය',
        slug: 'sathsara-miyasiya',
        type: 'concert' as const,
        eventDate: '31 Jan 2026',
        venue: 'The Besen Centre, Burwood VIC',
        description: 'Sathsara Miyasiya 2026, with music direction by Indrajith Mirihana.',
        poster: mediaMap['1cc02c98749a2bb42fef7353c3dd624b.jpg'] || undefined,
        sortOrder: 2,
      },
      {
        title: 'Wingfield Family',
        sinhalaTitle: 'Tennessee Williams’s The Glass Menagerie',
        slug: 'wingfield-family',
        type: 'stage-drama' as const,
        eventDate: '6 Jun 2025',
        venue: 'Brighton Performing Arts Centre, North Brighton SA',
        description: 'Chandani Seneviratne as Amanda Wingfield. A play by Pujitha De Mel; Sinhala script by Dr Henry Jayasena.',
        poster: mediaMap['21fcc1231d1eb98cee214704e9f28f09.jpg'] || undefined,
        sortOrder: 3,
      },
      {
        title: 'Nathuwama Bari Minihek',
        sinhalaTitle: 'නැතුව බැරි මිනිහෙක් · A Man Much Needed',
        slug: 'nathuwama-bari-minihek',
        type: 'stage-drama' as const,
        eventDate: '29 Sep 2024',
        venue: 'Cardinia Cultural Centre, Pakenham VIC',
        description: 'Rajitha Dissanayake’s Best Drama at the 2017 State Drama Festival, winner of 7 awards. Third Melbourne show.',
        poster: mediaMap['f296a96ae165f0a65a50498b13067de5.jpg'] || undefined,
        sortOrder: 4,
      },
    ]

    for (const evt of eventsData) {
      await payload.create({
        collection: 'events',
        data: {
          ...evt,
          eventStatus: 'upcoming',
          publishStatus: 'published',
        },
      })
    }
    payload.logger.info('Created 4 events')
  }

  // 5. Seed Videos
  const existingVideos = await payload.find({ collection: 'videos', limit: 1 })
  if (existingVideos.docs.length === 0) {
    const featuredVid = await payload.create({
      collection: 'videos',
      data: {
        title: 'A moment with Sriyani Amarasena',
        subtitle: 'Featured video',
        youtubeUrl: 'https://www.youtube.com/watch?v=JSGLjOMCCyc&t=33s',
        description: '“I’m not Sriyani Amarasena — I’m Laddu’s mother.” A conversation with Mrs Sriyani Amarasena, who brought Laddu’s mother to life in the teledrama Natath Ayek Sura Mathin.',
        thumbnail: mediaMap['060df3a0073b10dc57dc6476de99d7f7.jpg'] || undefined,
        featured: true,
        publishStatus: 'published',
        sortOrder: 1,
      },
    })

    const otherVideos = [
      {
        title: 'Bimsara as Shanika — Natath Ayek Sura Mathin',
        subtitle: 'Teledrama · Cast interview',
        youtubeUrl: 'https://youtu.be/06Xm8l7nDbk',
        thumbnail: mediaMap['1d50863d566a049d94004e2a269b466c.jpg'] || undefined,
        sortOrder: 2,
      },
      {
        title: 'Sathsara Miyasiya — Melbourne',
        subtitle: 'Show highlights · A musical memory',
        youtubeUrl: 'https://youtu.be/0wW6uzgMlq0',
        thumbnail: mediaMap['596eac41b1f1f6fbf65845ec063535ad.jpg'] || undefined,
        sortOrder: 3,
      },
      {
        title: 'Wingfield Family — Melbourne Tour',
        subtitle: 'Show highlights · Stage drama',
        youtubeUrl: 'https://youtu.be/UCmNUQiTlZ4',
        thumbnail: mediaMap['e47632fe5de874f00ca67e7cf47387b6.jpg'] || undefined,
        sortOrder: 4,
      },
      {
        title: 'Giving back',
        subtitle: 'Our CSR work · Venus Productions',
        youtubeUrl: 'https://youtu.be/uOrzzmzwm20',
        thumbnail: mediaMap['9629927f3f396e5e256e3876e17e1028.jpg'] || undefined,
        sortOrder: 5,
      },
    ]

    for (const v of otherVideos) {
      await payload.create({
        collection: 'videos',
        data: {
          ...v,
          publishStatus: 'published',
        },
      })
    }

    // Set featured video in WatchSection
    await payload.updateGlobal({
      slug: 'watch-section',
      data: {
        sectionStatus: 'published',
        featuredVideo: featuredVid.id,
      },
    })
    payload.logger.info('Created 5 videos and updated WatchSection')
  }

  // 6. Seed CSR Initiatives
  const existingCSR = await payload.find({ collection: 'csr-initiatives', limit: 1 })
  if (existingCSR.docs.length === 0) {
    await payload.create({
      collection: 'csr-initiatives',
      data: {
        title: 'LKR 2.5 million to help little ones breathe',
        category: 'Donation · Lady Ridgeway Hospital for Children',
        description:
          'Venus Productions donated LKR 2.5 million in breathing-support equipment to Lady Ridgeway Hospital for Children, Sri Lanka’s leading children’s hospital.',
        coverImage: mediaMap['9629927f3f396e5e256e3876e17e1028.jpg'] || undefined,
        videoUrl: 'https://youtu.be/uOrzzmzwm20',
        publishStatus: 'published',
        sortOrder: 1,
      },
    })

    await payload.create({
      collection: 'csr-initiatives',
      data: {
        title: 'Celebrating the end of our teledrama',
        category: 'Community event · 13 October · Nugegoda',
        date: '13 October',
        location: 'Nugegoda, Sri Lanka',
        description:
          'We celebrated the conclusion of our teledrama by sharing a meal, a specially designed cake, and moments of joy with these beautiful souls. It was a heartfelt way to mark the end of our journey, bringing everyone together through kindness, laughter, and togetherness.',
        coverImage: mediaMap['09706f6cf8b897cd91bb906313dc9c4c.jpg'] || undefined,
        publishStatus: 'published',
        sortOrder: 2,
      },
    })
    payload.logger.info('Created 2 CSR initiatives')
  }

  // 7. Seed Globals
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Venus Productions',
      tagline: 'Film, television and live entertainment — Sri Lankan stories on screen and on stage, across Sri Lanka and Australia.',
      logoIcon: mediaMap['6692a004b32ad002c42101d498c7fa94.png'] || undefined,
      logoWordmark: mediaMap['802167aeeeca580eecd49d948f62fbe2.png'] || undefined,
      accentColor: '#D6AE5C',
      email: 'hello@venusproductions.com.au',
      phone: '+61 4XX XXX XXX',
      address: 'Melbourne, VIC, Australia',
      youtubeChannel: 'https://www.youtube.com/@VenusProductionsMagic',
      productionsSectionStatus: 'published',
      eventsSectionStatus: 'published',
      csrSectionStatus: 'published',
      contactSectionStatus: 'published',
    },
  })

  await payload.updateGlobal({
    slug: 'hero',
    data: {
      sectionStatus: 'published',
      tagline: 'Film · Television · Live entertainment',
      headline: 'Sri Lankan stories,\non screen and on stage.',
      subheadline: 'Venus Productions creates films and teledramas, and brings Sri Lanka’s finest artists to live audiences across Australia.',
      primaryCTA: {
        label: 'Explore our work',
        link: '#productions',
      },
      secondaryCTA: {
        label: 'Watch the Red Soil teaser',
        link: '#red-soil',
      },
      featuredTickers: [
        {
          label: 'In production',
          title: 'Red Soil — feature film',
          link: '#red-soil',
          dotColor: '#E2704A',
        },
        {
          label: 'Now streaming',
          title: 'Natath Ayek Sura Mathin',
          link: '#productions',
          dotColor: '#D6AE5C',
        },
      ],
    },
  })

  await payload.updateGlobal({
    slug: 'about',
    data: {
      sectionStatus: 'published',
      label: 'About us',
      headline: 'One company, telling stories across two countries.',
      paragraphs: [
        {
          text: 'Venus Productions is a film, television and live entertainment company working across Sri Lanka and Australia. We develop and produce our own screen productions — feature films and teledramas — from script to screen.',
        },
        {
          text: 'On stage, we organise concerts and stage dramas featuring celebrated Sri Lankan artists, bringing award-winning theatre and much-loved music to audiences overseas.',
        },
        {
          text: 'Whether on screen or in a theatre, our work has one purpose: connecting Sri Lankan stories and talent with audiences at home and around the world.',
        },
      ],
      decorativeImage: mediaMap['755b4debe523031de5cd68f014bb8bf2.png'] || undefined,
    },
  })

  await payload.updateGlobal({
    slug: 'highlights',
    data: {
      sectionStatus: 'published',
      stats: [
        { value: 2, label: 'Countries — Sri Lanka & Australia' },
        { value: 1, label: 'Feature film in production' },
        { value: 1, label: 'In-house teledrama' },
        { value: 4, label: 'Live productions staged in Australia' },
      ],
    },
  })

  await payload.updateGlobal({
    slug: 'ceo-message',
    data: {
      sectionStatus: 'published',
      label: 'A message from our CEO',
      quote:
        '“Our stories deserve to be told well, and to be seen widely. At Venus Productions we bring Sri Lankan writers, actors and musicians to the screen and the stage — and to audiences wherever they call home.”',
      name: 'Rochelle Stephani Hettiarachchi',
      title: 'Chief Executive Officer, Venus Productions',
    },
  })

  payload.logger.info('— Venus Productions CMS Seed Complete! —')
}

