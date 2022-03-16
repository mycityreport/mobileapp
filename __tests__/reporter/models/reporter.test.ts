import { ApiKey } from '@libs/apiKey/models/apiKey'
import { NickName } from '@libs/reporter/models/nickname'
import { Reporter } from '@libs/reporter/models/reporter'
import { ReporterID } from '@libs/reporter/models/reporterID'

describe('Reporter model', () => {
  it('valid case', () => {
    const reporterID = ReporterID.of(1)
    const nickName = NickName.of('example')
    const apiKey = ApiKey.of('8023caed8f0843f84aa69444898ad31c6c9ce599')
    const reporter = new Reporter(reporterID, nickName, apiKey)
    expect(reporter.id).toEqual(reporterID.value)
    expect(reporter.nickname).toEqual(nickName.value)
    expect(reporter.apiKey).toEqual(apiKey.value)
  })
})
