import { NickName } from '@libs/reporter/models/nickname'
import { Reporter } from '@libs/reporter/models/reporter'
import { ReporterID } from '@libs/reporter/models/reporterID'

describe('Reporter model', () => {
  it('valid case', () => {
    const reporterID = ReporterID.of(1)
    const nickName = NickName.of('example')
    const reporter = new Reporter(reporterID, nickName)
  })
})
