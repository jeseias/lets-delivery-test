import { AppRoutes } from '@/main/constants'

export const slugify = (value: string): string => `${value.replaceAll(' ', '-')}`
export const parseSlug = (value: string): string => `${value.replaceAll('-', ' ')}`
export const makeDetailedRoute = (name: string): string => `${AppRoutes.Characters}/${slugify(name)}`
