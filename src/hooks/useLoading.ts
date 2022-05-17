import { ElLoading } from 'element-plus'
import { computed, ref } from 'vue'

const globalLoading = ref<boolean>(false)
export function useLoading() {
  function getLoading() {
    return computed(() => globalLoading.value)
  }
  function setLoading(value: boolean) {
    globalLoading.value = value
    ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(255,255,255,0.8)'
    })
  }
  return {
    getLoading,
    setLoading
  }
}
