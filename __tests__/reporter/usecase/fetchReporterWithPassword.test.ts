import { fetchReporterWithPasswordUseCase } from '@libs/reporter/usecase/usecases'
import { InMemoryReporterClient } from './InMemoryReporterClient'

describe('Reporter usecases', () => {
  it('fetch reporter with password', async () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterWithPasswordUseCase(client)

    const username = 'example'
    const password = 'password'
    const fetchedReporter = await fetchReporterWithPassword(username, password)

    expect(fetchedReporter.id).toEqual(1)
    expect(fetchedReporter.nickname).toEqual(username)
  })

  it('empty username', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterWithPasswordUseCase(client)

    const username = ''
    const password = 'password'

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid username or passowrd.'
    )
  })

  it('empty password', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterWithPasswordUseCase(client)

    const username = 'example'
    const password = ''

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid username or passowrd.'
    )
  })

  it('invalid password', () => {
    const client = new InMemoryReporterClient()
    const fetchReporterWithPassword = fetchReporterWithPasswordUseCase(client)

    const username = 'example'
    const password = 'example'

    expect(fetchReporterWithPassword(username, password)).resolves.toThrow(
      'Invalid passowrd.'
    )
  })
})
