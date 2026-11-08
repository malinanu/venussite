import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              defaultValue: 'Venus Productions',
            },
            {
              name: 'tagline',
              type: 'text',
              defaultValue:
                'Film, television and live entertainment — Sri Lankan stories on screen and on stage, across Sri Lanka and Australia.',
            },
            {
              name: 'logoIcon',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'logoWordmark',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'accentColor',
              type: 'select',
              defaultValue: '#D6AE5C',
              options: [
                { label: 'Gold (Default: #D6AE5C)', value: '#D6AE5C' },
                { label: 'Light Gold (#E8C77A)', value: '#E8C77A' },
                { label: 'Dark Amber (#C9974A)', value: '#C9974A' },
              ],
            },
          ],
        },
        {
          label: 'Section Controls',
          description: 'Control visibility of collection-driven sections on the homepage',
          fields: [
            {
              name: 'productionsSectionStatus',
              type: 'select',
              defaultValue: 'published',
              required: true,
              options: [
                { label: '🟢 Published (Show Productions on website)', value: 'published' },
                { label: '🟡 Draft (Hide Productions from public)', value: 'draft' },
                { label: '🔴 Closed / Hidden (Disable Productions section)', value: 'hidden' },
              ],
            },
            {
              name: 'eventsSectionStatus',
              type: 'select',
              defaultValue: 'published',
              required: true,
              options: [
                { label: '🟢 Published (Show Live Shows & Events)', value: 'published' },
                { label: '🟡 Draft (Hide Events from public)', value: 'draft' },
                { label: '🔴 Closed / Hidden (Disable Events section)', value: 'hidden' },
              ],
            },
            {
              name: 'csrSectionStatus',
              type: 'select',
              defaultValue: 'published',
              required: true,
              options: [
                { label: '🟢 Published (Show Giving Back / CSR section)', value: 'published' },
                { label: '🟡 Draft (Hide CSR from public)', value: 'draft' },
                { label: '🔴 Closed / Hidden (Disable CSR section)', value: 'hidden' },
              ],
            },
            {
              name: 'contactSectionStatus',
              type: 'select',
              defaultValue: 'published',
              required: true,
              options: [
                { label: '🟢 Published (Show Contact / Work with us section)', value: 'published' },
                { label: '🟡 Draft (Hide Contact section)', value: 'draft' },
                { label: '🔴 Closed / Hidden (Disable Contact section)', value: 'hidden' },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              defaultValue: 'hello@venusproductions.com.au',
            },
            {
              name: 'phone',
              type: 'text',
              defaultValue: '+61 4XX XXX XXX',
            },
            {
              name: 'address',
              type: 'text',
              defaultValue: 'Melbourne, VIC, Australia',
            },
            {
              name: 'abn',
              type: 'text',
              admin: { description: 'Australian Business Number' },
            },
          ],
        },
        {
          label: 'Social & External',
          fields: [
            {
              name: 'youtubeChannel',
              type: 'text',
              defaultValue: 'https://www.youtube.com/@VenusProductionsMagic',
              admin: { description: 'Venus Productions YouTube channel URL' },
            },
            {
              name: 'facebookUrl',
              type: 'text',
            },
            {
              name: 'instagramUrl',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
