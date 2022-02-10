import { ApiKey } from '@libs/apiKey/models/apiKey'
import {
  fetchReporterFromApiKeyUseCase,
  fetchReporterFromPasswordUseCase,
} from '@libs/reporter/usecase/usecases'
import { InMemoryReporterClient } from './InMemoryReporterClient'

describe('Reporter usecases', () => {
  it('fetch reporter with password', async () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterFromPasswordUseCase(client)

    const username = 'example'
    const password = 'password'
    const fetchedReporter = await fetchReporterWithPassword(username, password)

    expect(fetchedReporter.id).toEqual(1)
    expect(fetchedReporter.nickname).toEqual(username)
  })

  it('fetch reporter with apiKey', async () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithApiKey = fetchReporterFromApiKeyUseCase(client)

    const apiKey = ApiKey.of('aac4adfd05f0d29832631240764c0d6e15eeac40')
    const fetchedReporter = await fetchReporterWithApiKey(apiKey)

    expect(fetchedReporter.id).toEqual(1)
    expect(fetchedReporter.nickname).toEqual('example')
  })

  it('empty username', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterFromPasswordUseCase(client)

    const username = ''
    const password = 'password'

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid username or passowrd.'
    )
  })

  it('empty password', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterFromPasswordUseCase(client)

    const username = 'example'
    const password = ''

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid username or passowrd.'
    )
  })

  it('invalid password', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterFromPasswordUseCase(client)

    const username = 'example'
    const password = 'example'

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid passowrd.'
    )
  })

  it('invalid api key', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithApiKey = fetchReporterFromApiKeyUseCase(client)

    const apiKey = ApiKey.of('aac4adfd05f0d29832631240764c0d6e15eeac41')

    expect(fetchReporterWithApiKey(apiKey)).resolves.toThrow('Invalid api key.')
  })
})
