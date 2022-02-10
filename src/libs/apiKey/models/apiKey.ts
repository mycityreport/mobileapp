export class ApiKey {
  private readonly _value: string

  public static of(value: string): ApiKey {
    return new ApiKey(value)
  }

  private constructor(value: string) {
    if (value.length !== 40) {
      throw new Error('Invalid API key length')
    }

    const apiKeyPattern = /^([0-9]|[a-f]){40}$/

    if (apiKeyPattern.exec(value) === null) {
      throw new Error('Invalid API key format')
    }

    this._value = value
  }

  public get value(): string {
    return this._value
  }
}
