import { Reporter } from '../models/reporter'

export class ReporterDTO {
  public static fromReporter(reporter: Reporter): ReporterDTO {
    const id = reporter.id
    const nickname = reporter.nickname
    const apiKey = reporter.apiKey

    return new ReporterDTO(id, nickname, apiKey)
  }

  private constructor(
    public readonly id: number,
    public readonly nickname: string,
    public readonly apiKey: string
  ) {}
}
