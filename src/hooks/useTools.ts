export function useTools() {
  const hideSensitive = (
    str: string | undefined,
    preCount: number = 0,
    endCount: number = 0
  ) => {
    const reg = new RegExp(`^(\\S{${preCount}})\\S+(\\S{${endCount}})$`, 'gi')
    return str?.toString().replace(reg, '$1****$2')
  }
  return {
    hideSensitive
  }
}
