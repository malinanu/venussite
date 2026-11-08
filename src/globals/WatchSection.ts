import type { GlobalConfig } from 'payload'
import { sectionStatusField } from '../fields/publishStatus'

export const WatchSection: GlobalConfig = {
  slug: 'watch-section',
  label: 'Watch Section',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    sectionStatusField('Watch Section'),
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Watch',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'On our YouTube channel.',
    },
    {
      name: 'featuredVideo',
      type: 'relationship',
      relationTo: 'videos',
      admin: {
        description: 'Select the video to feature prominently in this section',
      },
    },
    {
      name: 'channelCTA',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'Subscribe on YouTube',
        },
        {
          name: 'url',
          type: 'text',
          defaultValue: 'https://www.youtube.com/@VenusProductionsMagic',
        },
      ],
    },
  ],
}
