import type { FieldHook } from 'payload'

export const formatSlug = (val: string): string =>
  val
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

export const slugField: FieldHook = ({ value, data, operation }) => {
  if (operation === 'create' && !value && data?.title) {
    return formatSlug(data.title)
  }
  return value
}

