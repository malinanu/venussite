import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user && 'role' in user && user.role === 'admin')
}

export const isAuthenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

