import type { Media } from '../payload-types'

export const getMediaUrl = (media: number | Media | null | undefined, fallback: string = ''): string => {
  if (!media) return fallback
  if (typeof media === 'object' && media.url) {
    return media.url
  }
  return fallback
}

