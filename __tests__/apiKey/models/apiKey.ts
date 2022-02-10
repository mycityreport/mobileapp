import { ApiKey } from '@libs/apiKey/models/apiKey'

describe('ApiKey model', () => {
  it('make an API Key object from valid api key', () => {
    const rawApiKey = 'a9a01b67d3c378caf49f50495d2707c23710176b'
    const obj = ApiKey.of(rawApiKey)
    expect(obj.value).toEqual(rawApiKey)
  })

  it('it should be failed with invalid length api key', () => {
    const longerApiKey = 'a9a01b67d3c378caf49f50495d2707c23710176b1'
    expect(() => ApiKey.of(longerApiKey)).toThrow('Invalid API key length')

    const shorterApiKey = 'a9a01b67d3c378caf49f50495d2707c23710176'
    expect(() => ApiKey.of(shorterApiKey)).toThrow('Invalid API key length')
  })

  it('it should be failed with invalid character in an api key', () => {
    const invalidApiKey = 'a9a01b67d3c378caf49z50495d2707c23710176b'
    expect(() => ApiKey.of(invalidApiKey)).toThrow('Invalid API key format')
  })
})
