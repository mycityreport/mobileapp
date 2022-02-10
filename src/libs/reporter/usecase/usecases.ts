import { ApiKey } from '@libs/apiKey/models/apiKey'
import { ReporterClient } from './reporterClient'
import { ReporterDTO } from './reporterDTO'

type FetchReporterFromPasswordUseCase = (
  username: string,
  password: string
) => Promise<ReporterDTO>

export function fetchReporterFromPasswordUseCase(
  client: ReporterClient
): FetchReporterFromPasswordUseCase {
  return async (username: string, password: string) => {
    const fetchedReporter = await client.fetchWithPassword(username, password)
    return ReporterDTO.fromReporter(fetchedReporter)
  }
}

type FetchReporterFromApiKeyUseCase = (apiKey: ApiKey) => Promise<ReporterDTO>

export function fetchReporterFromApiKeyUseCase(
  client: ReporterClient
): FetchReporterFromApiKeyUseCase {
  return async (apiKey: ApiKey) => {
    const fetchedReporter = await client.fetchWithApiKey(apiKey)
    return ReporterDTO.fromReporter(fetchedReporter)
  }
}
