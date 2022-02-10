import { NickName } from './nickname'
import { ReporterID } from './reporterID'

export class Reporter {
  private _id: ReporterID
  private _nickname: NickName

  constructor(id: ReporterID, nickname: NickName) {
    this._id = id
    this._nickname = nickname
  }

  public get id(): number {
    return this._id.value
  }

  public get nickname(): string {
    return this._nickname.value
  }
}
