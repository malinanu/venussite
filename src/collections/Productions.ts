import type { CollectionConfig } from 'payload'
import { slugField } from '../hooks/slugify'
import { isAdmin, isAuthenticated } from '../access/isAdmin'
import { publishStatusField } from '../fields/publishStatus'

export const Productions: CollectionConfig = {
  slug: 'productions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'productionPhase', 'publishStatus', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [slugField],
      },
      admin: { position: 'sidebar' },
    },
    publishStatusField,
    {
      name: 'productionPhase',
      type: 'select',
      required: true,
      defaultValue: 'in-production',
      options: [
        { label: 'In Development', value: 'in-development' },
        { label: 'In Production', value: 'in-production' },
        { label: 'Post-Production', value: 'post-production' },
        { label: 'Now Streaming', value: 'now-streaming' },
        { label: 'Completed', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Current film / teledrama production phase',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Feature Film', value: 'feature-film' },
        { label: 'Teledrama', value: 'teledrama' },
        { label: 'Short Film', value: 'short-film' },
        { label: 'Documentary', value: 'documentary' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'synopsis',
      type: 'textarea',
      admin: {
        description: 'Short synopsis or story description',
      },
    },
    {
      name: 'keyArt',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'director',
      type: 'text',
    },
    {
      name: 'producer',
      type: 'text',
    },
    {
      name: 'broadcaster',
      type: 'text',
      admin: {
        condition: (data) => data?.type === 'teledrama',
        description: 'e.g. Swarnawahini',
      },
    },
    {
      name: 'episodes',
      type: 'number',
      admin: {
        condition: (data) => data?.type === 'teledrama',
      },
    },
    {
      name: 'premiereDate',
      type: 'text',
      admin: {
        description: 'e.g. "18 April" or "To be confirmed"',
      },
    },
    {
      name: 'trailerUrl',
      type: 'text',
      admin: {
        description: 'YouTube trailer/teaser URL',
      },
    },
    {
      name: 'watchUrl',
      type: 'text',
      admin: {
        description: 'Link to watch (playlist, streaming platform, etc.)',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      admin: {
        description: 'Behind-the-scenes and promotional images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
