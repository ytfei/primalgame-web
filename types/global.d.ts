declare interface ViteEnv {
  VITE_DROP_CONSOLE: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  // VITE_USE_IMAGEMIN: boolean
}

declare type Indexable<T = any> = {
  [key: string]: T
}

declare type Nullable<T> = T | null

declare interface Result<T = any> {
  code: number;
  msg: string;
  data: T;
}
declare type PromiseResult<T = any> = Promise<Result<T>>

interface ErrorInfo extends Error {
  code: number
}

declare interface HeroList {
  attrs: any,
  element: string,
  faction: string,
  rarity: string,
  skills: any,
  stamina: string
}
