import { ApiKey } from '@libs/apiKey/models/apiKey'
import { fetchReporterFromApiKeyUseCase } from '@libs/reporter/usecase/usecases'
import { InMemoryReporterClient } from './InMemoryReporterClient'

describe('Reporter usecases', () => {
  it('fetch reporter with apiKey', async () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithApiKey = fetchReporterFromApiKeyUseCase(client)

    const apiKey = ApiKey.of('aac4adfd05f0d29832631240764c0d6e15eeac40')
    const fetchedReporter = await fetchReporterWithApiKey(apiKey)

    expect(fetchedReporter.id).toEqual(1)
    expect(fetchedReporter.nickname).toEqual('example')
  })

  it('invalid api key', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithApiKey = fetchReporterFromApiKeyUseCase(client)

    const apiKey = ApiKey.of('aac4adfd05f0d29832631240764c0d6e15eeac41')

    expect(fetchReporterWithApiKey(apiKey)).resolves.toThrow('Invalid api key.')
  })
})
