import type { GlobalConfig } from 'payload'
import { sectionStatusField } from '../fields/publishStatus'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Section',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    sectionStatusField('About Section'),
    {
      name: 'label',
      type: 'text',
      defaultValue: 'About us',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'One company, telling stories across two countries.',
    },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'decorativeImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
