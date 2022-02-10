import { ApiKey } from '@libs/apiKey/models/apiKey'
import { Reporter } from '../models/reporter'

export interface ReporterClient {
  fetchWithPassword(username: string, password: string): Promise<Reporter>
  fetchWithApiKey(apiKey: ApiKey): Promise<Reporter>
}
