// 阵营
export enum FactionEnum {
  Angel, // 天使  0
  Devil // 恶魔 1
}

// 稀有度
export enum RarityEnum {
  Normal,  // 普通 0
  Green, // 绿色  1
  Blue,// 蓝色 2
  Gold,// 黄金 3
  Diamond // 钻石 4
}

// 元素
export enum ElementEnum {
  Wind,// 风 0
  Life,// 生命 1
  Water,// 水 2
  Fire,// 火 3
  Earth// 土 4
}

// 矿类型
export enum PoolEnum {
  Wind,// 风 0
  Life,// 生命 1
  Water,// 水 2
  Fire,// 火 3
  Earth,// 土 4
  Source // 源生矿
}

// 属性
export enum AttrEnum {
  Hp,// 生命 0
  Attack,// 攻击 1
  Crit,// 暴击 2
  Speed,// 速度 3
  Defense,// 防御 4
  Dodge // 闪避 5
}

// 技能类型
export enum SkillEnum {
  WindAffinity,// 风元素亲和 0
  LifeAffinity,// 生命 1
  WaterAffinity,// 水 2
  FireAffinity,// 火 3
  EarthAffinity,// 土 4
  SourceAffinity,// 源生亲和 5
  Plunder// 掠夺 6
}
