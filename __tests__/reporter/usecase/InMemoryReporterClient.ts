import { ApiKey } from '@libs/apiKey/models/apiKey'
import { NickName } from '@libs/reporter/models/nickname'
import { Reporter } from '@libs/reporter/models/reporter'
import { ReporterID } from '@libs/reporter/models/reporterID'
import { ReporterClient } from '@libs/reporter/usecase/reporterClient'

export class InMemoryReporterClient implements ReporterClient {
  public async fetchWithPassword(
    username: string,
    password: string
  ): Promise<Reporter> {
    if (username === '' || password === '') {
      throw new Error('Invalid username or passowrd.')
    }
    if (password !== 'password') {
      throw new Error('Invalid passowrd.')
    }

    const id = ReporterID.of(1)
    const nickname = NickName.of(username)
    const apikey = ApiKey.of('d012ded50105308c87f1b595f9c34b3ed3d078e1')

    return new Reporter(id, nickname, apikey)
  }

  public async fetchWithApiKey(apiKey: ApiKey): Promise<Reporter> {
    const actualApiKey = 'aac4adfd05f0d29832631240764c0d6e15eeac40'

    if (apiKey.value !== actualApiKey) {
      throw new Error('Invalid api key.')
    }

    const id = ReporterID.of(1)
    const nickname = NickName.of('example')

    return new Reporter(id, nickname, apiKey)
  }
}
