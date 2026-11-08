import type { GlobalConfig } from 'payload'
import { sectionStatusField } from '../fields/publishStatus'

export const CEOMessage: GlobalConfig = {
  slug: 'ceo-message',
  label: 'CEO Message',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    sectionStatusField('CEO Message Section'),
    {
      name: 'label',
      type: 'text',
      defaultValue: 'A message from our CEO',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      defaultValue:
        '“Our stories deserve to be told well, and to be seen widely. At Venus Productions we bring Sri Lankan writers, actors and musicians to the screen and the stage — and to audiences wherever they call home.”',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Rochelle Stephani Hettiarachchi',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Chief Executive Officer, Venus Productions',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
