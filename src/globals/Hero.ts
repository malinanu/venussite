import type { GlobalConfig } from 'payload'
import { sectionStatusField } from '../fields/publishStatus'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    sectionStatusField('Hero Section'),
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Film · Television · Live entertainment',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Sri Lankan stories, on screen and on stage.',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      defaultValue:
        'Venus Productions creates films and teledramas, and brings Sri Lanka’s finest artists to live audiences across Australia.',
    },
    {
      name: 'primaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Explore our work' },
        { name: 'link', type: 'text', defaultValue: '#productions' },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Watch the Red Soil teaser' },
        { name: 'link', type: 'text', defaultValue: '#red-soil' },
      ],
    },
    {
      name: 'featuredTickers',
      type: 'array',
      maxRows: 4,
      admin: {
        description: 'Bottom ticker cards (e.g. "In production: Red Soil", "Now streaming: Natath Ayek Sura Mathin")',
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
        {
          name: 'dotColor',
          type: 'select',
          defaultValue: '#D6AE5C',
          options: [
            { label: 'Gold (#D6AE5C)', value: '#D6AE5C' },
            { label: 'Terracotta (#E2704A)', value: '#E2704A' },
            { label: 'Green (#5CB85C)', value: '#5CB85C' },
          ],
        },
      ],
    },
  ],
}
