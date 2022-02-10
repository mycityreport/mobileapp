export class NickName {
  private readonly _value: string

  public static of(value: string): NickName {
    return new NickName(value)
  }

  private constructor(value: string) {
    if (value.length === 0) {
      throw new Error('Empty nickname.')
    }
    this._value = value
  }

  public get value(): string {
    return this._value
  }
}
