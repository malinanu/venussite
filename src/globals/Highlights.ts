import type { GlobalConfig } from 'payload'
import { sectionStatusField } from '../fields/publishStatus'

export const Highlights: GlobalConfig = {
  slug: 'highlights',
  label: 'Highlights / Key Metrics',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    sectionStatusField('Highlights / Key Metrics Section'),
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 8,
      admin: {
        description: 'Key statistics displayed in the animated counters block',
      },
      fields: [
        {
          name: 'value',
          type: 'number',
          required: true,
          admin: { description: 'Target number for counter (e.g. 2, 1, 4)' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'Description below the number (e.g. "Countries — Sri Lanka & Australia")' },
        },
      ],
    },
  ],
}
