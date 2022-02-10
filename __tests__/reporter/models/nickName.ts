import { NickName } from '@libs/reporter/models/nickname'

describe('Reporter Nick name', () => {
  it('valid case', () => {
    const rawNickName = 'example'
    const nickName = NickName.of(rawNickName)
    expect(nickName.value).toEqual(rawNickName)
  })

  it('invalid case', () => {
    const emptyNickName = ''
    expect(() => NickName.of(emptyNickName)).toThrow('Empty nickname.')
  })
})
