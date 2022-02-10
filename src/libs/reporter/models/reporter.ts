import { NickName } from './nickname'
import { ReporterID } from './reporterID'

export class Reporter {
  constructor(
    private readonly _id: ReporterID,
    private readonly _nickname: NickName
  ) {}

  public get id(): number {
    return this._id.value
  }

  public get nickname(): string {
    return this._nickname.value
  }
}
