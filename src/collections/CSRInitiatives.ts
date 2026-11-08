import type { CollectionConfig } from 'payload'
import { isAdmin, isAuthenticated } from '../access/isAdmin'
import { publishStatusField } from '../fields/publishStatus'

export const CSRInitiatives: CollectionConfig = {
  slug: 'csr-initiatives',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishStatus', 'date', 'updatedAt'],
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
      name: 'category',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Donation · Lady Ridgeway Hospital for Children"',
      },
    },
    publishStatusField,
    {
      name: 'date',
      type: 'text',
      admin: {
        description: 'Date or timeframe, e.g. "13 October" or "2026"',
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'e.g. "Nugegoda" or "Colombo, Sri Lanka"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'Optional video link (e.g. YouTube)',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
