export class RedmineBaseURL {
  private readonly _value: string

  public static of(baseDomain: string): RedmineBaseURL {
    return new RedmineBaseURL(baseDomain)
  }

  private constructor(baseDomain: string) {
    const urlPattern = /^http/
    if (urlPattern.exec(baseDomain)) {
      throw new Error('Base domain should not contain scheme.')
    }

    this._value = `https://${baseDomain}`
  }

  public get value(): string {
    return this._value
  }
}
