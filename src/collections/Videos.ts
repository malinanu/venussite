import type { CollectionConfig } from 'payload'
import { isAdmin, isAuthenticated } from '../access/isAdmin'
import { publishStatusField } from '../fields/publishStatus'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle', 'publishStatus', 'featured', 'updatedAt'],
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
      name: 'subtitle',
      type: 'text',
      admin: {
        description: 'Category/type label, e.g. "Teledrama · Cast interview"',
      },
    },
    publishStatusField,
    {
      name: 'youtubeUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Full YouTube video link',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show as the large featured video in the Watch section',
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
