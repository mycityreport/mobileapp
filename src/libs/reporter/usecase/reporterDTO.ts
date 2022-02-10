import { Reporter } from '../models/reporter'

export class ReporterDTO {
  public static fromReporter(reporter: Reporter): ReporterDTO {
    const id = reporter.id
    const nickname = reporter.nickname

    return new ReporterDTO(id, nickname)
  }

  private constructor(
    public readonly id: number,
    public readonly nickname: string
  ) {}
}
