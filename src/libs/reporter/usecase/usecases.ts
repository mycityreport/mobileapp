import { ApiKey } from '@libs/apiKey/models/apiKey'
import { ReporterClient } from './reporterClient'
import { ReporterDTO } from './reporterDTO'

type FetchReporterWithPasswordUseCase = (
  username: string,
  password: string
) => Promise<ReporterDTO>

export function fetchReporterWithPasswordUseCase(
  client: ReporterClient
): FetchReporterWithPasswordUseCase {
  return async (username: string, password: string) => {
    const fetchedReporter = await client.fetchWithPassword(username, password)
    return ReporterDTO.fromReporter(fetchedReporter)
  }
}

type FetchReporterWithApiKeyUseCase = (apiKey: ApiKey) => Promise<ReporterDTO>

export function fetchReporterWithApiKeyUseCase(
  client: ReporterClient
): FetchReporterWithApiKeyUseCase {
  return async (apiKey: ApiKey) => {
    const fetchedReporter = await client.fetchWithApiKey(apiKey)
    return ReporterDTO.fromReporter(fetchedReporter)
  }
}
