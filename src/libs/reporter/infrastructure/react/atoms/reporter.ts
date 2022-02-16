import { atom } from 'recoil'
import { ReporterObj } from '../object/reporter'

export const reporterState = atom<ReporterObj | undefined>({
  key: 'Reporter',
  default: undefined,
})
