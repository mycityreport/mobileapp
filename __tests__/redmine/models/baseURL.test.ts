import { RedmineBaseURL } from '@libs/redmine/models/baseURL'

describe('RedmineBaseURL', () => {
  it('valid case', () => {
    const baseDomain = 'redmine.example.com'
    const baseURL = RedmineBaseURL.of(baseDomain)
    expect(baseURL.value).toEqual(`https://${baseDomain}`)
  })

  it('invalid case', () => {
    const baseDomain = 'https://redmine.example.com'
    expect(() => RedmineBaseURL.of(baseDomain)).toThrow(
      'Base domain should not contain scheme.'
    )
  })
})
