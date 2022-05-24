import { HeroInfo } from 'types/store'
import { AttrEnum, ElementEnum, FactionEnum, RarityEnum, SkillEnum } from 'src/enums/assetsEnum'
import { useNFT } from 'hooks/web3/useNFT'
const { getInfo } = useNFT()
function errorTransform(error: string) {
  if (error.includes('Internal JSON-RPC error.')) {
    return JSON.parse(error.replace('Internal JSON-RPC error.', '').trim())
  } else {
    return error
  }
}
export function errorHandel(error: Error, callback?: Function) {
  if (error) {
    const errorInfo = errorTransform(error.message)
    callback?.(errorInfo.message ? errorInfo : error)
  }
}
export async function getNFTCardList(tokenIds: string[]) {
  // eslint-disable-next-line no-async-promise-executor
  const nftList = new Promise(async (resolve, reject) => {
    const newArray: HeroInfo[] = []
    for (const tokenId of tokenIds) {
      const heroInfo: HeroInfo | void = await getInfo(tokenId).then((res: any) => {
        const result: HeroInfo = {
          tokenId: '',
          attrs: {},
          skills: [],
          stamina: '',
          rarity: '',
          faction: '',
          element: ''
        }
        result.tokenId = tokenId
        result.stamina = res.stamina
        result.rarity = RarityEnum[res.rarity]
        result.faction = FactionEnum[res.faction]
        result.element = ElementEnum[res.element].toLowerCase()
        res.attrs.forEach((item: string, index: number) => {
          result.attrs[AttrEnum[index].toLowerCase()] = item
        })
        res.exists.forEach((item: string, index: number) => {
          item === '1' && result.skills.push(SkillEnum[index].toLowerCase())
        })
        return result
      })
        .catch((error) => {
          reject(error)
        })
      newArray.push(<HeroInfo>heroInfo)
    }
    resolve(newArray)
  })
  const result = Promise.resolve(nftList)
  return result
}

export const setHeroInfo = (rawData: any): HeroInfo => {
  return {
    tokenId: rawData.tokenId,
    stamina: rawData.stamina,
    rarity: RarityEnum[rawData.rarity],
    faction: FactionEnum[rawData.faction],
    element: ElementEnum[rawData.element].toLowerCase(),
    attrs: rawData.attrs.reduce((pre: Indexable, cur: string, index: number) => {
      return { ...pre, [AttrEnum[index].toLowerCase()]: cur }
    }, {}),
    skills: rawData.exists.map((item: string, index: number) => {
      return item === '1' && SkillEnum[index].toLowerCase()
    }).filter((item: string | boolean) => item)
  }
}
