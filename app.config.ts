import { ExpoConfig } from '@expo/config-types'

type Props = { config: ExpoConfig }

const defaultRedmineBaseDomain = 'localhost:3000'
const redmineBaseDomain = process.env.REDMINE_BASE_DOMAIN ?? defaultRedmineBaseDomain

export default ({ config }: Props): ExpoConfig => {
  return {
    ...config,
    extra: {
      redmineBaseDomain,
    },
  }
}
