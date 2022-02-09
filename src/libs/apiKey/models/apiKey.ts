export class ApiKey {
  private readonly _apiKeyBrand = undefined
  public readonly value: string

  public static of(value: string): ApiKey {
    return new ApiKey(value)
  }

  private constructor(value: string) {
    if (value.length !== 40) {
      throw new Error('Invalid API key length')
    }

    const apiKeyPattern = /([0-9]|[a-f]){40}/

    if (apiKeyPattern.exec(value) === null) {
      throw new Error('Invalid API key format')
    }

    this.value = value
  }
}
