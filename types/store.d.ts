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
  status?: string  // 野怪击败状态
}

export interface ResourceInfo {
  earth: string
  fire: string
  source: string
  water: string
  wind: string
}

export interface BattleResult { // 战斗结果
  captureSelfId: string // 自己是否被捕获id值为0没被捕
  captureEnemieId: string // 自己是否被捕获id值为0没被捕
  success: boolean
}
