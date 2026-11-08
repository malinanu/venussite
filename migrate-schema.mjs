import { DatabaseSync } from 'node:sqlite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dbPath = path.resolve(dirname, 'venus.db')
const backupPath = path.resolve(dirname, `venus.db.backup.${Date.now()}`)

console.log('1. Creating backup of database...')
fs.copyFileSync(dbPath, backupPath)
console.log(`✓ Backup created at: ${backupPath}`)

const db = new DatabaseSync(dbPath)

const getCols = (tbl) => db.prepare(`PRAGMA table_info(${tbl})`).all().map(c => c.name)

console.log('2. Migrating collections...')

// 1. productions
const prodCols = getCols('productions')
if (!prodCols.includes('production_phase')) {
  db.exec("ALTER TABLE productions ADD COLUMN production_phase text DEFAULT 'in-production'")
}
if (prodCols.includes('status')) {
  db.exec("UPDATE productions SET production_phase = status WHERE status IS NOT NULL")
  console.log('  ✓ Copied status -> production_phase in productions')
}
if (!prodCols.includes('publish_status')) {
  db.exec("ALTER TABLE productions ADD COLUMN publish_status text DEFAULT 'published'")
  console.log('  ✓ Added publish_status to productions')
}
if (!prodCols.includes('_status')) {
  db.exec("ALTER TABLE productions ADD COLUMN _status text DEFAULT 'published'")
  console.log('  ✓ Added _status to productions')
}
if (prodCols.includes('status')) {
  db.exec("ALTER TABLE productions DROP COLUMN status")
  console.log('  ✓ Dropped obsolete status column from productions')
}
db.exec("CREATE INDEX IF NOT EXISTS productions__status_idx ON productions (_status)")

// 2. events
const eventCols = getCols('events')
if (!eventCols.includes('event_status')) {
  db.exec("ALTER TABLE events ADD COLUMN event_status text DEFAULT 'upcoming'")
  console.log('  ✓ Added event_status to events')
}
if (!eventCols.includes('publish_status')) {
  db.exec("ALTER TABLE events ADD COLUMN publish_status text DEFAULT 'published'")
  console.log('  ✓ Added publish_status to events')
}
if (!eventCols.includes('_status')) {
  db.exec("ALTER TABLE events ADD COLUMN _status text DEFAULT 'published'")
  console.log('  ✓ Added _status to events')
}
db.exec("CREATE INDEX IF NOT EXISTS events__status_idx ON events (_status)")

// 3. videos
const videoCols = getCols('videos')
if (!videoCols.includes('publish_status')) {
  db.exec("ALTER TABLE videos ADD COLUMN publish_status text DEFAULT 'published'")
  console.log('  ✓ Added publish_status to videos')
}
if (!videoCols.includes('_status')) {
  db.exec("ALTER TABLE videos ADD COLUMN _status text DEFAULT 'published'")
  console.log('  ✓ Added _status to videos')
}
db.exec("CREATE INDEX IF NOT EXISTS videos__status_idx ON videos (_status)")

// 4. csr_initiatives
const csrCols = getCols('csr_initiatives')
if (!csrCols.includes('publish_status')) {
  db.exec("ALTER TABLE csr_initiatives ADD COLUMN publish_status text DEFAULT 'published'")
  console.log('  ✓ Added publish_status to csr_initiatives')
}
if (!csrCols.includes('_status')) {
  db.exec("ALTER TABLE csr_initiatives ADD COLUMN _status text DEFAULT 'published'")
  console.log('  ✓ Added _status to csr_initiatives')
}
db.exec("CREATE INDEX IF NOT EXISTS csr_initiatives__status_idx ON csr_initiatives (_status)")

console.log('3. Migrating globals...')

// 5. Globals: site_settings
const siteCols = getCols('site_settings')
if (!siteCols.includes('productions_section_status')) {
  db.exec("ALTER TABLE site_settings ADD COLUMN productions_section_status text DEFAULT 'published'")
}
if (!siteCols.includes('events_section_status')) {
  db.exec("ALTER TABLE site_settings ADD COLUMN events_section_status text DEFAULT 'published'")
}
if (!siteCols.includes('csr_section_status')) {
  db.exec("ALTER TABLE site_settings ADD COLUMN csr_section_status text DEFAULT 'published'")
}
if (!siteCols.includes('contact_section_status')) {
  db.exec("ALTER TABLE site_settings ADD COLUMN contact_section_status text DEFAULT 'published'")
}
console.log('  ✓ Added section status columns to site_settings')

// 6. Globals: hero, about, highlights, ceo_message, watch_section
for (const g of ['hero', 'about', 'highlights', 'ceo_message', 'watch_section']) {
  const cols = getCols(g)
  if (!cols.includes('section_status')) {
    db.exec(`ALTER TABLE ${g} ADD COLUMN section_status text DEFAULT 'published'`)
    console.log(`  ✓ Added section_status to ${g}`)
  }
}

console.log('4. Fixing index collisions...')
db.exec("DROP INDEX IF EXISTS productions_gallery_order_idx")
db.exec("DROP INDEX IF EXISTS productions_gallery_parent_id_idx")
db.exec("DROP INDEX IF EXISTS productions_gallery_image_idx")
db.exec("CREATE INDEX IF NOT EXISTS productions_gallery_order_idx ON productions_gallery (`_order`)")
db.exec("CREATE INDEX IF NOT EXISTS productions_gallery_parent_id_idx ON productions_gallery (`_parent_id`)")
db.exec("CREATE INDEX IF NOT EXISTS productions_gallery_image_idx ON productions_gallery (`image_id`)")
console.log('  ✓ Resolved productions_gallery indexes')

console.log('5. Populating baseline version snapshots...')
// productions
const prods = db.prepare("SELECT * FROM productions").all()
for (const p of prods) {
  const existing = db.prepare(`SELECT count(*) as c FROM _productions_v WHERE parent_id = ${p.id}`).get().c
  if (existing === 0) {
    db.exec(`
      INSERT INTO _productions_v (
        parent_id, version_title, version_slug, version_publish_status, version_production_phase,
        version_type, version_synopsis, version_key_art_id, version_director, version_producer,
        version_broadcaster, version_episodes, version_premiere_date, version_trailer_url,
        version_watch_url, version_sort_order, version_updated_at, version_created_at,
        version__status, latest
      ) VALUES (
        ${p.id}, '${p.title.replace(/'/g, "''")}', '${p.slug}', '${p.publish_status}', '${p.production_phase}',
        '${p.type}', ${p.synopsis ? `'${p.synopsis.replace(/'/g, "''")}'` : 'NULL'}, ${p.key_art_id || 'NULL'},
        ${p.director ? `'${p.director.replace(/'/g, "''")}'` : 'NULL'}, ${p.producer ? `'${p.producer.replace(/'/g, "''")}'` : 'NULL'},
        ${p.broadcaster ? `'${p.broadcaster.replace(/'/g, "''")}'` : 'NULL'}, ${p.episodes || 'NULL'},
        ${p.premiere_date ? `'${p.premiere_date}'` : 'NULL'}, ${p.trailer_url ? `'${p.trailer_url}'` : 'NULL'},
        ${p.watch_url ? `'${p.watch_url}'` : 'NULL'}, ${p.sort_order || 0}, '${p.updated_at}', '${p.created_at}',
        'published', 1
      )
    `)
  }
}

// events
const events = db.prepare("SELECT * FROM events").all()
for (const e of events) {
  const existing = db.prepare(`SELECT count(*) as c FROM _events_v WHERE parent_id = ${e.id}`).get().c
  if (existing === 0) {
    db.exec(`
      INSERT INTO _events_v (
        parent_id, version_title, version_sinhala_title, version_slug, version_publish_status,
        version_event_status, version_type, version_event_date, version_venue, version_description,
        version_poster_id, version_ticket_url, version_sort_order, version_updated_at,
        version_created_at, version__status, latest
      ) VALUES (
        ${e.id}, '${e.title.replace(/'/g, "''")}', ${e.sinhala_title ? `'${e.sinhala_title.replace(/'/g, "''")}'` : 'NULL'},
        '${e.slug}', '${e.publish_status}', '${e.event_status}', '${e.type}', '${e.event_date}',
        '${e.venue.replace(/'/g, "''")}', ${e.description ? `'${e.description.replace(/'/g, "''")}'` : 'NULL'},
        ${e.poster_id || 'NULL'}, ${e.ticket_url ? `'${e.ticket_url}'` : 'NULL'}, ${e.sort_order || 0},
        '${e.updated_at}', '${e.created_at}', 'published', 1
      )
    `)
  }
}

// videos
const videos = db.prepare("SELECT * FROM videos").all()
for (const v of videos) {
  const existing = db.prepare(`SELECT count(*) as c FROM _videos_v WHERE parent_id = ${v.id}`).get().c
  if (existing === 0) {
    db.exec(`
      INSERT INTO _videos_v (
        parent_id, version_title, version_subtitle, version_publish_status, version_youtube_url,
        version_description, version_thumbnail_id, version_featured, version_sort_order,
        version_updated_at, version_created_at, version__status, latest
      ) VALUES (
        ${v.id}, '${v.title.replace(/'/g, "''")}', ${v.subtitle ? `'${v.subtitle.replace(/'/g, "''")}'` : 'NULL'},
        '${v.publish_status}', '${v.youtube_url}', ${v.description ? `'${v.description.replace(/'/g, "''")}'` : 'NULL'},
        ${v.thumbnail_id || 'NULL'}, ${v.featured ? 1 : 0}, ${v.sort_order || 0},
        '${v.updated_at}', '${v.created_at}', 'published', 1
      )
    `)
  }
}

// csr_initiatives
const csrs = db.prepare("SELECT * FROM csr_initiatives").all()
for (const c of csrs) {
  const existing = db.prepare(`SELECT count(*) as c FROM _csr_initiatives_v WHERE parent_id = ${c.id}`).get().c
  if (existing === 0) {
    db.exec(`
      INSERT INTO _csr_initiatives_v (
        parent_id, version_title, version_category, version_publish_status, version_date,
        version_location, version_description, version_cover_image_id, version_video_url,
        version_sort_order, version_updated_at, version_created_at, version__status, latest
      ) VALUES (
        ${c.id}, '${c.title.replace(/'/g, "''")}', '${c.category}', '${c.publish_status}',
        ${c.date ? `'${c.date}'` : 'NULL'}, ${c.location ? `'${c.location.replace(/'/g, "''")}'` : 'NULL'},
        '${c.description.replace(/'/g, "''")}', ${c.cover_image_id || 'NULL'}, ${c.video_url ? `'${c.video_url}'` : 'NULL'},
        ${c.sort_order || 0}, '${c.updated_at}', '${c.created_at}', 'published', 1
      )
    `)
  }
}
console.log('  ✓ Baseline versions populated')

console.log('\n=============================================')
console.log('  DATABASE MIGRATION COMPLETED SUCCESSFULLY!  ')
console.log('=============================================\n')

