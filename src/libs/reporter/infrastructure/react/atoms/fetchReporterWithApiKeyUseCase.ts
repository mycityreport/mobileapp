import { fetchReporterWithApiKeyUseCase } from '@libs/reporter/usecase/usecases'
import { selector } from 'recoil'
import { reporterClient } from './reporterClient'

export const fetchReporterWithApiKeyInstance = selector({
  key: 'FetchReporterWithApiKeyUseCase',
  get: ({ get }) => fetchReporterWithApiKeyUseCase(get(reporterClient)),
})
