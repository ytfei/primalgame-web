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
