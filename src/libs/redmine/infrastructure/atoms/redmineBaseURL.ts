import Constants from 'expo-constants'
import { RedmineBaseURL } from '@libs/redmine/models/baseURL'
import { atom } from 'recoil'

export const redmineBaseURL = atom({
  key: 'RedmineBaseURL',
  default: RedmineBaseURL.of(Constants.manifest?.extra?.redmineBaseDomain),
})
