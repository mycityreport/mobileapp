import { ApiKey } from '../models/apiKey'

export class ApiKeyDTO {
  private _value: string

  public static fromApiKey(apiKey: ApiKey): ApiKeyDTO {
    return new ApiKeyDTO(apiKey.value)
  }

  private constructor(apiKey: string) {
    this._value = apiKey
  }

  public get value(): string {
    return this._value
  }
}
