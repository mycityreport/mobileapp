export class ReporterID {
  private readonly _value: number

  public static of(value: number): ReporterID {
    return new ReporterID(value)
  }

  private constructor(value: number) {
    if (value <= 0) {
      throw new Error('Reporter ID should be a positive number.')
    }
    this._value = value
  }

  public get value(): number {
    return this._value
  }
}
