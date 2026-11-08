import type { Field } from 'payload'

export const publishStatusField: Field = {
  name: 'publishStatus',
  type: 'select',
  defaultValue: 'published',
  required: true,
  options: [
    { label: '🟢 Published (Visible on website)', value: 'published' },
    { label: '🟡 Draft (Hidden from public)', value: 'draft' },
    { label: '🔴 Closed / Archived (Hidden from public)', value: 'closed' },
  ],
  admin: {
    position: 'sidebar',
    description: 'Control visibility on the public website',
  },
}

export const sectionStatusField = (sectionName: string): Field => ({
  name: 'sectionStatus',
  type: 'select',
  defaultValue: 'published',
  required: true,
  options: [
    { label: '🟢 Published (Visible on website)', value: 'published' },
    { label: '🟡 Draft (Hidden from public)', value: 'draft' },
    { label: '🔴 Closed / Hidden (Section disabled)', value: 'hidden' },
  ],
  admin: {
    position: 'sidebar',
    description: `Control whether the ${sectionName} is shown on the live website`,
  },
})

