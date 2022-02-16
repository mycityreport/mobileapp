import { ApiKey } from '@libs/apiKey/models/apiKey'
import { NickName } from './nickname'
import { ReporterID } from './reporterID'

export class Reporter {
  constructor(
    private readonly _id: ReporterID,
    private readonly _nickname: NickName,
    private readonly _apiKey: ApiKey
  ) {}

  public get id(): number {
    return this._id.value
  }

  public get nickname(): string {
    return this._nickname.value
  }

  public get apiKey(): string {
    return this._apiKey.value
  }
}
