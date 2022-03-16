import { redmineBaseURL } from '@libs/redmine/infrastructure/atoms/redmineBaseURL'
import { selector } from 'recoil'
import { RedmineReporterClient } from '../../redmineReporterClient'

export const reporterClient = selector({
  key: 'ReporterClient',
  get: ({ get }) => new RedmineReporterClient(get(redmineBaseURL)),
})
