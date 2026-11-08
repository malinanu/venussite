import type { CollectionConfig } from 'payload'
import { isAdmin, isAuthenticated } from '../access/isAdmin'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    read: isAuthenticated,
    create: isAdmin,
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
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        update: ({ req: { user } }) => Boolean(user && 'role' in user && user.role === 'admin'),
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
