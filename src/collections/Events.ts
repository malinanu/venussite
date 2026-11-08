import type { CollectionConfig } from 'payload'
import { slugField } from '../hooks/slugify'
import { isAdmin, isAuthenticated } from '../access/isAdmin'
import { publishStatusField } from '../fields/publishStatus'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventDate', 'publishStatus', 'eventStatus', 'venue'],
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
      name: 'sinhalaTitle',
      type: 'text',
      admin: {
        description: 'Title in Sinhala script (e.g. ස්වරාංජනා)',
      },
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
      name: 'eventStatus',
      type: 'select',
      defaultValue: 'upcoming',
      required: true,
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Sold Out', value: 'sold-out' },
        { label: 'Past Event', value: 'past' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Event ticketing / scheduling status',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Concert', value: 'concert' },
        { label: 'Stage Drama', value: 'stage-drama' },
        { label: 'Cultural Event', value: 'cultural-event' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'eventDate',
      type: 'text',
      required: true,
      admin: {
        description: 'Formatted date, e.g. "30 Aug 2026"',
        position: 'sidebar',
      },
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
      admin: {
        description: 'Venue and location, e.g. "Beaconhills College, Berwick Campus VIC"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Key cast, artists, or show details',
      },
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ticketUrl',
      type: 'text',
      admin: {
        description: 'Link to buy tickets (if applicable)',
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
