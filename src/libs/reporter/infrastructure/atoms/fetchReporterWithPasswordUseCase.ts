import { fetchReporterWithPasswordUseCase } from '@libs/reporter/usecase/usecases'
import { selector } from 'recoil'
import { reporterClient } from './reporterClient'

export const fetchReporterWithPassword = selector({
  key: 'FetchReporterWithPasswordUseCase',
  get: ({ get }) => fetchReporterWithPasswordUseCase(get(reporterClient)),
})
