import type { CollectionConfig } from 'payload'
import { isAdmin, isAuthenticated } from '../access/isAdmin'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'category', 'readStatus', 'createdAt'],
    description: 'Contact form submissions from the website',
  },
  access: {
    // Anyone can submit an inquiry via website form
    create: () => true,
    // Only authenticated users can read
    read: isAuthenticated,
    // Authenticated users can update status (mark read, etc.)
    update: isAuthenticated,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Artist', value: 'artist' },
        { label: 'Venue', value: 'venue' },
        { label: 'Sponsor', value: 'sponsor' },
        { label: 'Broadcaster', value: 'broadcaster' },
        { label: 'Co-producer', value: 'co-producer' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'organisation',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'readStatus',
      type: 'select',
      defaultValue: 'unread',
      options: [
        { label: 'Unread', value: 'unread' },
        { label: 'Read', value: 'read' },
        { label: 'Responded', value: 'responded' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
