import { getPayload } from 'payload'
import config from '@/payload.config'
import { seedDatabase } from '@/seed'

export const GET = async () => {
  try {
    const payload = await getPayload({ config })
    await seedDatabase(payload)
    return Response.json({ success: true, message: 'Database seeded successfully' })
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}

