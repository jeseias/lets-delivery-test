import { AppRoutes } from '@/main/constants'
import { makeDetailedRoute, parseSlug, slugify } from '@/presentation/utils/utils'

describe('UI Utility Functions', () => {
  it(slugify.name, () => {
    expect(slugify('james bond')).toBe('james-bond')
  })

  it(parseSlug.name, () => {
    expect(parseSlug('james-bond')).toBe('james bond')
  })

  it(makeDetailedRoute.name, () => {
    expect(makeDetailedRoute('james bond')).toBe(`${AppRoutes.Characters}/james-bond`)
  })
})
