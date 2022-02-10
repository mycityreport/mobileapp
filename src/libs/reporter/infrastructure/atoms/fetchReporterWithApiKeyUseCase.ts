import { fetchReporterWithApiKeyUseCase } from '@libs/reporter/usecase/usecases'
import { selector } from 'recoil'
import { reporterClient } from './reporterClient'

export const fetchReporterWithApiKey = selector({
  key: 'FetchReporterWithApiKeyUseCase',
  get: ({ get }) => fetchReporterWithApiKeyUseCase(get(reporterClient)),
})
