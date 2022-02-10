import { ReporterID } from '@libs/reporter/models/reporterID'

describe('Reporter ID', () => {
  it('valid case', () => {
    const reporterIdNumber = 3
    const reporterID = ReporterID.of(reporterIdNumber)
    expect(reporterID.value).toEqual(reporterIdNumber)
  })

  it('invalid case', () => {
    const zeroReporterId = 0
    expect(() => ReporterID.of(zeroReporterId)).toThrow(
      'Reporter ID should be a positive number.'
    )
    const negativeReporterId = -1
    expect(() => ReporterID.of(negativeReporterId)).toThrow(
      'Reporter ID should be a positive number.'
    )
  })
})
