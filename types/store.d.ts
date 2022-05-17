export interface UserInfo {
  userId: string | number
  username: string
  realName: string
  avatar: string
  desc?: string
  homePath?: string
  roles: []
}

export interface HeroInfo {
  tokenId: string
  attrs: any
  element: string
  faction: string
  rarity: string
  skills: any
  stamina: string
}
