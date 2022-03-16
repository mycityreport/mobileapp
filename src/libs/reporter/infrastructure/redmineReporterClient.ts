import { ApiKey } from '@libs/apiKey/models/apiKey'
import { RedmineBaseURL } from '@libs/redmine/models/baseURL'
import { UserResponseJSON } from '@libs/redmine/responses/user'
import base64 from 'react-native-base64'
import { NickName } from '../models/nickname'
import { Reporter } from '../models/reporter'
import { ReporterID } from '../models/reporterID'
import { ReporterClient } from '../usecase/reporterClient'

export class RedmineReporterClient implements ReporterClient {
  constructor(private readonly _baseURL: RedmineBaseURL) {}

  private readonly accountEndPoint = '/my/account.json'

  private get baseURL(): string {
    return this._baseURL.value
  }

  public async fetchWithPassword(
    username: string,
    password: string
  ): Promise<Reporter> {
    const url = new URL(this.accountEndPoint, this.baseURL)
    const hashedAuth = base64.encode(`${username}:${password}`)
    const headers = {
      Authorization: `Basic ${hashedAuth}`,
    }
    const response = await fetch(url.toString(), { headers })

    if (response.ok) {
      const userJSON = await response.json()
      return this.userToReporter(userJSON)
    } else {
      const errorMessage = await response.text()
      throw new Error(`Failed to authenticate: ${errorMessage}`)
    }
  }

  public async fetchWithApiKey(apiKey: ApiKey): Promise<Reporter> {
    const url = new URL(this.accountEndPoint, this.baseURL)
    const headers = {
      'X-Redmine-API-Key': apiKey.value,
    }
    const response = await fetch(url.toString(), { headers })

    if (response.ok) {
      const userJSON = await response.json()
      return this.userToReporter(userJSON)
    } else {
      const errorMessage = await response.text()
      throw new Error(`Failed to authenticate: ${errorMessage}`)
    }
  }

  private userToReporter(response: UserResponseJSON): Reporter {
    const { user } = response

    const id = ReporterID.of(user.id)
    const nickname = NickName.of(user.displayname)
    const apiKey = ApiKey.of(user.api_key)

    return new Reporter(id, nickname, apiKey)
  }
}
