import { ResponseCustomField } from './customField'

export type UserResponseJSON = {
  user: UserJSON
}

export type UserJSON = {
  admin: boolean
  api_key: string
  created_on: string
  custom_fields: UserReponseCustomFields
  displayname: string
  firstname: string
  id: number
  lasst_login_on: string
  lastname: string
  login: string
  mail: string
}

export type UserReponseCustomFields = [
  IndividualOrOrganization,
  MainPostLocalGov,
  PhoneNumber,
  ZipCode,
  Address,
  YearByDecade,
  Gender,
  Job,
  IsSupporter,
  HasPostedFirstReport,
  OldRegistrationNumber,
  BirthYear
]

type IndividualOrOrganization = ResponseCustomField<'個人/団体'>
type MainPostLocalGov = ResponseCustomField<'主な投稿先自治体'>
type PhoneNumber = ResponseCustomField<'電話番号'>
type ZipCode = ResponseCustomField<'郵便番号'>
type Address = ResponseCustomField<'住所'>
type YearByDecade = ResponseCustomField<'年代'>
type Gender = ResponseCustomField<'性別'>
type Job = ResponseCustomField<'職業'>
type IsSupporter = ResponseCustomField<'サポーター登録'>
type HasPostedFirstReport = ResponseCustomField<'初期投稿チェック'>
type OldRegistrationNumber = ResponseCustomField<'旧登録番号'>
type BirthYear = ResponseCustomField<'誕生年'>
